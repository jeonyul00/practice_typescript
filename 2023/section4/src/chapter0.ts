// 함수 타입 정의

function func(a: number, b: number): number {
  return a + b;
}

const add = (a: number, b: number): number => a + b;

function introduce(name: string, tall?: number) {
  console.log(`hello my name is ${name}`);
  // x : tall이 옵셔널이라 undefined 일 수 있다
  // console.log(`hello my height is ${tall + 10}`);

  console.log(`hello my height is ${tall! + 10}`);
  // 또는 타입 가드
  if (typeof tall === "number") {
    console.log(`hello my height is ${tall + 10}`);
  }
}

introduce("yul");
introduce("yul", 165);

// --------------------

// rest
function getSum(...rest: Array<number>): number {
  let sum: number = 0;
  rest.forEach((response) => {
    sum += response;
  });
  return sum;
}
