// 타입 별칭
type userType = {
  id: number;
  name: string;
};

const user: userType = {
  id: 1,
  name: "jeonyul",
};

// 인데스 시그니처
type countryCodesType = {
  [key: string]: string;
};

const countryCodes: countryCodesType = {
  Korea: "ko",
  Japan: "jp",
};

type countryNumerCodesType = {
  [key: string]: number;
  Korea: number; // 필수
};

const countryNumerCodes: countryNumerCodesType = {
  US: 840,
  UK: 826,
  Korea: 410,
};
