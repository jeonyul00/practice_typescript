// 객체 타입의 호환성
// 자! 업캐스팅은 된다, 다운 캐스팅은 안된다
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// dog = animal; x
animal = dog;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "one bite react",
  price: 30000,
  skill: "react",
};

book = programmingBook;
// programmingBook = book; x
