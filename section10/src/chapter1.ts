// Partial : 특정 객체 타입에 모든 프로퍼티를 옵셔널로 교체

interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

// 내부 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "임시제목",
  content: "초안-",
};

// required<T> : 특정 객체 타입에 모든 프로퍼티를 필수 프로퍼티로 교체

// 내부 구현 : -? => 옵셔널을 제거한다.
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "title",
  content: "content",
  tag: ["ts"],
  thumbnailURL: "www.-", // 필수
};

// ReadOnly : 읽기 전용

// 내부 구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
const onlyReadPost: Readonly<Post> = {
  title: "title",
  content: "content",
  tag: ["ts"],
};
