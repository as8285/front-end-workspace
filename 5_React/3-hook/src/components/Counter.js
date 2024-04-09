import { useState, useEffect } from "react";

const Btn = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
};
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };

  // 카운터가 바뀌는 시점도 찾는다 userEffect
  console.log("always!!!@!@");
  useEffect(() => {
    console.log("useEffect!");
  }, []);
  useLayoutEffect(() => {
    console.log("counter change~");
  }, [counter]);
  return (
    <>
      <h1>Total Clicks : {counter}</h1>
      <Btn click={plus} text="+1" />
      <Btn click={minus} text="-1" />
      <button onClick={minus}>Click!</button>
    </>
  );
};

export default Counter;
