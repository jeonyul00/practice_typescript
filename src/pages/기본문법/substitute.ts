// 타입을 집합으로 생각하자
type Son = string | number;
type Str = string;
type SAN = string & number; // 이런 값은 없지만 아무튼 이 값이 가장 좁은 타입

// 좁은 타입에서 넓은 타입으로 대입 가능 === 반대는 불가능
// 그럼 객체에서 넓고 좁은 것은? : 속성이 적을수록 넓은 타입
type Name = { name: string };
type Age = { age: number };
type NAA = Name & Age;
type NOA = Name | Age;

// 넓은 타입과 좁은 타입의 대입 관계
const Or: NOA = { name: "jeonyul" };
const And: NAA = { name: "jeonyul", age: 30 };

const A: NAA = Or; // x 안됨 넚은 타입을 좁은 타입에 넣는건 안됨
const B: NOA = And; // o 됨 좁은 타입을 넓은 타입에 넣는건 됨

// 그런데 이건 안됨 : 객체에 리터럴 검사라는 것이 있음 , 리터럴을 직접 넣을 경우 타입이 넓냐 좁냐 검사 뿐 아니라 잉여속성 검사라는 것도 함
const G: NOA = { name: "jeonyul", age: 30, married: false };
