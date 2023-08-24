// 조건부 타입 기반의 유틸리티 타입

// Exclude<T,U> : T에서 U를 제거하는 타입
type A = Exclude<string | boolean, boolean>;

// Extract<T,U> : T에서 U를 추출
type B = Extract<string | boolean, boolean>;

// ReturnType : 함수의 반환 타입 추출
const funcA = () => {
  return "str";
};

const funcB = () => {
  return 0;
};

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
