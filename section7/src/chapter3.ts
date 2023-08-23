// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 반드시 타입 변수에 타입을 직접 할당해야함
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 1234,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// --------------------

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "key",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// --------------------

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<number> = {
  key: 123,
};

// --------------------

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

function goToSchool(user: User<Student>) {
  console.log(`go to ${user.profile.school}`);
}

const developerUser: User<Developer> = {
  name: "jeonyul",
  profile: { type: "developer", skill: "js" },
};

const studentUser: User<Student> = {
  name: "choiseunghyuck",
  profile: { type: "student", school: "Seoul Univ" },
};
