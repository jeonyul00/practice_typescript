// map
const arr: Array<string | number> = [1, "2", 3, "4", "a"];

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const value = map(arr, (it) => it + " ");

// forEach
const arr2: Array<number> = [1, 2, 3];

// 정의
function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
});
