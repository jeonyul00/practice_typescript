/*
대수 타입
여러개의 타입을 합성해서 새로 만드는 타입
합집합과 교집합 타입이 존재

합집합: Union
*/

let unionValue: string | number | boolean;
unionValue = 1;
unionValue = "1";
unionValue = true;

let arr: (string | number | boolean)[] = [1, "1"];

// 객체 타입의 유니온

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  from: string;
};

// 이것도 되네
type UnionType = Dog | Person;

let union1: UnionType = {
  name: "",
  color: "",
};

let union2: UnionType = {
  name: "",
  from: "",
};

let union3: UnionType = {
  name: "",
  from: "",
  color: "",
};

// 이건 안됨 -> Dog도 아니고 Person도 아니기 때문이지
// let union4: UnionType = {
//   name: "",
// };

/* 
    교집합: Intersection
*/
let value: number & string; // 이런 타입이 있음? -> nerver ?
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  from: "",
};
