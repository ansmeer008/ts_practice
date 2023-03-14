"use strict";
//unknown 타입
let userInput;
let userName;
userInput = 5;
userInput = "Max";
//아래 예시는 userInput이 unknown일 때는 에러를 발생시키고
//any일 때는 에러를 발생시키지 않는다.
//unknown이 any보다 제한적이다.
// userName = userInput;
//추가적인 타입 검사를 해주면 에러를 발생시키지 않는다.
if (typeof userInput === "string") {
    userName = userInput;
}
//unknown타입은 어떤 타입이 들어올 지 모르는 경우에 any보다 더 쓸만한 타입이라고 할 수 있는데
//위와 같이 타입 검사를 수행할 수 있기 때문
//any 같은 경우는 아래에서 두번째 예시에서 아무런 에러를 발생시키지도 않고 타입 에러를 뱉지도 않는다
//그런 면에서 any보다 나은 면이 있다고 할 수 있음
//그러나 유니언 타입이나 특정 타입을 지정할 수 있는 경우에는 그 타입을 지정해주는 게 가장 좋음
//never타입
//never 타입임을 명시하면 코드를 읽는 개발자에게 '이 함수는 아무것도 반환하지 않고 기본적으로 스크립트나 스크립트의 일부를 충돌시키거나 망가뜨리기 위한 것'임을 알게 할 수 있다.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
