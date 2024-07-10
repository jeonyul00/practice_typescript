// array
const arr1 = [1, 2, 3];
arr1; // number[] -> 타입 추론
const arr2 = [1, 2, 3];
const arr3 = [true, false, true];
const arr4 = [1, "1", false, { a: "a" }];
const arr5 = [
    1,
    "1",
    false,
    { a: "a" },
];
const arr6 = [
    1,
    "1",
    false,
    { a: "a" },
];
const arr7 = [
    [1, 2, 3],
    [4, 5],
    [6, 7],
];
// Tuple
const tuple1 = [1, 2];
const tuple2 = [1, "1", false];
tuple1.push(1); // <- 이게 왜되냐? 튜플인디: ts의 한계, 이럴거면 그냥 튜플이라는 개념을 배제하고 하는게 나을 듯
const users = [
    ["kim", 20],
    ["lee", 21],
    ["park", 22],
    ["choi", 23],
];
export {};
