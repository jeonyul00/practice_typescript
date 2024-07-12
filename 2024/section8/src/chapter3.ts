// 맵드타입
// 기존의 객체타입으로 새로운 객체 타입 생성
interface User {
  id: number;
  name: string;
  age: number;
}

// 무.적.권 타입 별칭으로만 사용할 것
type PartialUser = {
  // key는 User의 키 (유니온) 값들이다.
  // value는 User[key];
  [key in keyof User]?: User[key];
};

function fetchUser(): User {
  return {
    id: 1,
    name: "",
    age: 1,
  };
}

function updateUser(user: PartialUser) {
  // 수정기능
}

updateUser({
  age: 2,
});
