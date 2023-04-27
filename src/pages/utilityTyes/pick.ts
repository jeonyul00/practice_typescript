// // pick, omit
// // pick : 요소 중 원하는 값들만 가져옴
// // omit : 요소 중 원하는 값들을 제거함
// interface Info {
//   name: string;
//   age: number;
//   phone: string;
// }

// // 해당 키만
// const user: Pick<Info, "name" | "age"> = {
//   name: "jeonyul",
//   age: 30,
//   //   phone: "01038728208",
// };

// // 해당 키를 제외
// const otherUser: Omit<Info, "phone"> = {
//   name: "yunji",
//   age: 28,
//   //   phone: "01038728208",
// };

// // -------------------------------------------
// // 직접 만들어 보자.
// type yulPick<T, S extends keyof T> = {
//   [key in S]: T[key];
// };

// type yulOmit<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>;
