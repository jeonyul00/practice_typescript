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

// 타입 추론 : 이거 중요
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

// 자리 주의 : type을 빼면 올바른 자스다.
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

// 이런것도 됨
function notBody(x: number, y: number): number;
function notBody(x, y) {
  return x + y;
}

// as
let asA: number = 123;
asA = "string" as unknown as number; // 타입을 강제로 변경

// never
// never라는 타입이 뜨면 아무 타입도 올 수 없다. : 절대로 발생하지 않는 값
function error(message: string): never {
  throw new Error(message);
}
/* 위 함수는 문자열 메시지를 인자로 받고, 해당 메시지를 포함하는 Error 객체를 던집니다. 이 함수가 호출되면, 프로그램은 예외를 던지고 해당 함수 호출 이후의 코드는 실행되지 않게 됩니다. 이는 never 타입이 함수의 반환 타입으로 지정된 이유입니다. */
function infiniteLoop(): never {
  while (true) {
    // do something
  }
}

// ! : 100% 존재함을 확신할 때 쓴다
const head1 = document.querySelector("#head"); // Element | null
const head2 = document.querySelector("#head")!; // Element

// 원시 타입과 리터럴 타입, rest, tuple
// 대 소문자를 반드시 구분해야한다.
const aaa: string = "string";
const bbb: String = "string";
// String 과 string 서로 다른 타입이다
const ccc = new String();
type Wolrd = "hello" | "world";
const ddd: Wolrd = "world";
// 백틱도 타입에 들어갈 수 있다
type backtick = `hello${Wolrd}`;
const eee: backtick = "helloworld";
const fff: backtick = "hellohello";

// rest
const rest = (...args: string[]): string[] => args;
rest("s", "t", "r", "i", "n", "g");

// enum ... 그냥 객체 쓰는거랑 뭐가 다르지 : 자스로 변환 시 enum은 사라짐, 객체는 남아있음
const enum exEnum {
  Up = 1,
  Down = 2,
  Left = 3,
  Rigth = 4,
}

// as type이 없어서 타입을 추론함 : 여기서는 number로 추론함
const objTest0 = {
  Up: 1,
  Down: 2,
  Left: 3,
  Rigth: 4,
};

// 상수라는 타입으로 지정 : readOnly
const objTest = {
  Up: 1,
  Down: 2,
  Left: 3,
  Rigth: 4,
} as const;

// 이런식으로 초기값을 지정할 수 있다
const test2 = objTest.Up;
const test = exEnum.Up; // test = 1

// key of, type of
const objEx = { a: 123, b: "123", c: null } as const;
// 값을 타입으로 쓰고 싶을 때 : type of
type keyEx = typeof objEx; // { a: number, b: string, c: null}
type keyEx2 = keyof typeof objEx; // "a" | "b" | "c"
type valueEx = typeof objEx[keyof typeof objEx]; // 123 | "123" | null

// union(|), intersection(&)
// 잘못된코드 : 반환형을 잘못씀 : 반환형이 number | string이면 result.숫자내장객체 또는 스트링 내장 객체를 구별 할 수 없음
// const unionEx = (x: number | string, y: number | string): number | string => {
//   return x + y;
// };

type ANDEX = { hello: "world" } & { jeon: "yul" }; // 모든 속성이 다 있어야함
type OREX = { hello: "world" } | { jeon: "yul" }; // 하나만 있어도 됨
const andex: ANDEX = { hello: "world", jeon: "yul" };
const orex: OREX = { hello: "world" };

// 타입 에일리언스와 인터페이스의 상속
