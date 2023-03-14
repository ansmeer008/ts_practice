"use strict";
//intersection type : 다른 타입을 결합할 수 있다.
const e1 = {
    name: "Max",
    priviliges: ["create-server"],
    startDate: new Date(),
};
//타입 가드
// Combinabl과 같은 유니언 타입은 유연성을 가지지만 런타임 시 정확히 어떤 타입을 가질지 알아야 하는 경우들이 있음.
function addthings(a, b) {
    //타입 가드
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
//클래스에서 타입가드 사용하기
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading Cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimals(animal) {
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
