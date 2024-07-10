// promise

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("errorerrorerrorerrorerrorerrorerrorerrorerror");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});
promise.catch((err) => {
  console.log(err);
});

// ----- promise 반환 -----

interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "test Title",
        content: "test Content",
      });
    }, 3000);
  });
};

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
});
