// 함수 타입 호환성
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?
// 둘 다 된다면 함수 타입 호환 가능

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; x