// infer : 조건부 타입 내에서 타입 추론

type Func = () => string;
type FuncB = () => "str";
type FuncC = () => number;

// infer R : 앞의 조건식을 참으로 만드는 타입을 추론하여 R에 할당
type ReturnTypeEx<T> = T extends () => infer R ? R : never;

type A = ReturnTypeEx<Func>; // string
type B = ReturnTypeEx<FuncB>; // "str"
type C = ReturnTypeEx<FuncC>; // numeber

type D = ReturnTypeEx<number>; // never : 왜냐하면 infer가 추론이 불가능 : 무슨 값을 넣어도 참이 될 수 없기 때문에
