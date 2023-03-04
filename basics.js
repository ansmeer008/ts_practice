"use strict";
function addSome(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printBoolean = true;
const resultString = "Result is:";
add(number1, number2);
