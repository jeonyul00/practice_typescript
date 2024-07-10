/*
    타입 단언 => as => 변환이군, 업캐스팅만 되려나?
    값 as 타입 => 값의 타입을 지정 타입으로 변경
*/

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "개",
  color: "흰색",
  breed: "믹스",
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // <- 10을 unknown으로 그 unknown을 string으로 변환, 이걸 써도 될까...
// unknown은 다 되니까...

// const 단언: 이건 또 뭐야
let num4 = 10; // type: number
let num5 = 10 as const; // type: 10 -> 그치 상수로 쓰니까

let cat = {
  name: "고양이",
  color: "노랑",
} as const; // 이러면 상수로 변환이 되니까 => 읽기 전용이지 오 이렇게도 쓸 수 있겠네

// cat.color = "변경 안됨";

// non null 단언: null 그리고 undefined 아님
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "title ex",
  author: "jeonyul",
};

// const length: number = post.author?.length; -> 언디파인디드가 나올 수도 있기 때문에 타입이 number가 아닐 수도 있다는 이야기지 -> 그럼? ! 강제 언래핑 -> 근데 이거 스위프트에서 가끔씩 터지는거 알지? 이러지말고 걍 if문 돌리셈
const length: number = post.author!.length;
const length2: number | undefined = post.author?.length;

if (length2 != undefined) {
  length; // 여기선 무조건 number가 되겠지
}
