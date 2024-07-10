// 인터페이스와 클래스

interface ICharacter {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Charater implements ICharacter {
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log("override");
  }
}
