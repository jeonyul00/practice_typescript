/* 
    공변성과 반공변성
    타입 간의 관계를 설명하는 데 사용되는 중요한 개념
    공변성 : 하위 타입(subtype) 관계에서 발생하는 타입 호환성을 묘사합니다. 즉, 하위 타입 관계에서는 상위 타입의 인스턴스가 하위 타입의 인스턴스로 대체될 수 있습니다. 이 때 하위 타입은 상위 타입의 모든 멤버를 포함하며, 추가적인 멤버를 가질 수 있습니다.
*/

interface A {
  name: string;
}

interface B extends A {
  age: number;
}
// B는 A의 하위 타입이므로 A 타입 변수에 B 타입 변수를 할당할 수 있다
const a: A = { name: "John" };
const b: B = { name: "Jane", age: 25 };
a = b; // OK
b = a; // Error: A 타입은 B 타입에 할당될 수 없습니다.
