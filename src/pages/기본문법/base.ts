// // 타입 스크립트는 최종적으로 자바스크립트로 변환이 된다
// // 타입 검사와 자바스크립트로 변환은 개별적으로 움직인다.
// // 타입에서 에러떠도 변환은 잘 될 수 있다 === 변환에서 에러떠도 타입검사는 잘되는 경우가 있다 ex) (props as number).toFixed(1); sumFunc('1234')

// // type 지정 : 소문자
// // 대문자 아님 x : 대문자를 쓸 경우 코드가 다 바뀜
// let Num: number = 1;
// // let b: Number = 1;
// let Str: string = "string";
// let Boo: boolean = true;
// let Unde: undefined = undefined;
// let Nil: null = null;
// let Any: any = "";

// // 값을 고정 시킬 수도 있다
// let one: 1 = 1;
// // 타입 추론 : 기본적으로 타입을 추론할 수 있는 것들은 추론해준다
// const fiveStr = "5";
// const fiveString: string = "5";

// /*
//     둘 중 뭐가 더 맞는 것 같은가? : fiveStr
//     fiveStr는 const이기에 변하지 않는다 때문에 fiveStr는 "5"라는 정확한 타입으로 추론된다
//     fiveString는 const임에도 타입을 더 넓혀서 string으로 지정된다.
// */

// /*
//     number는 기본적으로 제공되는 내장 타입으로 모든 숫자를 나타낸다.
//     Number은 객체를 나타낸다.
// */

// const allowFunc: (x: number, y: number) => number = (x, y) => x + y;

// const arr: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];
// const arr3: [string, number, number] = ["jeonyul", 29, 20];

// const num: number = 1;
// type Add = () => number;
// interface Minus {}
// Array<string>;
