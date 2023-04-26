import React, {
  FC,
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface P {
  name: string;
  age: number;
}

// FunctionComponent === FC
const hook: FC<P> = (props) => {
  const [ex, setEx] = useState();
  const focus = useRef();

  useEffect(() => {}, []);

  const exFunc = useCallback(() => {}, []);

  return <div>hook</div>;
};

export default hook;
