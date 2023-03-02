//타입 별칭(앨리어스)을 이용해 타입을 직접 생성할 수 있음
//타입 앨리어스를 사용하면 불필요한 반복을 피하고, 타입을 관리하기 편리함

//유니온 타입을 지정할 수도 있고 다른 타입들에도 별칭을 붙일 수 있다
type Combinable = number | string;
//리터럴 타입(리터럴 타입은 어떠한 값이 정해진 타입임)
type ConversionDescriptor = "as-number" | "as-text";
//객체 타입
type User = { name: string; age: number };

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineedAges = combine(30, 26, "as-number");
console.log(combineedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
