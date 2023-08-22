// 타입 별칭
// 컴파일 시 type는 제거
type userType = {
  id: number;
  name: string;
  nickname: string;
  bio?: string;
};

let user1: userType = {
  id: 1,
  name: "jeonyul",
  nickname: "admin",
  bio: "hello world",
};

let user2: userType = {
  id: 2,
  name: "yul",
  nickname: "admin2",
};

// --------------------

// 인덱스 시그니처
// 규칙을 가지고 키와 벨류의 타입 지정 : key가 string이면 value는 string
type countryCodesType = {
  [key: string]: string;
  requireEx: string;
};
// type countryCodes = {
//   Korea: string;
//   Japan: string;
//   chaina: string;
//   taiwan: string;
// };

let countryCodes: countryCodesType = {
  requireEx: "test",
  Korea: "ko",
  Japan: "ja",
  chaina: "ch",
  taiwan: "ta",
};
