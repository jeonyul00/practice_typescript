// array
const arr: number[] = [1, 2, 3];
const arr2: string[] = ["1", "2", "3"];
const arr3: Array<boolean> = [true, false];
const arr4: Array<string | number> = [1, "2"];
const arr5: (string | number)[] = [1, "2"];
const arr6: number[][] = [[123], [123]];

// --------------------

// tuple : 길이와 타입이 고정된 배열, 선언된 순서 중요
let tuple: [number, number] = [1, 2];
tuple = [2, 3];

// x
// tuple = ["1", 2];

// x
// tuple = [1, 2, 3];

let tuple2: [number, number, string] = [1, 2, "str"];

// todo : 이게 왜 오류가 아니지, 위에서 지정한 타입이 변했는데
tuple2.push("add element");
tuple2.pop();

let tuple3: [number, string, number][] = [
  [1, "yul", 30],
  [2, "yun", 28],
  [3, "da", 24],
];
