// 유틸리티 타입

// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "임시 저장 글",
  content: "내용내용",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};
// required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
const withThumbnailPost: Required<Post> = {
  title: "",
  content: "",
  tags: [""],
};

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// readonly
// 특정 객체 타임에서 모든 프로퍼티를 읽기 전용으로 만들어주는 타입
const readonlyPost: Readonly<Post> = {
  title: "",
  content: "'",
  tags: [""],
};
