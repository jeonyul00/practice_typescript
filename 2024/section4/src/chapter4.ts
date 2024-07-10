// 가드: 오 이런게 있었네

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 만약 이 함수가 true를 리턴한다면 animal is Dog 애니멀은 도그 타입이다. => 문법 참 그지같네
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal.isBark;
  }
}
