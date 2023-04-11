/* 
    never는 다른 모든 타입의 하위 타입이며, never 타입의 값은 어떠한 값도 가지지 않는 상태, 즉 절대로 반환되지 않거나 예외가 발생하는 등의 불완전한 작업의 결과로 사용
*/

// 절대 발생하지 않는 값
type Never = string & number;

// 위 함수는 문자열 메시지를 인자로 받고, 해당 메시지를 포함하는 Error 객체를 던진다. 이 함수가 호출되면, 프로그램은 예외를 던지고 해당 함수 호출 이후의 코드는 실행되지 않게 됨 이는 never 타입이 함수의 반환 타입으로 지정된 이유이다.
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// ! : 100% 존재함을 확신할 때 쓴다 : 지양할 것
const head1 = document.querySelector("#head"); // Element | null
const head2 = document.querySelector("#head")!; // Element
