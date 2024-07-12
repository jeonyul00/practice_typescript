// 프로미스와 제네릭

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    reject("error"); // any
  }, 3000);
});

promise
  .then((response) => {
    console.log(response + 2);
  })
  .catch((error) => {
    console.log(error);
  });

// ---

interface Post {
  idx: number;
  title: string;
  content: string;
}

// 타입 선언 둘 중 하나만 해도 됨
function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        idx: 1,
        title: "title",
        content: "content",
      });
    }, 1500);
  });
}

const postRequest = fetchPost();
postRequest.then((value) => {
  console.log(value.idx);
});
