type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 타입 단언
person.name = "jeonyul";
person.age = 31;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "maru",
  color: "white",
  breed: "진도",
} as Dog;

let dog2 = {
  name: "maru",
} as Dog;

// as 쓰려면 슈퍼타입이거나, 서브타입이어야함
// 이럴 수는 있음 1과 unknown -> unknown과 string
let ex = 1 as unknown as string;
ex;
