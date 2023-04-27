// // 옵셔널을 필수로 바꾸고싶을 때 : required
// interface userInfo {
//   readonly name?: string;
//   readonly age?: number;
// }

// // 옵셔널 제거
// // readonly : 수정 불가
// // - : 제거
// type yulTest<T> = {
//   -readonly [key in keyof T]-?: T[key];
// };

// const yul: yulTest<userInfo> = {
//   name: "jeonyul",
//   age: 30,
// };
