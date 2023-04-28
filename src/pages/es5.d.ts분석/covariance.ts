/*
    공변성과 반공변성
    타입 간의 관계를 설명하는 데 사용되는 중요한 개념
*/

// 공변성 : 하위 타입(subtype) 관계에서 발생하는 타입 호환성을 묘사합니다. 즉, 하위 타입 관계에서는 상위 타입의 인스턴스가 하위 타입의 인스턴스로 대체될 수 있습니다. 이 때 하위 타입은 상위 타입의 모든 멤버를 포함하며, 추가적인 멤버를 가질 수 있습니다.
interface AA {
  name: string;
}

interface B extends AA {
  age: number;
}

/*
    // B는 A의 하위 타입이므로 A 타입 변수에 B 타입 변수를 할당할 수 있다
    const a: A = { name: "John" };
    const b: B = { name: "Jane", age: 25 };
    a = b; // OK
    b = a; // Error: A 타입은 B 타입에 할당될 수 없습니다.

    // 반 공변성 : 반 공변성은 상위 타입이 하위 타입으로 대체될 수 있는 반대의 관계를 묘사 즉, 상위 타입은 하위 타입보다 더 많은 멤버를 가질 수 있습니다.
    type A = (arg: string) => void;

    type B = (arg: any) => void;

    const a: A = (arg: string) => console.log(arg);
    const b: B = (arg: any) => console.log(arg);

    b = a; // OK
    a = b; // Error: B 타입은 A 타입에 할당될 수 없습니다.

    //
    // 리턴 값은 더 넓은 값이면 대입 가능, 근데 왜 매개변수는 반대지? : 매개변수는 좁은 값이면 대입 가능 
    const exFunc = (x: string | number): string => x.toString();
    type exType = (x: string) => number | string;
    let value2: exType = exFunc;
*/

function AAA(x: string): number {
  return +x;
}

type BBB = (x: string) => number | string;

const CCC: BBB = AAA;
// 결론 : 리턴값은 더 넓은 타입으로 대입가능, 매개변수는 더 좁은 타입으로 대입 가능
