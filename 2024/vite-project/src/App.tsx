import { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Todo from "./types";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef<number>(0);

  const add = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };

  const onClieDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>to do list</h1>
      <Editor callback={add} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClieDelete={onClieDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
