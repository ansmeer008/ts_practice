"use strict";
//함수에서 매개변수의 타입 외에도 중요한 것이 반환되는 값의 타입인데
//반환 타입은 타입스크립트가 추론할 수 있다
//매개변수 괄호 뒤쪽에 : number과 같이 반환 값의 타입을 설정할 수도 있는데
//추론되는 타입과 동일한 타입이어야 한다.
//타입을 명시적으로 설정할 이유가 굳이 없다면 타입을 설정하는 대신 타입스크립트가 추론하게 하는 게 좋음
function add(n1, n2) {
    return n1 + n2;
}
//반환 타입에는 void 타입이 존재한다.
//아래 printResult가 void라는 특수한 반환 타입을 지닌다.
//아무것도 반환하지 않음
function printResult(num) {
    console.log("Result:" + num);
}
//아래 콘솔은 'undefined'를 출력한다
//타입스크립트에서는 아무것도 반환하지 않아 void 타입이지만
//자바스크립트에서는 이런 경우 undefined라는 값을 반환해버림
//타입스크립트에서도 undefined는 하나의 타입인데
//함수가 undefined를 비롯해 아무것도 반환하지 않는다면 void타입을 사용해야 한다
//타입스크립트에게 함수가 void타입이라고 알리는 것은 반환문이 없음을 알리는 것이고
//undefine를 반환 타입으로 설정하면 값을 반환하지 않는 반환문이 있다고 여긴다
console.log(printResult(3));
//값을 반환하지 않는 함수를 사용하는 경우에는 void를 표준으로 사용하며 (타입 추론도 가능하므로 명시적으로 적지 않아도 됨)
//타입을 함수로 설정할 수 있다.
// let combineValues: Function;
//타입을 함수로 지정할 뿐 아니라, 해당 함수 타입이 어떤 매개변수를 받고, 어떤 값을 반환하는지도 지정해줄 수 있다.
let combineValues;
combineValues = add;
//아래 예시는 위 타입에 해당하지 않으므로 컴파일 시 에러를 발생시킨다
// combineValues = printResult;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
//세변째 매개변수인 콜백함수는 반환 타입이 void이다.
//그러므로 콜백에 return문이 있더라도 해당 리턴값을 무시한다.
//반환할 수 있는 값을 '사용하지 않을 수 있'는 것임.
//콜백 함수는 자신이 전달되는 인수가 반환값을 기대하지 않는 경우에도 값을 반환할 수 있다. (사용되진 않겠지만)
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
//# sourceMappingURL=functions.js.map