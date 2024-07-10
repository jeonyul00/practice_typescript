// 인덱스트 엑세스 타입
// 인덱스를 이용해 다른 타입 내의 특정 프로퍼티를 추출

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 저 인덱스 자리에 들어가는 건 값이 아니라 타입이다.
const printAuthorInfo = (author: PostList[number]["author"]) => {
  console.log(`${author.name}-${author.id}`);
};

const post: PostList[number] = {
  title: "제목",
  content: "내용",
  author: { id: 1, name: "jeonyul", age: 30 },
};

// -------------------------

type TTuple = [number, string, boolean];
type TTuple0 = TTuple[0];
type TTuple1 = TTuple[1];
type TTuple2 = TTuple[2];

type Tup = TTuple[number]; // string | number | boolean
