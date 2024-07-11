// 제네릭 타입 별칭, 제네릭 인터페이스

// 제네릭 인터페이스
interface Keypair<K, V> {
  key: K;
  value: V;
}

let key: Keypair<string, number> = {
  key: "api_key",
  value: 123456789,
};

let key2: Keypair<boolean, string[]> = {
  key: true,
  value: ["123456789"],
};

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

interface Map<V> {
  [key: string]: V;
}

let testMap: Map<string> = {
  key: "value",
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let testMap2: Map2<string> = {
  thisiskey: "KEY",
};

// 제네릭 인퍼페이스의 활용

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const a: User<Developer> = {
  name: "11",
  profile: {
    type: "developer",
    skill: "react",
  },
};
