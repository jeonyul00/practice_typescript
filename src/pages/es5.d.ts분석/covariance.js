"use strict";
/*
    공변성과 반공변성
    타입 간의 관계를 설명하는 데 사용되는 중요한 개념
*/
// B는 A의 하위 타입이므로 A 타입 변수에 B 타입 변수를 할당할 수 있다
const a = { name: "John" };
const b = { name: "Jane", age: 25 };
a = b; // OK
b = a; // Error: A 타입은 B 타입에 할당될 수 없습니다.
const a = (arg) => console.log(arg);
const b = (arg) => console.log(arg);
b = a; // OK
a = b; // Error: B 타입은 A 타입에 할당될 수 없습니다.
//
/* 리턴 값은 더 넓은 값이면 대입 가능, 근데 왜 매개변수는 반대지? : 매개변수는 좁은 값이면 대입 가능 */
const exFunc = (x) => x.toString();
let value2 = exFunc;
//
