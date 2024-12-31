// 타입 추론
const a = 10;
a; // 10

const b = {
  id: 1,
  name: "jeonyul",
  age: 31,
};

b;
/* 
  {
      id: number;
      name: string;
      age: number;
  }
*/
const { id, name, age } = b;
id; // number
const [one, two] = [1, "2"];
one; // number
two; // string

const num = 10;
let num2 = 10;
num2; // number
num; // 10
