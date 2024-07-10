// 기본 타입 호환
let num1: 10 = 10; // 자식 타입
let num2: number = 10; // 부모 타입

// num1 = num2; // x 10을 number로 보겠다
num2 = num1; // number를 10으로 보겠다

// 타입 계층도에서 업캐스팅은 가능 다운캐스팅 불가능
function unknownExam() {
  let a: unknown = 1;
  a = "";
  a = true;
  a = null;
  a = NaN;
}

function neverFunc() {
  function neverr(): never {
    while (true) {}
  }
  let num: number = neverr(); // 업캐스팅이 되는군
}

// void
function voidEx() {
  function test(): void {
    console.log(1);
    return undefined; // <- 업캐스팅이 되어서 이렇게도 되는거군
  }

  let a: void = undefined;
}

// any

function anyF() {
  let anyValue: any;
  let unknownValue: unknown;
  anyValue = unknownValue; // <- 이건 왜 되냐고 다운캐스팅인데 아니 뭐 문법을 이따위로 만드냐, any는 예외래
  unknownValue = anyValue; // any는 타입 계층도를 무시함, 단 never는 또 안된대
  let neverValue: never;
  // neverValue = anyValue; // x: never타입은 순수한 공집합
}
