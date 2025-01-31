import axios from "./node_modules/axios/index";

type GetResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

(async () => {
  try {
    const { data } = await axios.get<GetResponse>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    data.id;

    const postData = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title: "foo", body: "bar", userId: 1 }
    );
    postData.data; // any
    postData.status; // num
  } catch (e) {}
})();
