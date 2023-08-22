// 타입 단언 : as
type PersionType = {
  name: string;
  age: number;
};

// x
// let person: PersionType = {};

// 앞의 값({})을 뒤의 (PersionType) 타입으로 간주하라.
let person: PersionType = {} as PersionType;
person.name = "jeonyul";
person.age = 30;

type DogType = {
  name: string;
  color: string;
};

// let dog: DogType = {
//   name: "만수",
//   color: "white",
//   // 초과 프로퍼티 검사
//   // breed: "진도",
// };

let dog: DogType = {
  name: "만수",
  color: "white",
  breed: "진도",
} as DogType;

/* 
  규칙
  값 as 단언 
  a as b 일 때 a가 b의 부모 타입이거나 a가 b의 서브 타입이어야함
*/
let a = 10 as never;
let b = 10 as unknown;

// x
// let c = 10 as string;
let c = 10 as unknown as string; // number를 unknown로 단언 후 unknown을 string으로 단언 : 별로 좋은 방법 같지는 않다.

// --------------------

// const 단언 : 모든 프로퍼티가 readOnly & 리터럴 타입으로 추론
let num4 = 10 as const;

let cat = {
  name: "만수",
  color: "white",
} as const;

// x
// cat.color = "black";

// non null 단언
type PostType = {
  title: string;
  author?: string;
};

let post: PostType = {
  title: "게시글1",
  author: "jeonyul",
};

// ! : nonNull : 뒤져도 있는 값이다. 선언 : 오류가 터질 수 있겠다.
const len: number = post.author!.length;

// 중요 : 단언은 실제로 그 값을 바꾸는게 아니다.
