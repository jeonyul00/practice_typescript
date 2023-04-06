// type 지정 : 소문자
let a: number = 5;
// 대문자 아님 x : 대문자를 쓸 경우 코드가 다 바뀜
// let b: Number = 1;
let b: string = "string";
let c: boolean = true;
let d: undefined = undefined;
let e: null = null;
let f: any = "";
// 값을 고정 시킬 수도 있다
let g: 1 = 1;

// 타입 추론
const aa = "5";
const bb: string = "5";
// 둘 중 뭐가 더 맞는 것 같은가? : aa
// aa는 const이기에 변하지 않는다 때문에 aa는 "5"라는 정확한 타입으로 추론된다
// bb는 const임에도 타입을 더 넓혀서 string으로 지정된다.
// 타입 추론을 활용할 것

// 매개변수, 반환값
// function add(x: number, y: number): number {
//   return x + y;
// }
function add(x: number, y: number) {
  return x + y;
}

const value = add(1, 2); // add에 반환값을 지정하지 않아도 이 정도는 타입 추론을 해준다

// 자리 주의
const add2: (x: number, y: number) => number = (x, y) => x + y;

type exType = (x: number, y: number) => number;
const add3: exType = (x, y) => x + y;

const add4 = (x: number, y: number) => x + y;

interface exType2 {
  (x: number, y: number): number;
}

const arr: String[] = ["1", "2"];
const arr2: Array<number> = [1, 2]; // 제네릭
// tuple : 길이가 고정된 배열
const tuple: [number, number] = [1, 2];
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
