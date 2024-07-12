import Todo from "../types";

interface Props extends Todo {
  onClieDelete: (id: number) => void;
}

function TodoItem(props: Props) {
  const onClick = () => {
    props.onClieDelete(props.id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {props.id}: {props.content}
      <button onClick={onClick}>delete</button>
    </div>
  );
}

export default TodoItem;
