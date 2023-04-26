"use strict";
const result = [1, 2, 3];
result.forEach((value) => console.log(value));
[1, 2, 3].forEach((value) => {
    console.log(value);
    return "123";
});
// map 만들기
const map = result.map((value) => value + "");
const map2 = result.map((value) => value * 2);
