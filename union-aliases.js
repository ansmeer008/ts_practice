"use strict";
//타입 별칭(앨리어스)을 이용해 타입을 직접 생성할 수 있음
//타입 앨리어스를 사용하면 불필요한 반복을 피하고, 타입을 관리하기 편리함
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
const combineedAges = combine(30, 26, "as-number");
console.log(combineedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
//# sourceMappingURL=union-aliases.js.map