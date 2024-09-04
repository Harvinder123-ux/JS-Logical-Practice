import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './redux/counter/counterSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count }</h1>
      <div className="card">
        <button onClick={() => dispatch((increment()))}>
          increment
        </button>
        <button onClick={() => dispatch((decrement()))}>
          decrement
        </button>
        <button onClick={() => dispatch((multiply()))}>
          Multiply
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
