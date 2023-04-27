/*
    기본 문법 정리
*/

// 타입은 소문자로 쓸 것
const int: number = 1;
const str: string = "string";
const boo: boolean = true;
const unde: undefined = undefined;
const nill: null = null;

// function
function add(x: number, y: number): number {
  return x + y;
}
const add2 = (x: number, y: number): number => x + y;
const add3: (x: number, y: number) => number = (x, y): number => x + y;

// type alias
type typeAdd = (x: number, y: number) => number;
const add4: typeAdd = (x, y): number => x + y;

// interface
interface interAdd {
  (x: number, y: number): number;
}
const add5: interAdd = (x, y): number => x + y;

// obj
const obj: { name: string; age: number } = {
  name: "jeonyul",
  age: 29,
};

// arr
const arr: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [1, 2, 3, 4];
const tuple: [string, number] = ["jeonyul", 29]; // 길이가 고정된 배열, 파이썬의 튜플과 같음

// 타입 추론
const five: 5 = 5;
const num: number = 5;
/*
    둘 중 뭐가 더 맞는 것 같은가? : five
    five const이기에 변하지 않는다 때문에 five는 5라는 정확한 타입으로 추론된다
    num는 타입을 더 넓혀서 number으로 지정된다.
*/
