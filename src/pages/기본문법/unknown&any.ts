// // unknown과 any
// // any : 타입 검사 포기
// // unknown : 지금 당장은 타입을 모를 때, 알려지지않음 : 대표적으로 error
// // try {
// // } catch (e) {
// //  여기서 e의 타입은 unknown이기 때문에 message를 쓸 수 없다 그렇기에 강제 형 변환필요
// //   e.message;
// // }
// try {
// } catch (e) {
//   (e as Error).message;
// }

// let myVariable: unknown;
// myVariable = "Hello World";
// myVariable = 123;

// // any 처럼 모든 타입이 들어 갈 수 있지만, 엄격한 검사를 적용하여 타입에러
// const myString: string = myVariable; // Error: Type 'unknown' is not assignable to type 'string'.
// const myString2: unknown = myVariable; // Error: Type 'unknown' is not assignable to type 'string'.
