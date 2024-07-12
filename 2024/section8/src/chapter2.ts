// keyof: 객체 타입에 적용

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person; // <- 아 이딴거도 됨
// typeof
// typeof person; // object

// keyof: Person의 키 타입: Person의 키를 유니온 타입으로 추출: keyof연산자는 무조건 타입에만 사용가능
// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "test",
//   age: 1,
// };

const person = {
  name: "test",
  age: 1,
};

getPropertyKey(person, "name");
