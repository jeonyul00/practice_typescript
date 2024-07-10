// 객체 타입 호환
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  // [key: string]: string;
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "노란색",
};

let dog: Dog = {
  name: "개",
  color: "흰색",
  breed: "믹스",
};

animal = dog; // 좁아지는건 되지
// dog = animal;

// 프로퍼티 기준으로 부모자식 관계를 갖는다.

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
  name: "리액트책",
  price: 200,
  skill: "리액트",
};

book = programmingBook;
// programmingBook = book; x

/*
book = programmingBook; 이건 되는데 

    let book2: Book = {
        name: "리액트책",
        price: 200,
        skill: "리액트",
    };
    
이건 왜 안돼? -> 초과 프로퍼티 검사란게 있대
문법을 뭐이렇게 모순적으로 만드냐
*/
let book2: Book = {
  name: "리액트책",
  price: 200,
  // skill: "리액트",// x 초과 프로퍼티 검사
};

let book3: Book = programmingBook; // 하 시발? 이건 왜 돼? -> 객체 리터럴을 이용할 때만 초과프로퍼티 검사가 실행됨
