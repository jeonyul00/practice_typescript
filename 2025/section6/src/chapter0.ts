// infer : 조건부 타입 내에서 특정 타입 추론

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // never

// ---
// infer: 조건식을 참으로 만들도록 추론하도록 동작 -> T가 참이 되기위해 R의 타입이 변함
// R을 추론해라~
type ReturnType2<T> = T extends () => infer R ? R : any;
type AA = ReturnType2<FuncA>; // string
type BB = ReturnType2<FuncB>; // number

// ---

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
