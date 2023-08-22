// enum : 여러가지 값들에 각각 이름(key)을 부여해 열거해두고 사용하는 타입
// 컴파일 시 enum은 제거되지 않음 : 이유는 객체들이 값을 직접 쓰고 있기 때문에 enum이 제거되면 오류가 생김
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user1 = {
  name: "jeon",
  role: Role.ADMIN, // 0
};
const user2 = {
  name: "kim",
  role: Role.GUEST, // 2
};
const user3 = {
  name: "choi",
  role: Role.USER, // 1
};
