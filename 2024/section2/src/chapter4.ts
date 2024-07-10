// 타입 알리야스 -> 컴파일 시 js에서 제거됨
type UserType = {
  idx: number;
  name: string;
  nickname: string;
  ex1: string;
  ex2?: string;
  ex3: string;
};

let user1: UserType = {
  idx: 1,
  name: "kim",
  nickname: "nickKim",
  ex1: "",
  ex3: "",
};

// 인덱스 시그니처
type CountryCodesType = {
  // 모든 값이 키:스트링, 밸류: 스트링이잖아 -> 이 형식이면 허용
  [key: string]: string;
};

let countryCodes: CountryCodesType = {
  korea: "ko",
  japan: "jp",
  이것도: "됨?",
};

let countryNumbers: CountryNumbersType = {
  korea: 410,
  japan: 409,
};

// 생명주기는 어떻게 되는가 -> 변수랑 같은 레벨인가보군
type CountryNumbersType = {
  [key: string]: number;
};

// 이건 왜 되냐? -> 이 규칙을 위반하지만 않으면 허용됨 -> 빈 객체면 위반 아닌가...? -> 아니래 -> 문법이 그지같네
const test: CountryNumbersType = {};
