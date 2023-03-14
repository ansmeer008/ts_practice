//interface : 객체의 구조, 형태를 설명하는 데 사용.

//첫 글자는 대문자 (컨벤션)
interface Person {
  name: string;
  greet(phrase: string): void;
}

//Person 과 같은 구조를 가져야하는 객체에 대한 타입을 확인하는 타입으로 interface를 사용할 수 있음.
let user1: Person;

user1 = {
  name: "Max",
  greet(phrase: string) {
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
class Women implements Person {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
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

//**읽기전용 인터페이스 속성**
//인터페이스 내 readonly 제어자도 추가할 수 있음 (public, private은 x)
//인터페이스를 타입으로 지정한 class의 경우 인터페이스에서 readonly를 지정한 속성에 대해서
//따로 readonly 를 지정해주지 않아도 인스턴스 객체를 만들었을 때 해당 속성을 새롭게 변경하려고 하면 에러 발생함

//**인터페이스 확장**
//인터페이스에 상속을 구현할 수도 있음.
interface Named {
  readonly name: string;
}
//인터페이스에서는 다수의 인터페이스에서 상속도 가능하지만 이건 클래스에서는 부락능!
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Men implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

//**함수 타입으로서의 인터페이스 **
//인터페이스는 함수 구조를 정의하는 데에도 사용할 수 있다.

//사용자 정의 타입으로 함수를 정의하는 것은 아래와 같지만
//interface AddFn = (a:number, b:number) => {return n1+n2;}

//인터페이스는 아래와 같이 함수 구조를 정의할 수 있다.
interface AddFn {
  (a: number, b: number): number;
}

let addNumber: AddFn;

addNumber = (n1: number, n2: number) => {
  return n1 + n2;
};

//**선택적 매개변수 & 선택적 속성**

//선택적 속성의 경우 속성 뒤에 물음표를 붙이면 된다.
//타입스크립트는 이 속성이 이 인터페이스를 구현하는 클래스 내에 있을 수도 있지만 그렇지 않을 수도 있다고 인식함.
interface Printing {
  readonly name?: string;
  outputName?: string;
}

//outputName이 없어도 에러를 띄우지 않음.
//name 속성은 인터페이스에서 선택적 속성이며, Mike 클래스에서도 선택적 속성이다.
//그래서 생성자에 if문을 추가해 값이 truthy인 경우에 name을 초기화한다.
//혹은 매개변수인 n 바로 뒤에 n?:string과 같이 매개변수를 입력하면 선택적 매개변수로 설정 가능하다.
class Mike implements Printing {
  name?: string;

  constructor(n: string) {
    if (n) {
      this.name = n;
    }
  }
}

//클래스를 구성하는 방법에 더 많은 유연성을 제공함.

//인터페이스는 타입스크립트만의 순수한 기능이라서 자바스크립트로 컴파일 된 자바스크립트 파일에서는 해당 내용을 찾아볼 수 없다.
