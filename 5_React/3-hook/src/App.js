import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const setCount = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  return (
    <>
      <Converter></Converter>
    </>
  );
};

export default App;
