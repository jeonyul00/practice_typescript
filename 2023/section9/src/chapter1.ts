// 분산적 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let c: StringNumberSwitch<number | string>; // let c: string | number
// 타입이 한 번에 한 개씩 들어가서 검사하여 결과를 유니온으로 묶어줌

let d: StringNumberSwitch<boolean | null | number | string | undefined>; // let d: string | number

// --------------------

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>; // type A = number | boolean
// 유니온 타입에 never가 있으면 never는 사라짐 : 왜냐면 never는 공집합이기 때문이지

// --------------------

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>; // type B = string
