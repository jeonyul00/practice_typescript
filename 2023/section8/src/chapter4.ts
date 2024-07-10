// 템플릿리터럴 타입

type Color = "red" | "black" | "blue";
type Animal = "dog" | "cat" | "chiken";

type ColorAimal = `${Color}-${Animal}`;
// type ColorAimal = "red-dog" | "red-cat" | "red-chiken" | "black-dog" | "black-cat" | "black-chiken" | "blue-dog" | "blue-cat" | "blue-chiken"
