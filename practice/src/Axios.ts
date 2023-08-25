import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Create {}
interface Data {
  title: string;
  body: string;
  userId: number;
}

const func = async () => {
  try {
    // const reponse2 = await axios.post<Create, AxiosResponse<Create>, Data>(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   { title: "foo", body: "bar", userId: 1 }
    // );
    const response = await axios.get<Post>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        (error as AxiosError<{ message: string }>).response?.data.message
      );
    }
  }
};

func();
