// 인터페이스 상속

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}
const dog: Dog = {
  name: "",
  age: 0,
  isBark: true,
};

interface Cat extends Animal {
  // name: number; // 다시 정의하려는 타입이 원본 타입의 자식 타입이어야만 함
  name: "재정의";
  isScratch: boolean;
}
const cat: Cat = {
  // name: "", -> 현재 타입이 "재정의" 타입임
  name: "재정의",
  age: 0,
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 상속 가능
const dogCat: Dog & Chicken = {
  name: "",
  age: 0,
  isBark: true,
  isFly: true,
};

interface DogChicken extends Dog, Chicken {}

const dogCat2: DogChicken = {
  name: "재정의",
  age: 0,
  isBark: true,
  isFly: true,
};

// 인터페이스 합치기
interface Persion {
  name: string;
}

interface Persion {
  age: number;
}

const person: Persion = {
  name: "",
  age: 0,
};
