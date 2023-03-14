//***********************intersection type : 다른 타입을 결합할 수 있다.***********************/

type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//두 객체 타입의 속성의 조합이 ElevatiedEmployee 타입이 된다.
type ElevatiedEmployee = Admin & Employee;

const e1: ElevatiedEmployee = {
  name: "Max",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type Combinabl = string | number;
type Numeric = number | boolean;

//타입스트립트는 Universal을 숫자 타입으로 간주한다.
//유니언 타입인 Combinabl과 Nummeric의 교차점이 number 타입이기 때문에.
type Universal = Combinabl & Numeric;

//***********************타입 가드***********************/
// Combinabl과 같은 유니언 타입은 유연성을 가지지만 런타임 시 정확히 어떤 타입을 가질지 알아야 하는 경우들이 있음.
function addthings(a: Combinabl, b: Combinabl) {
  //타입 가드
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name :" + emp.name);

  //타입 가드를 해주려고 할 때 typeof emp === 'Employee'와 같은 구문은 사용할 수 없다.
  //자바스크립트 런타임시에 확인할 수 있는 타입은 stirng, boolean 등의 js 기본 타입들이고, 사용자 타입은 확인 불가
  //emp.priviliges와 같은 형태로 if 조건문을 설정해줄 수도 없음. 아래와 같이 in을 쓰면 가능.
  if ("priviliges" in emp) {
    console.log("Priviliges :" + emp.priviliges);
  }
  if ("startDate" in emp) {
    console.log("StartDate :" + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Nana", startDate: new Date() });

//***********************클래스에서 타입가드 사용하기***********************/

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  //   if ("loadCargo" in vehicle) {
  //     vehicle.loadCargo(100);
  //   }

  //클래스에서는 타입 가드를 아래와 같이 써줄 수도 있다.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//***********************구별된 유니언***********************/
//구별된 유니언은 아래와 같이 유니언을 구성하는 모든 객체에 하나의 공통 속성만 있고
//해당 속성이 유니언을 설명하므로, 이 속성을 switch문에 사용해 타입 안전성을 갖추고 객체에 어떤 속성을 사용할 수 있는지 파악 가능.

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animals = Bird | Horse;

function moveAnimals(animal: Animals) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimals({ type: "bird", flyingSpeed: 30 });

/***********************형 변환***********************/
//:타입스크립트가 직접 감지하지 못하는 특정 타입의 값을 타입스크립트에 알려주는 역할

//아래와 같이 작성하면 타입스크립트는 해당 요소가 p 요소임을 알지만
// const paragraph = document.querySelector("p");
//아래와 같이 작성하면 그냥 html 요소라고 밖에 인식하지 못한다.
// const paragraph = document.getElementById("message-output");

// const userInputElement = document.getElementById("user-input");

//아래 코드는 에러가 발생할 수 있음. 일단 userInputElement가 null일 수 있고,
//단순히 html 요소라는 것만으로는 해당 요소에ㅐ value라는 속성이 있는지 알 수 없음.
// userInputElement.value = 'Hi there!';

//형변환 사용해보기 : 아래처럼 작성하면 에러가 뜨지 않음.
//1. 앞쪽에 추가하기
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );
// userInputElement.value = "Hi there";

//2.뒤쪽에 as 추가하기
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi there";

//느낌표는 null을 반환하지 않을 것이라는 뜻, 느낌표 대신 if로 userInputElement가 존재하는지 체크해줄 수도 있음.
//대신 if문을 사용하려면 형 변환을 null 체크 이후로 해야함.
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there";
}
