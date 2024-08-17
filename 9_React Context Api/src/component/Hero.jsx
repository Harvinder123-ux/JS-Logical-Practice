import React, { useContext } from "react";
import { counterContext } from "../Context/Context";

const Hero = () => {
  const { count, setCount } = useContext(counterContext);
  //   function handleInc() {
  //     setCount((count) => count + 1)
  //   }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>

    </div>
  );
};

export default Hero;
