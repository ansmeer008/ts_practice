//intersection type : 다른 타입을 결합할 수 있다.

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
