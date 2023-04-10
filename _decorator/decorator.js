"use strict";
//decorator도 일종의 함수인데, 어떤 것에 적용할 수 있는 함수이다
//코드를 장식해주는 역할을 하는데
//@ 기호는 타입스크립트에게 이것에 데코레이터임을 알려준다
//ex: 특정한 방법으로 클래스에 적용하는 함수
//클래스를 수정하지 않고 클래스의 멤버들의 정의를 수정 및 기능 확장 가능
//전체 기능에 신경쓰지 않고 특정 인스턴스에 초점을 맞출 수 있음.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//Logger는 데코레이터 함수
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }
//데코레이터 팩토리 : 데코레이터 함수를 감싸는 래퍼 함수
//어떤 대상에 데코레이터를 할당할 때 설정할 수 있도록 해줌
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log("Logging...");
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    return function (constructor) {
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
//여러 개의 데코레이터 함수를 적용하면 아래에서 위 순서로 적용된다
// @Logger("LOGGING-PERSON")
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    //게터나 세터에도 적용 가능
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price-should be positive!");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    //메서드나 파라미터에도 적용 가능
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
//데코레이터는 클래스가 정의될 때 뒤에서 부가적인 셋업을 해주는 녀석이므로
//메소드를 불러내거나 프로퍼티를 쓸 때 작동하는 데코레이터가 아님
const p1 = new Product("book", 19);
const p2 = new Product("book2", 29);
