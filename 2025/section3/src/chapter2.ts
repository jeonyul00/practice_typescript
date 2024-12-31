let num1: number = 10;
let num2: 10 = 10;

// num2 = num1; x
num1 = num2;

// unknown -> 전체 집합
function unknownEx() {
  let a: unknown = 1;
  let b: unknown = "1";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown;
}

// never -> 공집합
function neverEx() {
  function neverFunc(): never {
    while (true) {}
  }
}
