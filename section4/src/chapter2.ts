// 함수 타입 호환성
// 반환값의 타입이 호환되는가? && 매개변수의 타입이 호환되는가 ? 호환 가능: 불가능

// 반환값의 호환 : 업캐스팅 가능, 다운캐스팅 불가능
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// x
// b = a;

// 매개변수의 호환 (배개변수의 개수가 같을 때)
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 매개변수를 기준으로 판단할 때는 업캐스팅은 허용 불가
d = c; // 다운캐스팅일 경우 가능

// 왜?
// 매개 변수가 객체 타입을 사용하는 경우를 보자
type Animal = { name: string };
type Dog = { name: string; color: string };

let animalFunc = (value: Animal) => {
  console.log(value.name);
};

let dogFunc = (value: Dog) => {
  console.log(value.name);
  console.log(value.color);
};

// x : 그러니까 이게 왜 안되냐고 분명 업캐스팅인데 : 밑의 예시를 보자
// animalFunc = dogFunc;

// 이 할당을 풀어서 보면 밑의 코드이다.
// Animal type에는 프로퍼티 color가 없다.=> 때문에 업캐스팅의 호환을 막음
let animalFunc2 = (value: Animal) => {
  console.log(value.name);
  // x
  // console.log(value.color);
};

// 매개변수의 호환 (배개변수의 개수가 다를 때)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// x
// func2 = func1;
