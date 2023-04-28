// forEach 처럼 만들어보자
interface Yul<T> {
  forEach(callback: (value: T) => void): void;
  map<S>(callback: (value: T) => S): S[];
}

const result: Yul<number> = [1, 2, 3];

result.forEach((value) => console.log(value));

[1, 2, 3].forEach((value) => {
  console.log(value);
  return "123";
});

// map 만들기
const map = result.map((value) => value + "");
const map2 = result.map((value) => value * 2);
