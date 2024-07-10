// 타입 추론 -> 추론이 가능한 상황에서나 추론함, 초기값 기준으로 추론함

let a = 10; // type number
let aa: 10 = 10; // type 10
let aaa = "str"; // type string

let b = {
  idx: 1,
  name: "jeon",
  age: 30,
  profile: { nickname: "nick" },
};

let { idx } = b;

idx; // number

function test(props = "hello") {
  console.log(props);
}

let d;
d; // undefined
d = undefined;
d = 1;
d; // number
d = "";
d; // string
// tlqkf
d = true;
d.valueOf;
// 점진적 타입
// 별로 안좋아보이는데? -> ts쓰는 이유가 없는거 아닌가 -> 걍 초기값 지정하셈

const num = 10;
// let으로 선언하면 number이고 const로 선언하면 10으로 됨 오 그치 상수니까

let arr = [1, "1"];
arr; // (number | string)[]
