// 타입 추론 : 초기값을 기준으로 추론
let a = 10; // a:number
let b = "str"; // b:string

/* 
    let c: {
        name: string;
        age: number;
    }
*/
let c = {
  name: "jeonyul",
  age: 30,
};

// name: string
// age: number
let { name, age } = c;

// function func(): string
// params: string
function func(params = "default value") {
  return "str";
}

// --------------------

let d; // any : 추 후 할당되는 값에 따라 타입 추론하여 바뀜

d = 1;
// d: number
d.toFixed();

d = "str";
// d: string
d.split("");

// --------------------

const num = 10; // num:10 : (상수)값이 변할 일이 없기 때문에 type은 10

// --------------------

// let arr: (string | number)[]
let arr = [1, "1"];
