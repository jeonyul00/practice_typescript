// 조건부 기반 유틸리티

// Exclude: 제외하다
type A = Exclude<string | null | number, null>; // null을 제외

// Extract<T, U>: 추출하다
type B = Extract<string | null | number, null>; // null만 추출

// ReturnType<T> : 함수의 반환값 타입을 추출하는 타입
function test() {
  return "";
}
function test2() {
  return 1;
}

type C = ReturnType<typeof test>;
type D = ReturnType<typeof test2>;
