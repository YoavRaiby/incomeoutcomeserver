import './App.css'
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [hidden, setHiddem] = useState(true);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  function addToArr() {
    setArr([...arr, (arr.at(-1) + 1)]);
  }


  return (
    <>

      {hidden && <h1>Hello {num}</h1>}

      <button onClick={() => setNum(num + 1)}>click</button>
      <button onClick={() => setHiddem(!hidden)}>{hidden ? 'Hide' : 'Show'}</button>
      <button onClick={addToArr}>add</button>
      {arr.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </>
  )
}

export default App