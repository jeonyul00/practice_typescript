interface Person {
  name: string;
  age: number;
  [key: string]: string | number;
}

const person: Person = {
  name: "John",
  age: 30,
  gender: "Male",
  email: "john@example.com",
};
