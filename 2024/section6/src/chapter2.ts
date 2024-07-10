// class와 인터페이스의 활용

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements Character {
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move() {
    console.log(`${this.moveSpeed}의 속도로 달림`);
  }
}

const aa = new Character("jeonyul", 10);
aa.move();
