// 타입 좁히기
// 조건문 등으로 타입 좁히기 -> 약간 if let , guard let 같은 개념인가

type Person = {
  name: string;
  age: number;
};

// 이걸 이렇게 귀찮게해야 한다고?
const testFunc = (props: number | string | Date | null | Person) => {
  if (typeof props === "number") {
    console.log(props.toFixed());
  } else if (typeof props === "string") {
    console.log(props.toLowerCase());
  } else if (props instanceof Date) {
    // instanceof -> 왼쪽 값이 오른쪽 클래스의 객체가 맞냐?
    console.log(props.getTime());
  } else if (props && "age" in props) {
    // props && "age" in props -> 프롭스가 있고(널이 아니고) 프롭스 안에 age가 있냐? -> in 연산자가 하는 일이 이거임
    console.log(props.age);
  }
};

testFunc("1");
testFunc(1);
