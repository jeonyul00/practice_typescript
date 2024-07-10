// object: Object아님 object
let user1: object = {
  idx: 1,
  name: "kim",
};
// user.idx; // <- 접근안됨: 객체리터럴타입 써야됨

// 옵셔널 가능
let user2: { idx: number; name?: string } = {
  idx: 1,
  name: "kim",
};

// 그럼 너무 더러워 보이는데? -> 스트럭처 || 프로토콜 이런거 없나?
interface userType {
  idx: number;
  name: string;
}

let user3: userType = {
  idx: 2,
  name: "lee",
};

// 아 이거 공식문서 중후반부에 나온대, 일단 모르고 있어

user2 = {
  idx: 3,
};

// 읽기전용 -> 그럼 let으로 할 필요도 없겠다.
const config: { readonly apiKey: string } = {
  apiKey: "my api key",
};

config.apiKey;
