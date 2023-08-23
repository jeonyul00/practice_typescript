// 인터페이스의 확장
interface Animal {
  name: string;
  age: number;
}

// 자바랑 헷갈리네.. 상속 키워드 아닌가..
interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  // name: "만수"; // 재정의 : 원본 프로퍼티 타입의 서브타입이어야만 함
  isScratch: boolean;
}
interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = { name: "gae", age: 1, isBark: true };
const cat: Cat = { name: "만수", age: 2, isScratch: true };

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "개냥",
  age: 3,
  isBark: true,
  isScratch: false,
};
