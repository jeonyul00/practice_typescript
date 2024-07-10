// any, unknown
let anyVar = 1; // -> 이건 js를 쓰는거랑 뭐가 달라, 이건 피하자
anyVar = "1";
anyVar = true;
anyVar = NaN;
let num = 1;
num = anyVar; // 이게 왜 되냐
console.log(num);
export {};
