  import React, { useEffect, useState } from 'react'
  import './App.css'

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');

  },[count]);

  console.log('up');
  return (
    <div><button onClick={() => setCount(count+1)}>Add</button></div>
  )
}
