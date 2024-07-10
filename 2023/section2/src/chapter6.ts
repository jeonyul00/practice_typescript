// any : 모든 타입 : 이러면 ts를 쓰는 이유가 없다.
let anyValue: any = 10;
anyValue = "hello";

let num: number = 1;
num = anyValue;

let str: string = "hello";
str = anyValue;
// 오류가 생겨도 못잡음

// --------------------

// unknown : unknown이라는 타입 자체가 있다고 생각하면 됨
// any처럼 모든 타입 : 다른 변수에 unknown 타입의 값을 재할당 할 수 없음!
// 연산x, 내장 객체 없음 사용x
let unknownValue: unknown;
unknownValue = "";
unknownValue = 1;
unknownValue = () => {};

// x
let num2: number = 1;
// num2:number = unknownValue;
