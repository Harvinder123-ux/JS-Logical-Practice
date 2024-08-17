import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { counterContext } from "./Context/Context";
import Hero from "./component/Hero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Hero />
      </counterContext.Provider>
    </>
  );
}

export default App;
