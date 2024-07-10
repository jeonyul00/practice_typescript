const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a, b] = swap("1", 2);

// --------------------

const func = <T>(data: [T, ...unknown[]]): T => {
  return data[0];
};

const aa = func([1, 2, 3]);
const bb = func(["1", 2, 3]); // union

// --------------------

// length 프로퍼티가 있는 타입 확장
const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
};

const c = getLength([1, 2, 3]);
const d = getLength("123");
const e = getLength({ length: 10 });

// x
// const f = getLength(123);
