// 함수 오버로딩: 자바랑 거의 비슷한데 매개변수의 타입으로도 분기가 가능한가봄

// 선언
function test(a: number): void;
function test(a: number, b: number, c: number): void;

// 구현
function test(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a);
  }
}

// test(); // x
test(1);
// test(1, 2); // x
test(1, 2, 3);
