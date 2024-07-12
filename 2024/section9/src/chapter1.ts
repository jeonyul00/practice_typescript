// 조건부 타입
type A = number extends string ? number : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // number

// 제네릭과 함께 써보기
type StringNumberSwich<T> = T extends number ? string : number;
