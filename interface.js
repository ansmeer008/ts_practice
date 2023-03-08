"use strict";
//interface : 객체의 구조, 형태를 설명하는 데 사용.
//Person 과 같은 구조를 가져야하는 객체에 대한 타입을 확인하는 타입으로 interface를 사용할 수 있음.
let user1;
user1 = {
    name: "Max",
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there - I am");
//인터페이스가 필요한 이유?
//인터페이스와 사용자 정의 타입은 완전히 같지 않음 (간혹 바꿔서 사용할 수 있으나)
//1. 인터페이스는 객체의 구조를 설명하기 위해서만 사용한다
//그러므로 무언가를 인터페이스로서 정의하는 경우, 분명 그것은 '객체'일 것이다.
//이런 면에서 사용자 정의 타입보다 인터페이스를 더 자주 볼 수 있음.
//2. 작업 중 인터페이스를 자주 사용하는 이유는 클래스가 인터페이스를 이행하고 준수해야하는 약속처럼 사용할 수 있기 때문
//여러 개의 인터페이스를 구현할 수 있다는 것이 상속과의 차이점임
//상속은 한 클래스로부터만 상속할 수 있지만 인터페이스는 쉼표로 구분해 여러 개를 구현할 수 있음
//이렇게 구현된 클래스에는 필드를 더 많이 입력하거나 매소드를 더 많이 입력하거나 할 수 있으며,
//클래스를 확장하여 작업을 수행할 수도 있음.
//그때마다 Person 인터페이스의 name 속성과 메소드를 정확히 구현해야 함.
class Women {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
//이렇게 인터페이스는 주로 구체적인 구현이 아닌, 서로 다른 클래스 간 기능을 공유하기 위해 사용됨
//인터페이스 내에 구현이나 값을 입력하는 게 아닌 구조와 클래스가 가져야 할 기능을 입력해야 함
//이는 추상 클래스로 작업하는 것과 비슷한데 인터페이스는 구현 세부 사항이 전혀 없는 반면,
//추상 클래스는 덮어써야 했던 부분과 구체적인 구현 부분들을 혼합할 수 있음.
let user2;
user2 = new Women("Nina");
user2.greet("Hi I am ");
console.log(user2);
class Men {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let addNumber;
addNumber = (n1, n2) => {
    return n1 + n2;
};
//outputName이 없어도 에러를 띄우지 않음.
//name 속성은 인터페이스에서 선택적 속성이며, Mike 클래스에서도 선택적 속성이다.
//그래서 생성자에 if문을 추가해 값이 truthy인 경우에 name을 초기화한다.
//혹은 매개변수인 n 바로 뒤에 n?:string과 같이 매개변수를 입력하면 선택적 매개변수로 설정 가능하다.
class Mike {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
}
//클래스를 구성하는 방법에 더 많은 유연성을 제공함.
//인터페이스는 타입스크립트만의 순수한 기능이라서 자바스크립트로 컴파일 된 자바스크립트 파일에서는 해당 내용을 찾아볼 수 없다.
