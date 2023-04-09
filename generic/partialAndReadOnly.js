"use strict";
//내장 유틸리티 타입
//only exist in ts
//아래 Partial부분은 이후에 이 courseGoal이 CourseGoal 타입이 됨을 알려주는 역할
//즉, Partial 타입은 특정 타입을 해당하는 타입의 모든 속성이 선택적인 객체 타입으로 만들어 준다
//그래서 Parial 타입을 이용해서 아래와 같이 처음에는 빈 객체이다가 단계적으로 속성들이 추가되도록 만들어줄 숭 ㅣㅆ음.
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    //문제는 결과로 만들어진 courseGoal이 CourseGoal 타입이 아니라 Partial 타입이라 에러가 생기는데
    //형 변환을 이용해 해결해줄 수 있음
    return courseGoal;
}
/*******************ReadOnly type*******************/
//아래와 같이 작성해주면 push, pop 같은 행동들을 할 수 없음
//배열 뿐 아니라 객체에도 적용 가능함
const names = ["Max", "Anna"];
// names.push('Manu');
