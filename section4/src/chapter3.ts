// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 벼전으로 만듬

// 오버로드 시그니처 : 함수를 오버로딩하기 위해 매개변수 별로 명시
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처 : 실제 구현부
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log("overloding", a, b, c);
    return;
  }
  console.log("overloding", a);
}

func(1);
func(1, 2, 3);
