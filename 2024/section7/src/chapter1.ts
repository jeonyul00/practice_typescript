function swap<T, U>(a: T, b: U): (U | T)[] {
  return [b, a];
}

// 제네릭 타입은 최초에는 언노운임

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

function getLength<T extends { length: number }>(data: T) {
  // T: 호출되기 전까지는 언노운 -> T의 타입을 제한하면 됨
  // length를 가지고 있는 프로퍼티를 확장한 T
  return data.length;
}
