//decorator도 일종의 함수인데, 어떤 것에 적용할 수 있는 함수이다
//코드를 장식해주는 역할을 하는데
//@ 기호는 타입스크립트에게 이것에 데코레이터임을 알려준다
//ex: 특정한 방법으로 클래스에 적용하는 함수
//클래스를 수정하지 않고 클래스의 멤버들의 정의를 수정 및 기능 확장 가능
//전체 기능에 신경쓰지 않고 특정 인스턴스에 초점을 맞출 수 있음.

//Logger는 데코레이터 함수
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

//데코레이터 팩토리 : 데코레이터 함수를 감싸는 래퍼 함수
//어떤 대상에 데코레이터를 할당할 때 설정할 수 있도록 해줌
function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

//여러 개의 데코레이터 함수를 적용하면 아래에서 위 순서로 적용된다
// @Logger("LOGGING-PERSON")
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  //데코레이터를 클래스의 프로퍼티에 적용할 수도 있다.
  @Log
  title: string;
  private _price: number;

  //게터나 세터에도 적용 가능
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price-should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  //메서드나 파라미터에도 적용 가능
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//데코레이터는 클래스가 정의될 때 뒤에서 부가적인 셋업을 해주는 녀석이므로
//메소드를 불러내거나 프로퍼티를 쓸 때 작동하는 데코레이터가 아님

const p1 = new Product("book", 19);
const p2 = new Product("book2", 29);
