import React from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter((prev) => {
      return ++prev;
    });
  };

  const handleMinus = () => {
    setCounter((prev) => {
      return --prev;
    });
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
};

export default Counter;
