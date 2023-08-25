import * as React from "react";
import { useState, useCallback, useRef, useEffect } from "react";

interface P {
  name: string;
  title: string;
}

// Jsx.Element vs React.Fc : https://medium.com/@RobertoSilvaZ/when-should-i-use-jsx-element-or-react-fc-29e61eb1e754 : 상황에 따라 쓴다.
const WordRelay: React.FC<P> = (props) => {
  const [word, setWord] = useState<string>("쿵쿵따");
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult("딩동댕");
        setWord(value);
        setValue("");
        if (input) {
          input.focus();
        }
      } else {
        setResult("땡");
        setValue("");
        if (input) {
          input.focus();
        }
      }
    },
    [word, value]
  );

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
