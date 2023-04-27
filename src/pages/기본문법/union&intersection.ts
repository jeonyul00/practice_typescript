// /*
//     union : &으로 표시하며 and
//     intersection : |로 표시하며 or
// */

// // 잘못된코드 : 반환형을 잘못씀 : 반환형이 number | string이면 result.숫자내장객체 또는 스트링 내장 객체를 구별 할 수 없음
// // const unionEx = (x: number | string, y: number | string): number | string => {
// //   return x + y;
// // };

// type MyType = string | number;

// type ANDEX = { hello: "world" } & { jeon: "yul" }; // 모든 속성이 다 있어야함
// type OREX = { hello: "world" } | { jeon: "yul" }; // 하나만 있어도 됨
// const andex: ANDEX = { hello: "world", jeon: "yul" };
// const orex: OREX = { hello: "world" };

// // ex
// type Animal = { breath: true };
// type Poyoryu = Animal & { breed: true };
// type Human = Poyoryu & { think: true };
// const jeonyul: Human = { breath: true, breed: true, think: true };
// const jeonyul2: Animal & Poyoryu & { think: true } = {
//   breath: true,
//   breed: true,
//   think: true,
// };
