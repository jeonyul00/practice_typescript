// 대수 타입
// 여러개의 타입을 합쳐 새롭게 만들어낸 타입

// union
// 주의 할 점 : 문자열 또는 숫자 보다는 string|number라는 새로운 타입이다.
let a: string | number;
a = 1;
a = "1";

let arr: (string | number)[] = ["1", 1];

type DogType = {
  name: string;
  color: string;
};

type PersonType = {
  name: string;
  language: string;
};

type Union1 = DogType | PersonType;

let union1: Union1 = {
  name: "만수",
  color: "white",
};

let union2: Union1 = {
  name: "전율",
  language: "ko",
};

// o : 이게 왜 되냐 : 되지 : union3는 DogType | PersionType 이니까
let union3: Union1 = {
  name: "만수",
  color: "white",
  language: "ko",
};

// x
// let union4: Union1 = {
//   name: "만수",
// };

// --------------------

// intersection
let value: number & string; // naver

// 객체 intersection
type IntersectionType = DogType & PersonType;
let intersection: IntersectionType = {
  name: "만수",
  color: "white",
  language: "ko",
};
