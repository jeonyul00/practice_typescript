// /*
//     기본 문법 정리
// */

// // 타입은 소문자로 쓸 것
// const int: number = 1;
// const str: string = "string";
// const boo: boolean = true;
// const unde: undefined = undefined;
// const nill: null = null;

// // function
// function add(x: number, y: number): number {
//   return x + y;
// }
// const add2 = (x: number, y: number): number => x + y;
// const add3: (x: number, y: number) => number = (x, y): number => x + y;

// // type alias
// type typeAdd = (x: number, y: number) => number;
// const add4: typeAdd = (x, y): number => x + y;

// // interface
// interface interAdd {
//   (x: number, y: number): number;
// }
// const add5: interAdd = (x, y): number => x + y;

// // obj
// const obj: { name: string; age: number } = {
//   name: "jeonyul",
//   age: 29,
// };

// // arr
// const arr: number[] = [1, 2, 3, 4];
// const arr2: Array<number> = [1, 2, 3, 4];
// const tuple: [string, number] = ["jeonyul", 29]; // 길이가 고정된 배열, 파이썬의 튜플과 같음

// // 타입 추론
// const five: 5 = 5;
// const num: number = 5;
// /*
//     둘 중 뭐가 더 맞는 것 같은가? : five
//     five const이기에 변하지 않는다 때문에 five는 5라는 정확한 타입으로 추론된다
//     num는 타입을 더 넓혀서 number으로 지정된다.
// */

// // as
// let asEx = 123;
// asEx = "string" as unknown as number; // 강제 형 변환
// /*
//   위 코드에서 첫 번째 줄에서는 asEx 변수에 number 타입의 값 123을 할당합니다.
//   두 번째 줄에서는 "string" 값에 as unknown 타입 캐스팅을 수행하고, 그 결과를 다시 as number 타입 캐스팅합니다. 하지만 이전 값인 "string"은 number 타입으로 캐스팅될 수 없으므로, TypeScript 컴파일러가 이를 에러로 처리합니다.
//   따라서 위 코드는 컴파일 에러가 발생하게 됩니다. 이를 수정하려면 as unknown을 제거하고, asEx 변수에는 number 타입의 값만 할당하도록 수정해야 합니다.
//   let asEx: number = 123;
//   asEx = "456" as unknown as number; // 타입 체크를 통과하여 정상 동작합니다.
//   위 코드에서는 "456" 값을 as unknown 타입으로 캐스팅한 후, 다시 as number 타입으로 캐스팅합니다. 이 경우, "456" 값은 숫자 값으로 캐스팅될 수 있으므로 TypeScript 컴파일러가 이를 허용합니다.

//   타입 캐스팅(Type Casting)은 변수나 값의 타입을 명시적으로 지정하여 변환하는 것을 말합니다. TypeScript에서는 다음과 같이 두 가지 방법으로 타입 캐스팅을 수행할 수 있습니다.
// */

// // never
// // never는 다른 모든 타입의 하위 타입이며, never 타입의 값은 어떠한 값도 가지지 않는 상태, 즉 절대로 반환되지 않거나 예외가 발생하는 등의 불완전한 작업의 결과로 사용
// type Never = string & number;

// try {
//   const emptyArr = [];
//   emptyArr[0];

//   const emptyArr2: number[] = [];
//   emptyArr2[0];
// } catch (e) {
//   console.log(e);
// }

// // !
// // ! : 100% 존재함을 확신할 때 쓴다 : 지양할 것
// const head1 = document.querySelector("#head"); // Element | null
// const head2 = document.querySelector("#head")!; // Element

// // 원시타입, 리터럴타입, rest, tuple
// const upperStr: String = "string"; // String === new String()
// const lowerStr: string = "string";

// // rest : 매개변수는 나머지 매개변수를 하나의 배열로 수집하는 역할
// function rest(a: number, ...args: number[]) {
//   console.log(a, args); // 1, [2,3]
// }
// rest(1, 2, 3);

// // tuple
// const tuple2: [string, number] = ["1", 1];
// tuple2[2] = "test"; // 이건 안됨
// tuple2.push("test"); // 근데 이건 됨

// // enum
// // enum ... 그냥 객체 쓰는거랑 뭐가 다르지 : 자스로 변환 시 enum은 사라짐, 객체는 남아있음
// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let myColor: Color = Color.Red;
// console.log(myColor); // 0

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// let myDirection: Direction = Direction.Left;
// console.log(myDirection); // "LEFT"

// // 그럼 객체랑 다른 점은 뭐지
// // 자스로 변환 시 enum은 사라짐, 객체는 남아있음

// // keyof, typeof
// const obj2 = { a: 123, b: 456, c: 789 };
// type Key = keyof obj2; // 이건 안되지, 값을 타입으로 쓸 수 없음
// type Key2 = keyof typeof obj2; // key들의 타입
// type Key3 = typeof obj2;

// // 잉여 속성 검사
// // 좁은 타입에서 넓은 타입으로 대입 가능 === 반대는 불가능
// // 그럼 객체에서 넓고 좁은 것은? : 속성이 적을수록 넓은 타입
// type Name = { name: string };
// type Age = { age: number };
// type NAA = Name & Age;
// type NOA = Name | Age;

// // 넓은 타입과 좁은 타입의 대입 관계
// const Or: NOA = { name: "jeonyul" };
// const And: NAA = { name: "jeonyul", age: 30 };

// const A: NAA = Or; // x 안됨 넚은 타입을 좁은 타입에 넣는건 안됨
// const B: NOA = And; // o 됨 좁은 타입을 넓은 타입에 넣는건 됨

// // 그런데 이건 안됨 : 객체에 리터럴 검사라는 것이 있음 , 리터럴을 직접 넣을 경우 타입이 넓냐 좁냐 검사 뿐 아니라 잉여속성 검사라는 것도 함
// const G: NOA = { name: "jeonyul", age: 30, married: false };

// // is
// /*
//   TypeScript에서 is는 타입 가드(Type Guard)의 일종으로 사용되는 키워드입니다. is 키워드를 사용하면 함수나 메서드가 해당 조건을 만족하는지 검사한 후, 그 결과를 불리언 타입으로 반환합니다.
//   예를 들어, 다음과 같은 isNumber 함수를 작성한다고 가정해보겠습니다.
// */
// function isNumber(value: any): value is number {
//   return typeof value === "number";
// }
// /*
//   TypeScript에서 is는 타입 가드(Type Guard)의 일종으로 사용되는 키워드입니다. is 키워드를 사용하면 함수나 메서드가 해당 조건을 만족하는지 검사한 후, 그 결과를 불리언 타입으로 반환합니다.
//   예를 들어, 다음과 같은 isNumber 함수를 작성한다고 가정해보겠습니다.
// */
// function filterNumbers(values: any[]): number[] {
//   const result: number[] = [];
//   for (const value of values) {
//     if (isNumber(value)) {
//       result.push(value);
//     }
//   }
//   return result;
// }
// /*
//   위 예시에서는 isNumber 함수를 사용하여, values 배열에서 number 타입의 값만 필터링합니다. 이를 통해, filterNumbers 함수가 반환하는 값의 타입이 number[]로 추론되도록 하는 것입니다.
//   따라서 is 키워드는 TypeScript에서 타입 가드를 구현할 때 사용되며, 해당 조건이 참일 경우 매개변수의 타입을 명시적으로 지정할 수 있습니다.
// */

// // 인덱스 시그니처
// // 객체안의 어떤 값이든 문자열이고 싶다
// type A = { [key: number]: string };
// const aa: A = { 1: "aa", 2: "2" };
