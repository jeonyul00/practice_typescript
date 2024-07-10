// 인터페이스 -> 스위프트의 프로토콜

interface IPerson {
  name: string;
  age: number;
  sayHi: () => void;
  sayBye(): void; // 오버로딩 하려면 이 문법으로 해야됨
  sayBye(a: number, b: number): void;
  sayBye(a: number, b: number, c: number): void;
}

// 인터페이스는 유니온이나 인터셉션 타입으로 못 씀

const person: IPerson = {
  name: "kim",
  age: 30,
  sayHi: () => {
    console.log("hi");
  },
  sayBye: () => {
    console.log("bye");
  },
};
