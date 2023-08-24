import React, { ChangeEvent, useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

function Editor(Props: Props) {
  const [text, setText] = useState<string>("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    Props.onClickAdd(text);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

export default Editor;
