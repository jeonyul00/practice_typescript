// 인터페이스 -> 상속 가능
interface A {
  readonly a: string;
  b: string;
  c?: string;
  func(): void;
  func(a: number): void;
}

const aa: A = {
  a: "",
  b: "",
  func: () => {},
};

const bb: A = {
  a: "",
  b: "",
  c: "",
  func: function () {},
};

aa.a = "이건 안됨 읽기 전용이기 때문이니까";

// extends
interface Animal {
  name: string;
}
interface Dog extends Animal {
  // name: "test";
  color: string;
  bark: boolean;
}
interface Cat extends Animal {
  color: string;
  scratch: boolean;
}

const cat: Cat = {
  name: "",
  color: "",
  scratch: true,
};

const dog: Dog = {
  color: "",
  bark: true,
};
dog.name; // "test"

interface DogCat extends Dog, Cat {
  test: string;
}

const dogCat: DogCat = {
  name: "",
  bark: true,
  color: "",
  scratch: true,
  test: "",
};

// 추가
interface DogCat {
  elementAdd: string;
}

const dogCat2: DogCat = {
  name: "",
  bark: true,
  color: "",
  scratch: true,
  test: "",
  elementAdd: "",
};
