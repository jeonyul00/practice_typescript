// 유틸리티 타입

// Pick<T,K>
// 객체 타입으로부터 특정 프로퍼티만 골라냄
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

// Omit<T,K>
// 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
const noTitlePost: Omit<Post, "title" | "tags"> = {
  content: "",
};

// Record<K,V>
// 객체 타입을 만들어주는 유틸리티 타입
// 동일한 패턴을 가지는 타입을 쉽게 구현할 수 있다.
type ThumnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
