// import React, {
//   FC,
//   FunctionComponent,
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// interface P {
//   name: string;
//   age: number;
// }

// // FunctionComponent === FC
// const hook: FC<P> = (props) => {
//   const [ex, setEx] = useState();
//   const focus = useRef();

//   useEffect(() => {}, []);

//   const exFunc = useCallback(() => {}, []);

//   return <div>hook</div>;
// };

// export default hook;
import * as React from "react";
import { useState, useCallback, useRef, useEffect } from "react";

const WordRelay: React.FC = () => {
  const [word, setWord] = useState("yul");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
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

  const onChange = useCallback((e) => {
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
