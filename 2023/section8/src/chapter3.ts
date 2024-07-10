// 맵드 타입 : 기존의 객체타입을 기반으로 새로운 객체 타입을 생성

interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드타입
// interface에서는 불가
// 선택적 프로퍼티
type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

const fetchUser = (): ReadOnlyUser => {
  return {
    id: 1,
    name: "jeonyul",
    age: 30,
  };
};

const updateUser = (user: PartialUser) => {};

updateUser({ age: 29 });
