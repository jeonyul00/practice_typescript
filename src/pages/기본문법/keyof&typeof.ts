// /*
//     key of, type of
//     keyof 연산자는 객체의 모든 속성 이름(key)을 포함하는 문자열 유니온 타입(Union Type)을 만든다. 이를 통해 객체의 속성 이름을 동적으로 참조할 수 있다.
//     typeof 연산자는 값의 타입을 추론합. 이 연산자는 변수, 함수, 클래스 등의 값의 타입을 반환
// */

// interface Person {
//   name: string;
//   age: number;
// }

// type PersonKeys = keyof Person;
// // PersonKeys의 타입은 "name" | "age"

// const myNumber = 123;
// type MyNumberType = typeof myNumber;
// // MyNumberType의 타입은 123 입니다.

// function myFunction2(a: string, b: boolean) {
//   // ...
// }
// type MyFunctionType = typeof myFunction;
// // MyFunctionType의 타입은 (a: string, b: boolean) => void 입니다.

// const objEx = { a: 123, b: "123", c: null } as const;
// // 값을 타입으로 쓰고 싶을 때 : type of
// type keyEx = typeof objEx; // { a: number, b: string, c: null}
// type keyEx2 = keyof typeof objEx; // "a" | "b" | "c"
// type valueEx = typeof objEx[keyof typeof objEx]; // 123 | "123" | null
