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
