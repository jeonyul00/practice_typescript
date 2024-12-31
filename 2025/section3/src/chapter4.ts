// 대수 타입 -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
let a: number | string;
a = 1;
a = "1";

const arr: (number | string)[] = [1, "1"];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Uniuon = Dog | Person;
let union1: Uniuon = {
  name: "",
  color: "",
};

let union2: Uniuon = {
  name: "",
  language: "",
};

let union3: Uniuon = {
  name: "",
  color: "",
  language: "",
};

let variable: number & string;
// variable; -> never

type Inter = Dog & Person;

let inter: Inter = {
  name: "",
  color: "",
  language: "",
};
