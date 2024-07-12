// 맵드 타입 기반 유틸리티
// Partial<T>: 옵셔널로 변경
interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

// 옵셔널로 변경
const draft: MyPartial<Post> = {
  title: "test1",
  content: "test2",
};

type MyRequired<T> = {
  // - <- 이딴 문법이 있네, ?를 빼겠다. -?
  [key in keyof T]-?: T[key];
};

// --
// Required<T>: 필수로 변경
const withThumbnailPost: MyRequired<Post> = {
  title: "test3",
  content: "test4",
  tag: ["5"],
  thumbnailURL: "", // <- 이제 이것도 필수
};

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key];
};
// --
// Readonly: 읽기 전용으로 변경
const readonlyPost: Readonly<Post> = {
  title: "test7",
  content: "test8",
  tag: ["9"],
  thumbnailURL: "",
};
