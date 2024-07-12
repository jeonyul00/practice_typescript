// 맵드 타입 기반 유틸리티

// Pick<T,K> : 객체 타입으로부터 특정 프로퍼티만 빼냄
interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
// Post에서 title" | "content만 골라냄
const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "엣날 컨텐츠",
};

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// --
// Omit<T,K> : 객체 타입으로부터 특정 프로퍼티를 제거
const notitlePost: Omit<Post, "title"> = {
  content: "엣날 컨텐츠",
  tag: [""],
  thumbnailURL: "",
};

// --
// Record<K,V> : 객체 타입을 만들어주는 유틸리티 <키, 밸류>
/* 
  type Thumbnail = {
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
  };
*/

// 위와 같은 기능
type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;
