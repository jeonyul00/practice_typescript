// // 타입 좁히기 (타입 가드)
// const guard = (a: number | string | Array<any>) => {
//   if (typeof a === "string") {
//     a.split(",");
//     return;
//   }
//   if (typeof a === "number") {
//     a.toFixed(1);
//   }
//   if (Array.isArray(a)) {
//     a.push(1);
//   }
// };

// interface Cat {
//   meow: number;
// }
// interface Dog {
//   bow: number;
// }
// // 타입을 찾아주는 커스텀 함수
// /*
//     raw is Dog는 TypeScript의 타입 가드 함수를 정의하는 문법 중 하나입니다. 이는 함수의 반환값이 boolean 타입이며, 해당 값이 true인 경우에는 매개변수가 Dog 타입이라는 것을 TypeScript 컴파일러에게 알리는 역할을 합니다.
//     예를 들어, 위의 코드에서 catOrDog 함수는 Cat 타입과 Dog 타입 중 하나의 매개변수를 받아서, 해당 매개변수가 Dog 타입인지 여부를 검사합니다. 이 때, (raw as Cat).meow는 raw 매개변수가 Cat 타입인 경우 meow 프로퍼티를 참조하여 검사합니다. 만약 meow 프로퍼티가 존재한다면, 해당 매개변수는 Cat 타입이므로, false 값을 반환합니다. 그렇지 않은 경우에는 Dog 타입이므로, true 값을 반환합니다.
//     이처럼 raw is Dog는 함수의 반환값이 boolean 타입이며, 해당 값이 true인 경우 매개변수가 Dog 타입임을 TypeScript 컴파일러에게 알리는 역할을 합니다. 이를 타입 가드 함수라고 부르며, 함수명 뒤에 is 키워드를 사용하여 정의할 수 있습니다. 타입 가드 함수를 사용하면 TypeScript 컴파일러가 타입 검사를 더욱 정확하게 수행할 수 있으므로, 코드의 안정성과 가독성을 향상시킬 수 있습니다.
// */
// const catOrDog = (raw: Cat | Dog): raw is Dog => {
//   if ((raw as Cat).meow) {
//     return false;
//   }
//   return true;
// };
// const exValue: Cat = { meow: 1 };
// catOrDog(exValue);
