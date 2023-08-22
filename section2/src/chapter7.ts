// void : 없다.
const func = (): void => {
  console.log("hello world");
};

const func2 = (): string => {
  console.log("hello world");
  return "str";
};

let voidValue: void;
// x
// voidValue = 1;
// voidValue = "";
// voidValue = null;
// voidValue = unknown;
// voidValue = NaN;

// o : 이건 왜 되냐
voidValue = undefined;

// --------------------

// never : 불가능, 모순
// 아무값도 재할당 불가능
function func3(): never {
  while (true) {
    console.log("infinite");
  }
}
