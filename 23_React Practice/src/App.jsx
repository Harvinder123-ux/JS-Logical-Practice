import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import { counter } from '../redux/store'

import {
  increment,
  decrement,
  multiply,
  incrementByVal,
} from "../redux/counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0)
  // const {increment, decrement, multiply, incrementByVal} = counter.actions;
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
     <div>
        <h1>{count}</h1>
        {/* here we are dispatching the action */}
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(multiply())}>multiply</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>increment by amount</button>
      </div>
    </>
  );
}

export default App;
