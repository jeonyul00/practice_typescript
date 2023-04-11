/*
    그 자체로 타입이 될 수 있으나 클래스를 가르키는게 아니라 new {클래스명}()를 가르킴 (인스턴스)
    그럼 클래스 자체를 가르키는건 뭐지? : typeof {클래스명}
*/

// 자바를 조금 알아서 정말 다행이다...
class MyClass {
  private myPrivateProperty: string;
  public myPublicProperty: number;

  constructor(myPrivateProperty: string, myPublicProperty: number) {
    this.myPrivateProperty = myPrivateProperty;
    this.myPublicProperty = myPublicProperty;
  }

  public myPublicMethod(): void {
    console.log(`My private property is ${this.myPrivateProperty}`);
    console.log(`My public property is ${this.myPublicProperty}`);
  }
}

const myObject = new MyClass("Hello World", 123);
myObject.myPublicMethod();
