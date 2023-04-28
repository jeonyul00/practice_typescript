// /* */

// const optinal = (x: number, y?: number, z?: number) => {};

// function myFunction(myParameter?: string): void {
//   console.log(myParameter);
// }

// interface MyInterface {
//   myProperty?: string;
// }

// const myOptinObject: MyInterface = {};

// // 제네릭 : 타입을 아직 모름, 실제 호출 할 때 타입을 정함 : 같은 타입으로 지정됨
// function add7<T>(x: T, y: T): T {
//   return x + y;
// }

// // 반드시 스트링 또는 넘버 둥 중 하나로 같은 타입이 왔으면 좋겠다
// // 제한
// function add8<T extends number | string>(x: T, y: T): T {
//   return x + y; // 타입스크립트는 T가 뭔지 아직 모름, 그래서 오류 뜨지만 돌아감
// }

// function myTFunction<T>(myParameter: T): T {
//   return myParameter;
// }

// const myTString: string = myTFunction("Hello World");
// const myTNumber: number = myTFunction(123);
