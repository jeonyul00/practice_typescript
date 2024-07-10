// 타입 좁히기 : 넓은 타입에서 좁은 타입으로 좁힘

type Person = {
  name: string;
  age: number;
};

// value가 number면 toFixed, string이면 toUpperCase, Date면 getTime, Person이면 age
function func(value: string | number | Date | Person | null): void {
  // x
  // console.log(value.toFixed());
  // console.log(value.toUpperCase());

  // 이러한 방법을 타입 가드라고 부름
  if (typeof value === "number") {
    console.log(value.toFixed());
    return;
  }
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    return;
  }
  // 이거 너무 불편 => typeof 말고 instanceof로 해결
  // if (value !== null && typeof value === "object") {
  //   console.log(value.getTime());
  // }

  // instanceof : 앞의 값이 뒤의 값의 인스턴스인가 ? true : false
  if (value instanceof Date) {
    console.log(value.getTime());
    return;
  }

  // Person은 타입이다.instanceof는 인스턴스인지 확인하는 연산자이다.
  // 위의 Date는 클래스이기에 사용 할 수 있었다
  // in 연산자로 해결 : 뒤의 객체 안에 앞의 키가 있는가 ? true : false
  if (value && "age" in value) {
    console.log(value.age);
    return;
  }
}
