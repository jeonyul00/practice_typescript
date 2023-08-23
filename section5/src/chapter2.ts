// 선언의 합침
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 동일한 이름으로 인터페이스를 중복 선언하면 합쳐짐
const user: Person = {
  name: "jeonyul",
  age: 30,
};

// 주로 모듈의 타입을 보강할 때 사용
