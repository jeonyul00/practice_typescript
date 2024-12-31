// 서로소 유니온 => 교집합이 없는 타입으로 만든 유니온 타입

type Admin = {
  name: string;
  kickCount: number;
  tag: "admin";
};

type Member = {
  name: string;
  point: number;
  tag: "member";
};

type Guest = {
  name: string;
  visitCount: number;
  tag: "guest";
};

type User = Admin | Member | Guest;

// x
function login(user: User) {
  if ("kickCount" in user) {
    console.log("admin");
  } else if ("point" in user) {
    console.log("member");
  } else {
    console.log("guest");
  }
}

// o
function login2(user: User) {
  switch (user.tag) {
    case "admin":
      console.log("admin");
    case "member":
      console.log("member");
    case "guest":
      console.log("guest");
  }
}
