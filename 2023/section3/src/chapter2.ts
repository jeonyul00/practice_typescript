// 타입 계층

// unknown : 최상위 타입
const unknownEx = () => {
  // 모든 타입 할당 가능 : 업캐스팅
  // string < unknown
  // number < unknown
  let a: unknown = 1;
  let b: unknown = "str";
  let c: unknown = true;
  let d: unknown = () => {};
  let e: unknown = null;
  let f: unknown = undefined;
};

// never : 최하위 타입
const neverEx = () => {
  const nevetFunc = (): never => {
    while (true) {
      console.log("infinite");
    }
  };

  // 업케스팅
  // never < number
  let num: number = nevetFunc();
};

// void
const voidEx = () => {
  function voidFunc(): void {
    return undefined;
  }

  let voidValue: void = undefined; // 업케스팅
};
