// 함수 타입 정의

function func(a: number, b: number): number {
  return a + b;
}

const allowFunc = (a: number, b: number): number => {
  return a + b;
};

function introduce(name = "") {
  console.log(`name: ${name}`);
}

// 옵셔널은 가장 뒤에 있어야함 -> 생각해보면 당연하지.
function introduce2(name: string = "", tall?: number) {
  if (typeof tall === "number") {
    console.log(`name: ${name}, ${tall}`);
  }
}

introduce2("");
introduce2("", 1);

// rest param
const getSome = (...values: number[]): number => {
  let total: number = 0;
  values.forEach((v) => (total += v));
  return total;
};
