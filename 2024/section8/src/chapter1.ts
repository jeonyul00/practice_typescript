// 타입 조작
/* 
제네릭
인덱스드 엑세스 타입: 객체 배열 튜플에서 특정 프로퍼티 혹은 요소의 타입을 추출
key of: 특정 객체 타입으로부터 프로퍼티 키들을 모두 스트링 리터럴 유니온 타입으로 추출하는 연산자
Mapped: 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
템플릿리터럴: 스트링 리터럴 타입을 기반으로 정해진 패턴의 문자열만 포함하는 타입
조건부
*/

// 인덱스드 엑세스 타입
interface Post {
  title: string;
  content: string;
  author: {
    idx: number;
    name: string;
  };
}

// Post["author"] 이렇게 타입을 가져오네 -> "author"는 값이 아니라 타입임 -> 오 중첩도 가능
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}: ${author.idx}`);
}

const post: Post = {
  title: "게시글",
  content: "내용",
  author: {
    idx: 1,
    name: "이름",
  },
};

// --
type PostList = {
  title: string;
  content: string;
  author: {
    idx: number;
    name: string;
  };
}[];

const postList: PostList[number] = {
  title: "게시글",
  content: "내용",
  author: {
    idx: 1,
    name: "이름",
  },
};
