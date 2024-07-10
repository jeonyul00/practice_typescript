// enum -> js는 없다
// 이건 약간 ts랑 관계없어 보이는데 -> 그래서 컴파일 시 사라지지 않음
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["GUEST"] = 1] = "GUEST";
    Role[Role["MEMBER"] = 2] = "MEMBER";
})(Role || (Role = {}));
const user1 = {
    idx: 1,
    //   role: 0,
    role: Role.ADMIN,
    name: "kim",
};
const user2 = {
    idx: 2,
    //   role: 2,
    role: Role.GUEST,
    name: "lee",
};
const user3 = {
    idx: 3,
    //   role: 2,
    role: Role.GUEST,
    name: "park",
};
export {};
