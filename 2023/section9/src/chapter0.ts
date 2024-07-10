// 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 이걸 어디다 써먹냐? : 제네릭이랑 쓰면 좀 나을 듯
type Swicth<T> = T extends number ? string : number;

let value: Swicth<number>;
let value2: Swicth<string>;

// --------------------

const removeSpace = <T>(text: T): T extends string ? string : undefined => {
  if (typeof text === "string") {
    return text.replace(" ", "") as any;
  }
  return undefined as any;
};

// 이러면 내가 원하는게 아닌데
const result = removeSpace("my name is jeonyul");
