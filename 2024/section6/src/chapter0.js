// class

class Student {
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("공부하는 척 함");
  }

  introduce() {
    console.log(`내 이름은 ${this.name}`);
  }
}

const studentA = new Student("jeonyul", "A+", 30);

studentA.study();

class StudentDeveloper extends Student {
  skill;

  // 생성자
  constructor(name, grade, age, skill) {
    super(name, grade, age);
    this.skill = skill;
  }

  programming() {
    console.log(`${this.skill}로 개발함`);
  }
}

const studentDeveloper = new StudentDeveloper("jeonyul", "C", 30, "swift");

studentDeveloper.programming();
