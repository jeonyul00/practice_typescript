// function zip(
//   x: number,
//   y: string,
//   z: boolean
// ): { x: number; y: string; z: boolean } {
//   return { x, y, z };
// }

// Parameters : 함수의 매개변수 타입들을 추출하는 제네릭 타입

const zip = (
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } => {
  return { x, y, z };
};

type params = Parameters<typeof zip>;
type first = params[0]; // 인덱스로 접근가능

function add(x: number, y: number): number {
  return x + y;
}
type AddParams = Parameters<typeof add>; // [number, number]

// infer : 제네릭 타입 매개변수를 추론하는 데 사용되는 키워드
// infer를 사용하면, 제네릭 타입 매개변수가 다른 타입들의 일부분으로 사용되는 경우, 해당 타입들을 추론할 수 있다.
type ReturnTypeEx<T> = T extends (...args: any[]) => infer R ? R : any;

function add(x: number, y: number): number {
  return x + y;
}
type AddReturnType = ReturnTypeEx<typeof add>; // number
