import axios, { Axios, AxiosError, AxiosResponse, isAxiosError } from "axios";

interface Post {
  userId: number;
  number: number;
  title: string;
}

(async () => {
  try {
    const value = await axios.get<Post>(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    value.data.title;
    value.data.userId;
  } catch (e) {
    // axios 에러 뿐 아니라 다른 에러가 걸릴 수 있다.
    const error = (e as AxiosError).response;
    console.log(error?.data);
  }
  //   --
  try {
    const value2 = await axios.post<Post>(
      "https://jsonplaceholder.typicode.com/todos/1",
      { title: "foo", body: "bar", userId: 1 }
    );
    value2.data.title;
    value2.data.userId;
  } catch (error) {
    if (isAxiosError(error)) {
      //   const e = (error as AxiosError).response?.data;
      console.log(
        (error.response as AxiosResponse<{ message: string }>)?.data.message
      );
    }
  }
})();
