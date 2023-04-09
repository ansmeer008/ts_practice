//제네릭 함수
// function merge(A: object, B: object) {
//   return Object.assign(A, B);
// }

// const mergeObj = merge({name:'Max'},{age:30});
//아래와 같이 접근할 수 없다.
// mergeObj.name

//제네릭 함수로 바꾸면 해결할 수 있다.
//아래와 같이 작성하면 타입스크립트는 merge 함수가 T와 U의 인터섹션을 반환한다고 추론함.
//extends와 같은 제약 조건을 걸어주면 함수의 기능을 개선할 수 있음.
//제약 조건을 걸어주지 않았을 때는 ObjectB에 숫자가 할당되었더라도 내부에서만 실패하고
//아무런 에러를 띄우지 않음. 제약 조건을 걸어주면 에러 발생.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

//단순히 T를 타입으로 지정해주었을 때는 아래 element.length라는 부분에서 에러가 떴음.
//Lengthy라는 length 속성을 가진 인터페이스를 생성해주고 이를 T에 extends해주면
//아래 함수에 어떤 인자가 들어오든지 length 속성을 가진다는 것을 타입스크립트에게 알려줄 수 있음.
interface Lengthy {
  length: number;
}

//타입스크립트는 아래 함수가 문자열이나 T타입 요소를 지니는 배열이 반환된다고 추론한다.
//튜플을 반환한다고 정확히 알려주기 위해 반환 타입을 추가해준다.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));

//이전에 학습했던 함수 타입 지정과 크게 다르지는 않지만,
//제네릭 타입을 이용해서 좀 더 유연한 타입 지정을 할 수 있음
//ex 문자열이나 배열로 element를 제한하고 싶지는 않지만 length 속성은 필수로 가질 수 있도록

/******************제약 조건(keyof)*********************/
//아래와 같이 작성하면 인자로 들어온 객체에 두번째 인자로 들어온 키가 존재할 지 알 수 없다고
//타입스크립트에서 에러를 발생시킴
// function extractAndConvert(obj: object,key:string){
//   return 'Value:' + obj[key];
// }

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

//위와 같이 작성한 뒤 아래와 같이 함수를 호출하면 아래 함수에서 에러가 발생한다 : 인자로 전달한 키 값이 객체에 없음을 알려줌
//extractAndConvert({},"name");
