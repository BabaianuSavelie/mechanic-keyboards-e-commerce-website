import { useState } from "react";

export const useCounter = (value: number) => {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    counter > 1 && setCounter((counter) => counter - 1);
  };

  return { counter, increment, decrement };
};
