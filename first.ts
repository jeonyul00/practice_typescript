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
// never라는 타입이 뜨면 아무 타입도 올 수 없다.

// 절대 발생하지 않는 값
type Never = string & number;

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

// ex
type Animal = { breath: true };
type Poyoryu = Animal & { breed: true };
type Human = Poyoryu & { think: true };
const jeonyul: Human = { breath: true, breed: true, think: true };
const jeonyul2: Animal & Poyoryu & { think: true } = {
  breath: true,
  breed: true,
  think: true,
};

// 타입을 집합으로 생각하자
type A2 = string | number;
type A3 = string;
type A4 = string & number; // 이런 값은 없지만 아무튼 이 값이 가장 좁은 타입
// 둘 중 A2가 더 넙은 타입
// 좁은 타입에서 넓은 타입으로 대입 가능 === 반대는 불가능
// 그럼 객체에서 넓고 좁은 것은? : 속성이 적을수록 넓은 타입
type N = { name: string };
type A = { age: number };
type NAA = N & A;
type NOA = N | A;

// 넓은 타입과 좁은 타입의 대입 관계
const C: NOA = { name: "jeonyul" };
const D: NAA = { name: "jeonyul", age: 30 };
const E: NAA = C; // x 안됨
const F: NOA = D; // o 됨

// 그런데 이건 안됨! : 객체에 리터럴 검사라는 것이 있음 , 리터럴을 직접 넣을 경우 타입이 넓냐 좁냐 검사 뿐 아니라 잉여속성 검사라는 것도 함
const G: NOA = { name: "jeonyul", age: 30, married: false };
// 변수를 하나 넣어서 대입하면 해결됨

// void : 리턴값이 void, 매개변수가 void, 함수가 void
// undefined는 됨 그러나 void와 undefined는 다르다
function voidEx(): void {
  return undefined;
}

// error 안남
function voidEx2(callback: () => void): void {} // 여기서 void는 리턴값을 사용하지 않겠다 라는 뜻
voidEx2(() => {
  return "123";
});

const valueEx = voidEx2(() => {
  return "123";
});
// 때문에 valueEx는 123이 아니고 void가 됨
interface VoidEx {
  fuc: () => void; // 여기서 void는 리턴값을 사용하지 않겠다 라는 뜻
}

// error 안남
const VOIDEX: VoidEx = {
  fuc() {
    return "abc";
  },
};

// unknown과 any
// any : 타입 검사 포기
// unknown : 지금 당장은 타입을 모를 때 : 대표적으로 error
// try {
// } catch (e) {
//  여기서 e의 타입은 unknown이기 때문에 message를 쓸 수 없다 그렇기에 강제 형 변환필요
//   e.message;
// }
try {
} catch (e) {
  (e as Error).message;
}

// 타입 좁히기 (타입 가드)
const guard = (a: number | string | Array<any>) => {
  if (typeof a === "string") {
    a.split(",");
    return;
  }
  if (typeof a === "number") {
    a.toFixed(1);
  }
  if (Array.isArray(a)) {
    a.push(1);
  }
};

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
// 타입을 찾아주는 커스텀 함수
/*
    raw is Dog는 TypeScript의 타입 가드 함수를 정의하는 문법 중 하나입니다. 이는 함수의 반환값이 boolean 타입이며, 해당 값이 true인 경우에는 매개변수가 Dog 타입이라는 것을 TypeScript 컴파일러에게 알리는 역할을 합니다.
    예를 들어, 위의 코드에서 catOrDog 함수는 Cat 타입과 Dog 타입 중 하나의 매개변수를 받아서, 해당 매개변수가 Dog 타입인지 여부를 검사합니다. 이 때, (raw as Cat).meow는 raw 매개변수가 Cat 타입인 경우 meow 프로퍼티를 참조하여 검사합니다. 만약 meow 프로퍼티가 존재한다면, 해당 매개변수는 Cat 타입이므로, false 값을 반환합니다. 그렇지 않은 경우에는 Dog 타입이므로, true 값을 반환합니다.
    이처럼 raw is Dog는 함수의 반환값이 boolean 타입이며, 해당 값이 true인 경우 매개변수가 Dog 타입임을 TypeScript 컴파일러에게 알리는 역할을 합니다. 이를 타입 가드 함수라고 부르며, 함수명 뒤에 is 키워드를 사용하여 정의할 수 있습니다. 타입 가드 함수를 사용하면 TypeScript 컴파일러가 타입 검사를 더욱 정확하게 수행할 수 있으므로, 코드의 안정성과 가독성을 향상시킬 수 있습니다.
*/
const catOrDog = (raw: Cat | Dog): raw is Dog => {
  if ((raw as Cat).meow) {
    return false;
  }
  return true;
};
const exValue: Cat = { meow: 1 };
catOrDog(exValue);

// {}와 Object와 object
// {}와 Object는 === 모든타입 , null과 undefined 제외
// object는 === 객체
const x: {} = "string";
const y: Object = "string";
const z: object = "string"; // x

// readonly
interface ReadOnly {
  readonly a: string;
  b: string;
}

// 인덱스 시그니처 : 전부 다 한 타입일 때 : 모든 키는 스트링이고, 밸류는 넘버이다
type AllString = { [key: string]: number };

// class : 그 자체로 타입이 될 수 있으나 new ()를 가르킴 (인스턴스)
// class classEx {
//   a: string;
//   b: number;
//   constructor() {
//     this.a = "123";
//     this.b = 123;
//   }
// }
class classEx {
  ca: number = 1;
  cb: number = 1;
}

// 옵셔널, 제네렉
const optinal = (x: number, y?: number, z?: number) => {};

// 제네릭 : 타입을 아직 모름, 실제 호출 할 때 타입을 정함 : 같은 타입으로 지정됨
// function add4<T>(x: T, y: T): T {
//   return x + y;
// }

// 반드시 스트링 또는 넘버 둥 중 하나로 같은 타입이 왔으면 좋겠다
function add4<T extends number | string>(x: T, y: T): T {
  return x + y;
}

// 기본값
const defaultValue = (a: number = 1, b: string = "string"): void => {};
const defaultValueCallback = (
  callback: { children: string } = { children: "jeonyul" }
): string => {
  return callback.children;
};
const aaaa = <T = unknown>(x: T, y: T): void => {};
