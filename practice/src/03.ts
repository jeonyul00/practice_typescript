enum EDirection {
  black = "#000000",
  white = "#FFFFFF",
}

const ODirection = {
  black: "#000000",
  white: "#FFFFFF",
} as const;

const black = EDirection.black;

type a = keyof typeof ODirection;

// --------------------

type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const jeonyul: Human = { think: true, breath: true, breed: true };

interface A {
  breath: true;
}

interface B extends A {
  breed: true;
}

interface C extends B {
  think: true;
}

const yul: C = { think: true, breath: true, breed: true };

interface C {
  ex: () => {};
}
interface C {
  ex2: () => {};
}
interface C {
  ex3: () => {};
}

// const c: C = { breath, breed, ex, ex2, ex3, think };

// --------------------

type AA = string | number;
type BB = string;
