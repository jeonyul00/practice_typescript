// type 지정 : 소문자
const a: number = 5;
// 대문자 아님 x : 대문자를 쓸 경우 코드가 다 바뀜
// const b: Number = 1;
const b: string = "string";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = "";
// 값을 고정 시킬 수도 있다
const g: 1 = 1;

// 매개변수, 반환값
function add(x: number, y: number): number {
  return x + y;
}
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
