const a: number = 1;
const b: string = "";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;

type Add = (x: number, y: number) => number;

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const add3: Add = (a, b) => {
  return a + b;
};

const obj: { name: string; age: number } = {
  name: "jeonyul",
  age: 30,
};

interface TAdd {
  (a: number, b: number): number;
}
const add4: TAdd = (i, j) => {
  return i + j;
};

const arr: string[] = ["str"];
const arr2: Array<string> = ["str"];
const arr3: [string, string] = ["str", "str"]; // tuple

// ---
function test(x: number, y: number): number;
function test(x: number, y: number) {
  return x + y;
}

let aa = 123;
aa = "string" as any as number;

// !
const array = [];
array.push("test");
array.push(null);
array[1]![0];
