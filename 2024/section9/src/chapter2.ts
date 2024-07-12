// infer
// 조건부 타입에서 특정 타입을 추론
type Func1 = () => string;
type Func2 = () => number;

// infer R : 조건을 참으로 만들 수 있는 타입을 추론하여 동작
type ReturnType<T> = () => T extends () => infer R ? R : never;
type A = ReturnType<Func1>;
type B = ReturnType<Func2>;
