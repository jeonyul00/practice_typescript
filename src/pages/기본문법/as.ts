// /*
//     as는 타입 변환(type assertion)을 수행하는 데 사용되는 키워드
//     as 키워드는 값의 타입을 강제로 지정하여, TypeScript 컴파일러가 타입 검사를 수행할 때 해당 값의 타입을 무시하고 지정된 타입으로 취급하도록 한다.
// */

// let myVari: any = "Hello World";

// const myLength1: number = (<string>myVari).length; // 이거 가독성 참 떨어지네
// const myLength2: number = (myVari as string).length;

// let asomeStr = "string";
// // asomeStr = 1 // 문자열을 숫자로 바꾸려니까 안됨 : 강제 형 변환 필요
// asomeStr = 1 as unknown as string;
