// 제네릭
function func<T>(value: T): T {
  return value;
}

// 호출할 때 타입이 정해짐, 정할 수도 있음 -> arr를 tuple로
let tuple = func<[number, number, number]>([1, 2, 3]);
