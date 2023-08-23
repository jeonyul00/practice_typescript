// 인터페이스

interface Person {
  name: string;
  age: number;
  gender?: string;
  sayHi: () => void;
  // 오버로드
  sayBye(): void;
  sayBye(a: number, b: number): void;
}

const person: Person = {
  name: "jeonyul",
  age: 30,
  sayHi: () => {
    console.log("hi");
  },
  sayBye: () => {
    console.log("bye");
  },
};

// 인터페이스는 유니온이나 인터섹션 타입을 만들 수 없다.
