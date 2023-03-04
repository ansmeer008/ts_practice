"use strict";
const myName = "Max";
let age = 30;
age = 29;
//arrow function
const addNum = (a, b = 1) => a + b;
const printOutput = (output) => console.log(output);
//default value 적용
console.log(addNum(5));
const myHobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
//spread operator
activeHobbies.push(...myHobbies);
const friend = {
    firstName: "nana",
    friendAge: 30,
};
const copiedFriend = Object.assign({}, friend);
//rest parameters
const plus = (...numbers) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const plusNumbers = plus(5, 10, 2, 3.7);
console.log(plusNumbers);
//rest parameters에 Tuple 타입 적용
//어떤 수가 들어올 지 모르지만 그 개수를 알 때 사용 가능
const addThis = (...numbers) => {
    return numbers.reduce((sum, val) => {
        return sum + val;
    }, 0);
};
const values = addThis(5, 10, 3);
console.log(values);
//destructuring
//배열의 경우에는 순서를 바꿔서 구조분해할당 할 수는 없다
const [hobby1, hobby2, ...remaining] = myHobbies;
console.log(hobby1, hobby2, remaining);
//객체는 키 값을 기준으로 구조분해할당 하므로 변수 이름을 임의로 지정할 수 없음
const { firstName, friendAge } = friend;
console.log(firstName, friendAge);
//키 값이 아닌 값으로 변수 지정하고 싶다면
//아래와 같이 콜론을 써서 사용
const { firstName: herName, friendAge: herAge } = friend;
