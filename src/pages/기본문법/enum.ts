// enum ... 그냥 객체 쓰는거랑 뭐가 다르지 : 자스로 변환 시 enum은 사라짐, 객체는 남아있음
enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Red;
console.log(myColor); // 0

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let myDirection: Direction = Direction.Left;
console.log(myDirection); // "LEFT"

// 그럼 객체랑 다른 점은 뭐지
// 자스로 변환 시 enum은 사라짐, 객체는 남아있음
