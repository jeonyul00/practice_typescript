// void

function func1(): string {
  return "str";
}

function func2(): void {
  console.log("str");
}

let voidValue: void;
// voidValue = null; // x
voidValue = undefined; // <- 이건 또 왜 되냐? -> 이건 걍 외워
voidValue = func2(); // 이건 당연히 되겠지

// void: 함수에서 아무 값도 반환하지 않음
// null: 없음
// undefined: 아직 할당되지 않음

// never: 존재하지 않는 불가능한 타입
let a: string & number;
let b: never;

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error(); // 이거 실행되면 프로그램이 멈추기 때문에 반환값 타입은 never
}
