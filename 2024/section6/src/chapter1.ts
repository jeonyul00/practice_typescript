// class typescript

// 클래스로도, 타입으로도 활용이됨
class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name} 일하는 척 함`);
  }
}

const employee = new Employee("jeonyul", 30, "노예");

// 클래스를 타입으로도 쓸 수 있음
const employeeA: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {
    console.log(`${name} 일하는 척 함`);
  },
};
employeeA;
