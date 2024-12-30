// enum 컴파일 시 사라지지 않음
enum Grade {
  admin = 0,
  user = 1,
  guest = 2,
}

const userA: { id: number; name: string; grade: Grade } = {
  id: 1,
  name: "jeonyul",
  grade: Grade.admin,
};

console.log(userA.grade); // 0
