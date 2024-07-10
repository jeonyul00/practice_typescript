// 서로소 유니온 타입 -> 교집합이 없는 타입들로 만든 유니온 타입
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Guest | Member;

// 아니 이걸 이따위로 해야된다고?
const login = (user: User) => {
  if ("kickCount" in user) {
    console.log("어드민", user.kickCount);
  } else if ("point" in user) {
    console.log("멤버", user.point);
  } else if ("visitCount" in user) {
    console.log("게스트", user.visitCount);
  }
};
// 이렇게 태그를 하나 추가해서 이러면 되겠다
const login2 = (user: User) => {
  switch (user.tag) {
    case "ADMIN":
      console.log("어드민", user.kickCount);
      break;
    case "MEMBER":
      console.log("멤버", user.point);
      break;
    case "GUEST":
      console.log("게스트", user.visitCount);
      break;
  }
};

const loading: AsyncTask = {
  state: "loading",
};

const failed: AsyncTask = {
  state: "failed",
  error: {
    msg: "this is error",
  },
};

const success: AsyncTask = {
  state: "success",
  response: {
    data: "this is data",
  },
};

type AsyncTask = {
  state: "loading" | "failed" | "success";
  error?: { msg: string };
  response?: { data: string };
};

const process = (task: AsyncTask) => {
  switch (task.state) {
    case "loading":
      break;
    case "failed":
      break;
    case "success":
      break;
  }
};
