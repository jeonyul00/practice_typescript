// 객체 타입을 정의하는 또 하나의 방법 : 서로소 유니온 타입
// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입 : ex) string|number
type Admin = {
  tag: "admin";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "member";
  name: string;
  point: number;
};
type Guest = {
  tag: "guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 그런데 문제는 이 코드를 내가 아니라 다른 누군가가 보았다고 생각해보세요.
// 가독성이 거지같죠? : 이럴 때 서로소 유닛을 쓰면 됩니다. => tag라는 프로퍼티를 추가하고 값을 직접 할당(리터럴 타입)하여 분기처리 합니다. => 이러면 서로소 관계가 된다

// const signIn = (user: User) => {
//   if ("kickCount" in user) {
//     console.log("admin");
//     return;
//   }

//   if ("point" in user) {
//     console.log("member");
//     return;
//   }

//   console.log("guest");
// };

// 이것도 별로면 swich case
const signIn = (user: User) => {
  const userTag = user.tag;
  if (userTag === "admin") {
    console.log("admin");
    return;
  }
  if (userTag === "member") {
    console.log("member");
    return;
  }
  console.log("guest");
};

// --------------------

// 응용
// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중");
      break;
    case "FAILED":
      console.log("에러 발생 ::: ", task.error.message);
      break;
    case "SUCCESS":
      console.log("성공 ::: ", task.response.data);
      break;
  }
};

const loading = {
  state: "LOADING",
};
const failed = {
  state: "FAILED",
  error: {
    message: "error code is 404",
  },
};
const success = {
  state: "SUCCESS",
  response: {
    data: "data",
  },
};
