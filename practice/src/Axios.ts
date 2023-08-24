import axios from "axios";

const func = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {}
};

func();
