// class
// 자바 할 때 (객체지향 프로그래밍) 쓰던 붕어빵 틀

class Student {
  // 필드 : 클래스가 만들어 낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자 : 키워드 조심 : 클래스 명 아니고 constructor
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // method
  study() {
    console.log("start study");
  }
  sayHi() {
    console.log(`hi my name is ${this.name}`);
  }
}

let studentA = new Student("jeonyul", "A", 30);
console.log(studentA);
studentA.sayHi();

// --------------------
// 기본 class도 상속을 주거나 받을 수 있음
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  coding() {
    console.log(`start coding with ${favoriteSkill}`);
  }
}

const studentDeveloper = new StudentDeveloper("jeonyul", "A", 30, "js");
console.log(studentDeveloper);
