// 함수 타입 표현식 && 호출 시그니처

// 함수 타입 표현식
type OperationType = (a: number, b: number) => number;

const add: OperationType = (a, b) => {
  return a + b;
};
const sub: OperationType = (a, b) => {
  return a - b;
};
const multuply: OperationType = (a, b) => {
  return a * b;
};

const divide: OperationType = (a, b) => {
  return a / b;
};

// 호출 시그니처
type OperationType2 = {
  (a: number, b: number): number;
  // 하이브리드 타입
  name: string;
};

const add2: OperationType2 = (a, b) => {
  return a + b;
};
const sub2: OperationType2 = (a, b) => {
  return a - b;
};
const multuply2: OperationType2 = (a, b) => {
  return a * b;
};

const divide2: OperationType2 = (a, b) => {
  return a / b;
};

// 이렇게도 쓸 수 있네 -> 이거 씀...?
add2.name;
