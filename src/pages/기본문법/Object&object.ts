// {}와 Object와 object
// {}와 Object는 === 모든타입 , null과 undefined 제외
// object는 === 객체
const x: {} = "string";
const y: Object = "string";
// const z: object = "string"; // x
const z: object = { key: "value" };

// readonly
interface ReadOnly {
  readonly a: string;
  b: string;
}

// 인덱스 시그니처 : 전부 다 한 타입일 때 : 모든 키는 스트링이고, 밸류는 넘버이다
type AllString = { [key: string]: number };
