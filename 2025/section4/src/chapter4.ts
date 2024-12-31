// 커스텀 타입 가드
type Dog = {
  name: string;
  bark: boolean;
};

type Cat = {
  name: string;
  scratch: boolean;
};

type Animal = Dog | Cat;

// 이 함수가 true를 반환하면 animal는 Dog이다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function select(animal: Animal) {
  if (isDog(animal)) {
    animal.bark;
  } else {
    animal.scratch;
  }
}
