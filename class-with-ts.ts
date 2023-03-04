//********************************class(inheritance)********************************
//클래스를 기반으로 인스턴스화 되는 객체의 구성요소를 정의할 수 있다.
//클래스는 자바스크립트 객체에 대한 청사진이다.

//관례상 클래스임을 명시하기 위해 첫글자는 대문자로 작성한다.
//constructor(생성자)는 예약어이다
//: 객체가 생성되면서 실행되는 클래스에 기반해 만드는 모든 객체에도 연결되는 함수로
//생성자를 이용하면 구축하는 객체에 대한 초기화 작업을 수행할 수 있음.
class Department {
  private readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  //매서드 추가하는 방법
  describe() {
    console.log("Department:" + this.name);
    //this는 일반적으로 생성된 클래스의 구체적인 인스턴스를 참조한다.
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//new 키워드로 클래스를 실행하는 시점에 생성자가 호출된다.
//생성자는 인수인 string을 취한다.
const accounting = new Department("d1", "Accounting");

//**********************this 특이점********************************
// const accountingCopy = { describe: accounting.describe };

//이렇게 호출하는 경우 컴파일 에러는 발생하지 않지만 런타임에서는 Department: undefined가 출력된다.
//accountingCopy는 클래스가 아닌 객체 리터럴로, 즉 더미 객체로 생성된 것임
//describe 속성의 값은 accounting 객체의 describe 매소드를 지시한다.
//그러나 매소드를 실행할 때 this가 이 객체를 참조하지 않고 accountingCopy를 참조하는데
//accountingCopy에는 name 속성이 정의되지 않았으므로 Undefined가 출력된다.
// accountingCopy.describe();

//만약 describe 메서드 생성쪽에 인수로 this를 전달하게 되면 값을 전달하지 않고도 describe를 호출 할 수 있게 된다.
//describe(this:Department) {
//     console.log("Department:" + this.name);
//   }
//그런데 위와 같이 작성하게 되면 this는 Department 클래스에 기반한 인스턴스를 참고해야하는데 accountingCopy는 해당 객체가 아니므로 에러가 발생한다.
//이 경우 accountingCopy에 name 속성을 추가해줄 수 있다.
//const accountingCopy = { name: 'Dummy', describe: accounting.describe };

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();

//지금 상태에선 employees에 직접 접근해서 accounting.employees[2]='Anna'와 같이 수정을 가할 수 있다.
//그러나 클래스를 사용할 때는 수정 방법을 한 가지로 확실히 정하고 다른 방법은 사용하지 않는 것이 좋음.
//클래스 외부에서 employees에 접근하는 것을 허용하지 말아야 한다. : 타입스크립트가 해결 가능.

//employees 앞에 private 키워드를 추가해 해당 필드를 private 속성으로 변환할 수 있다.
//private 키워드는 employess가 이제 클래스, 즉 생성된 객체 내부에서만 접근 가능한 속성이 되었다는 뜻이다.
//private 속성 = 클래스 내부 (ex: 클래스 메소드 내부) 에서만 접근할 수 있다.
//private 키워드를 '제어자(modifier)'라고 한다.
//public이라는 키워드도 존재하는데 public은 기본값이라 따로 지정해줄 필요 없음.

//타입 스크립트는 런타임 도중이 아닌 컴파일 도중에 검사 수행하므로 타입스크립트만 이 기능을 지원함.

//********************************초기화 축약하기********************************
//원래는 주석 처리된 부분처럼 하나하나 다 써서 인자로 받는 것들로 인스턴스에서 초기화를 해주는데
//프로퍼티들을 작성한 것을 없애고, 생성자 함수에서도 해당 초기화 코드를 지우면
//인자로 받은 녀석들과 동일한 이름의 속성이 생성되고, 인수에 대한 값이 생성된 속성에 저장된다.
//이때 Private, public 제어자를 붙여주는 것은 동일한 이름으로 속성을 만들고 싶다고 ts에게 알리는 것.
class Human {
  //private id: string;
  //private name: string[] = [];
  constructor(private id: string, public name: string) {
    //this.id = id;
    //this.name = name;
  }
}

//********************************Read-Only 속성********************************
//초기화 후 변경되어서도 안 되는 특정 필드가 존재하는 경우
//readonly라는 제어자를 추가할 수 있다.
//이는 자바스크립트에는 없고 타입스크립트에만 존재하는 기능이다.

class Goods {
  constructor(
    private readonly id: string,
    public name: string,
    public allGoods: string[]
  ) {}

  addGoods(goods: string) {
    this.allGoods.push(goods);
    // this.id = 'd1';
    //위와 같이 작성하면 readOnly 프로퍼티라 변경될 수 없다는 에러가 뜬다.
  }
}

//********************************inheritance(상속)********************************
//기본 클래스를 설정한 다음 이를 상속하는 특수화된 클래스를 생성할 수 있다.

//Department 클래스의 속성인 id, name, employees를 extends 키워드를 통해 상속해서 이용할 수 있다.
//여러개의 클래스에서 동시에 상속할 수는 없다.
//그리고 상속되지 않은 고유한 속성들을 가질 수도 있다.
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    //다른 클래스로부터 상속받는 클래스에 고유 생성자를 추가할 때마다
    //상속하는 클래스로 super를 추가하고, 이를 함수처럼 실행해야 한다.
    //super는 기본 클래스의 생성자를 호출한다.
    //상위 클래스의 생성자를 호출하면서 필요한 id는 하위 클래스가 인자로 받은 id로 설정해주고
    //IT라는 상위 클래스의 name 속성은 아래와 같이 하드코딩 해줄 수 있다.
    super(id, "IT");
    //this 키워드를 사용하기 전에 super 키워드를 사용해야 한다.
    this.admins = admins;
  }
}

const development = new ITDepartment("d2", ["Max"]);
development.addEmployee("Max");
development.addEmployee("Manu");

console.log(development);

class AccountingDepartment extends Department {
  private lastReport: string;

  //lastReport는 private 속성이지만 개터를 통해 공개적으로 이 값에 접근이 가능해진다.(캡슐화)
  //보통은 단순히 어떤 속성을 가져오는 것보다 더 복잡한 로직을 입력하긴 함.
  //게터 함수를 일종의 속성처럼 사용해 이 로직을 실행할 수 있다.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(val: string) {
    if (!val) {
      throw new Error("Please pass in a valid value");
    }
    //클래스 내부에 있으므로 this를 사용해야 메서드에 접근 가능.
    this.addReport(val);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  //상속시에는 기본 클래스의 메소드나 속성을 재정의할 수도 있다.(Overridng)
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    //employees 속성은 private 속성으로 상속 받는 클래스에서는 접근할 수 없다.
    //제어자를 protected로 바꿔주면 기본 클래스에서 확장하는 클랙스에서도 사용 가능해진다.
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accountDep = new AccountingDepartment("d3", []);

//새터 실행
accountDep.mostRecentReport = "Year End Report";
accountDep.addReport("Something went wrong...");
//게터 실행
console.log(accountDep.mostRecentReport);

accountDep.addEmployee("Max");
accountDep.addEmployee("Manu");

accountDep.printReports();
accountDep.printEmployeeInformation();

//********************************Getter & Setter********************************

//AccountingDepartment 클래스에 lastReport 속성을 입력한다.

//Getter는 값을 가지고 올 때 함수나 메소드를 실행하는 속성으로 개발자가 더 복잡한 로직을 추가할 수 있게 해줌.
//get 키워드를 입력하고 원하는 이름을 지어 게터를 생성할 수 있음.
//게터 함수를 작성할 때는 메소드처럼 작성하지만, 접근할 때는 일반 속성처럼 접근한다.

//Setter는 set 키워드를 사용한다.
//Setter 역시 실행하기 위해서는 메소드로서 실행하는 게 아니라 값처럼 접근해야 함.

//게터와 세터는 로직을 캡슐화하고 속성을 읽거나 설정하려고 할 때 실행되어야 하는 추가적 로직 추가하는 데 유용함.

//********************************정적 메서드 & 속성********************************
//정적 속성과 메소드를 사용하면 클래스의 인스턴스에서 접근할 수 없는 속성 & 메서드를 클래스에 추가할 수 있음.
//새롭게 클래스 이름을 먼저 호출하지 않고, 클래스에 직접 접근 하는 것.
//이는 주로 논리적으로 그룹화하거나 클래스에 매핑하려는 유틸리티 함수나 클래스에 저장하고자 하는 전역 상수에 사용된다고 함.
//자바스크립트에서 Math에 해당하는 것이 이와 비슷한데, Math는 new Math를 호출하지 않고도 Math.PI와 같은 속성을 불러오거나
//Math.pow()와 같이 무언가의 거듭제곱을 계싼하는 함수 메소드를 사용할 수 있다.
//위 예시들은 Math의 인스턴스에서는 접근할 수 없는 메소드와 속성임. 직접 클래스 자체에서 속성과 메소드에 접근해야 한다.
//일종의 그룹화 매커니즘의 네임스페이스와 같은 역할을 Math는 한다.

//Fruit 클래스에 colors를 생성하는 메소드를 작성해본다.
class Fruit {
  static taste = "sweet";
  protected colors: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(this.taste);
  }

  static createColor(color: string) {
    return { color: color };
  }
}

const color1 = Fruit.createColor("Red");
console.log(color1, Fruit.taste);

//정적 메소드나 속성을 클래스에 추가할 때 '정적이 아닌 부분들'에는 접근할 수 없다.
//constructor 블록 내에 console.log(this.taste);를 입력해도 작동하지 않는다.
//this는 클래스로 인해 만들어진 인스턴스를 참조하기 때문에 인스턴스에서 유효하지 않은 정적 속성을 참조할 수 없다.
//클래스 내부에서도 정적 속성이나 매서드에 접근하기 위해서는 this가 아니라 클래스 이름을 사용해 Fruit.taste와 같이 접근해야 한다.

//********************************추상 클래스********************************

//추상 클래스는 일부 상위 클래스를 기반으로 하는 모든 클래스가 일부 공통 메서드 또는 속성을 공유하도록 하려는 경우 이용할 수 있음.
//메소드 앞에 abstract가 있는 메소드가 하나 이상이라면 클래스 앞에도 abstract를 추가해야함

abstract class Animal {
  //이 메소드의 형태와 메소드의 구조가 어떤 것인지를 정의하고 있을 뿐
  //그 외에는 아무것도 정의하지 않는다.
  //Animal을 상속한 클래스는 이 eat이라는 매서드를 구현해야 함.
  abstract eat(food: string): void;
}

class Dog extends Animal {
  eat() {
    console.log("yummy!");
  }
}

const babyDog = new Dog();
babyDog.eat();

//********************************싱글톤 & private 생성자********************************

//객체 지향 프로그래밍에는 싱글턴 패턴이라는 게 있는데 특정 클래스의 인스턴스를 정확히 하나만 갖도록 하는 것이다.
//해당 패턴은 정적 메서드나 속성을 사용할 수 없거나 사용하지 않고자 할 때나
//클래스를 기반으로 항상 정확히 하나의 객체만 생성하고자 할 때 유용할 수 있다.

//아래 HumanResourceDep 클래스를 기반으로 하나의 객체만 생성할 수 있도록 하고 싶다면?
//생성자 앞에 private 키워드를 사용한다.
class HumanResourcesDep extends Department {
  //instance 속성에 HumanResourcesDep 인스턴스가 저장되도록 한다.
  private static instance: HumanResourcesDep;

  private constructor(id: string, private person: string[]) {
    super(id, "HumanResources");
  }

  //getInstace 매서드는 이 클래스의 인스턴스가 이미 있는지 확인하고 없다면 새 인스턴스를 반환한다.
  static getInstance() {
    if (HumanResourcesDep.instance) {
      return this.instance;
    }
    //생성된 인스턴스가 없을 때 이 클래스 내부에서는 인스턴스를 생성할 수 있다.
    this.instance = new HumanResourcesDep("D3", []);
    return this.instance;
  }
}

//아래와 같이 호출하면 생성자가 private으로 지정되었다는 에러가 발생한다.
// const humanResouce = new HumanResourcesDep('d3',[]);

//위처럼이 아닌 아래처럼 입력하면 HumanResourcesDep의 인스턴스를 반환받을 수 있다.
const humanResouce1 = HumanResourcesDep.getInstance();
const humanResouce2 = HumanResourcesDep.getInstance();
console.log(humanResouce1, humanResouce2); //두항목은 정확히 동일하다.
