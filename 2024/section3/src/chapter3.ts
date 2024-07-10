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
