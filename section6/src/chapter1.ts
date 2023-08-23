// ts의 class
// 접근제어자는 자바와 동일

class Employee {
  protected name: string;
  public age: number;
  position: string;

  // 기본 생성자로 쓰면 에러 터지나? 오버로딩 하기 싫은데.
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  sayHi = (): void => {
    console.log("hi");
  };
}

// class는 클래스로 취급되면서 타입으로도 취급됨
const employeeA: Employee = new Employee("jeonyul", 30, "developer");
employeeA.sayHi();

// --

class ExecutiveOfficer extends Employee {
  private officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
