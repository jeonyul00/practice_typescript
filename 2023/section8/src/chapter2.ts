// keyof
// 객체 타입에 적용하는 연산자

interface Person {
  name: string;
  age: number;
}

// key: keyof Person : 객체의 키 값을 유니온 타입으로 추출
// 타입에만 쓸 수 있음
const getPropertyKey = (person: Person, key: keyof Person) => {
  return person[key];
};

const person = {
  name: "jeonyul",
  age: 30,
};

getPropertyKey(person, "name");

type Person2 = typeof person; // {name: string; age: number;}
