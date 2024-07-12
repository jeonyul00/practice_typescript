// 템플릿 리터럴

type Color = "red" | "black" | "green";
type Animal = "cat" | "dog";
type ColoredAniaml = `${Color}-${Animal}`;

const coloredAnimal: ColoredAniaml = "black-cat";
