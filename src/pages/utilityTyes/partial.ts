// utility types : 타입스크립트가 미리 만들어 놓은 타입
interface profile {
  name: string;
  age: number;
  phone: string;
}

// 필수 값을 다 넣고 싶지 않을 때 Partial : 요소들 전부를 옵셔널로 만들어줌
const exJeonyul: Partial<profile> = {
  name: "jeonyul",
  age: 29,
  //   phone: "01038728208",
};
