"use strict";
// forEach에 들어가보면 위의 인터페이스처럼 구현되어 있음, 지금은 보기 편하라고 저기다 표시함
// value가 타입 추론을 어떻게 할까? : Array<T> 제네릭 쓰고있네, 호출 시 타입이 지정되고 그 타입이 callbackfn의 array의 타입으로 지정됨
[1, 2, 3].forEach((value) => console.log(value));
["1", "2", "3"].forEach((value) => console.log(value));
[true, false, true].forEach((value) => console.log(value));
// map 반환형이 배열인데 그 배열의 타입이 뭔지 알 수 있는이유
[1, 2, 3].map((value) => console.log(value * 2));
// filter : 예제에서 타입 추론을 잘 못하고 있다. 이유는 filter의 내부 로직을 보면 알 수 있다. 해결법은?
// const numberArr = [1, "2", 3, 4].filter((value) => typeof value === "string");
const predicate = (value) => typeof value === "string";
const numberArr = [1, "2", 3, 4].filter(predicate);
