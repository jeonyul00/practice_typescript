// unknown : 지금 당장은 모르겠으나 나중에 쓸 때 정의한다.
let a: unknown;
(a as string) = "str";

try {
  console.log("test");
} catch (e) {
  //   e.message; // x
  (e as Error).message;
}

// --------------------
// is

interface A {
  name: number;
}
interface B {
  name: string;
}

const isA = (value: A | B): value is A => {
  if (typeof value.name === "number") return true;
  return false;
};

const aa: A = { name: 1 };

const value: boolean = isA(aa);

// -------------------- {}와 Object : 모든 타입

// --------------------
interface AAA {
  readonly a: string;
  b: string;
}

// x
// const ex: AAA;
// ex.a = "str";

// --------------------

interface IndexSig {
  [key: string]: number;
}
// x
// const ind: IndexSig = { str: "str" };

const ind: IndexSig = { str: 0 };

// --------------------
type Madd = "Human" | "Animal";
type MMad = {
  [key in Madd]: boolean;
};
