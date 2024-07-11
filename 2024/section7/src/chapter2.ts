function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5];
const result = map(arr, (it) => it * 2);

console.log(result); // [2, 4, 6, 8, 10]

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
