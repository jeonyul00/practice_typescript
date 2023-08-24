const a: string = "str"; // string : const이기 때문에 추 후 변할 일이 없다 => str로 하는것이 논리적임
const b: "str" = "str"; // str : 타입 추론이 가능하므로 생략 가능
const c = "str"; // str : 타입 추론

const arr = [1, 2, 3]; // const arr: number[]
const arr2 = ["1", 2, 3]; // const arr2: (string | number)[]
