import { useState } from "react";

interface Props {
  callback: (str: string) => void;
}

export default function Editor({ callback }: Props) {
  const [text, setText] = useState<string>("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClick = () => {
    if (text === "") return;
    callback(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClick}>add</button>
    </div>
  );
}
