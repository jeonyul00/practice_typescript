const a = "str" as unknown as number; // number
const b = 1 as unknown as void as undefined; // undefined

const emptyArr = []; // any[]
emptyArr.push("element");
emptyArr; // string[]

let nv: never;
// x
// nv = 1;

// !
const head = document.getElementById("head"); // HTMLElement | null
const head2 = document.getElementById("head")!; // HTMLElement

// 대소문자 차이
const aa: string = "str";
const bb: String = "str"; // String은 래퍼개체이다. 쓰지마.
