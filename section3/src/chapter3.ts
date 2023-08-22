// 객체 타입 간의 호환성
type AnimalType = {
  name: string;
  color: string;
};

type DogType = {
  name: string;
  color: string;
  bread: string;
};

let animal: AnimalType = {
  name: "기린",
  color: "yellow",
};

let dog: DogType = {
  name: "만수",
  color: "white",
  bread: "진도",
};

// o
animal = dog;
// x
// dog = animal;

// 프로퍼티를 기준으로 큰 타입인지 작은 타입인지 정함

// --------------------

// super
type BookType = {
  name: string;
  price: number;
};

// sub
type ProgrammingBookType = {
  name: string;
  price: number;
  skill: string;
};

let book: BookType;
let programmingBook: ProgrammingBookType = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react",
};

book = programmingBook;

// 초과 프로퍼티 검사 : book = programmingBook; 이건 되는데 밑의 코드가 안되는 이유 => 변수를 초기화 할 때 객체 리터럴을 사용하면 초과 프로퍼티 검사를 한다.
let book2: BookType = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // x
  // skill: "react",
};
