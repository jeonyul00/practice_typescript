import React from "react";
import { ITodo } from "../types";

interface Props extends ITodo {
  onClickDelete: (id: number) => void;
}

function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}. {props.content}
      <button onClick={onClickButton}>delete</button>
    </div>
  );
}

export default TodoItem;
