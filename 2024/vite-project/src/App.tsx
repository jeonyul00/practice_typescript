import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const add = () => {
    if (text === "") return;
  };

  return (
    <div className="App">
      <h1>to do list</h1>
      <input value={text} onChange={onChangeInput} />
      <button onClick={add}>add</button>
    </div>
  );
}

export default App;
