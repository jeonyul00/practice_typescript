// 제네릭

const funcArrow = <T>(value: T): T => {
  return value;
};
function func<T>(value: T): T {
  return value;
}

const str = func("str");
str.toLowerCase();
const one = func(1);
one.toFixed();
const isTrue = func(true);
