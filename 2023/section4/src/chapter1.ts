// 함수 타입 표현식과 호출 시그니처 : 함수의 타입을 별도로 정의하는 방법

// 가독성 별로 => 밑처럼 함수 타입 정의하여 사용 할 수 있음
const addEx = (a: number, b: number): number => a + b;

type calc = (a: number, b: number) => number;

const add: calc = (a, b) => a + b;
const add2: (a: number, b: number) => number = (a, b) => a + b;
const sub: calc = (a, b) => a - b;
const sub2: (a: number, b: number) => number = (a, b) => a - b;
const multiply: calc = (a, b) => a * b;
const multiply2: (a: number, b: number) => number = (a, b) => a * b;
const divide: calc = (a, b) => a / b;
const divide2: (a: number, b: number) => number = (a, b) => a / b;

// 호출 시그니처(콜 시그니처)
type calc2 = {
  (a: number, b: number): number;
};

const add3: calc2 = (a, b) => a + b;
const sub3: calc2 = (a, b) => a - b;
const multiply3: calc2 = (a, b) => a * b;
const divide3: calc2 = (a, b) => a / b;
