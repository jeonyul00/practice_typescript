// any, unknown

let anyVar: any = 1; // -> 이건 js를 쓰는거랑 뭐가 달라, 이건 피하자
anyVar = "1";
anyVar = true;
anyVar = NaN;

let num: number = 1;
num = anyVar; // 이게 왜 되냐
console.log(num);
// 그냥 any 쓰지마

// unknown
let unknownVar: unknown;
unknownVar = "1";
unknownVar = true;
unknownVar = NaN;

// num = unknownVar; <-- 모든 타입의 변수에는 unknown을 할당할 수 없음, 내장 함수 아무것도 못 씀

// 그럼 어떻게 활용하라는건데
if (typeof unknownVar === "number") {
  num = unknownVar;
}
