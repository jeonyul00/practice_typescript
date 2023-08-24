// 맵드 타입 기반의 유틸리티 타입

// Pick : 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

// 내부 구현
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 제목",
  content: "옛날 내용",
};

// Omit : 객체 타입으로부터 특정 프로퍼티만 제외하는 타입

// 내부 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const OmitPost: Omit<Post, "title"> = {
  tag: ["string[]"],
  content: "string",
  thumbnailURL: "string",
};

// Record : 객체 타입을 만들어주는 유틸리티 타입 키를 받아서 밸류로 타입을 정해줌

// 이러면 별로잖아
type ThumbnailLegacy = {
  large: { url: string };
  medium: { url: string };
  small: { url: string };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

// 내부 구현
type RecordM<K extends keyof any, V> = {
  [key in K]: V;
};
