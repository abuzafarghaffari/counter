import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  // const [isActive,setIsActive] = useState(false)
  let timerRef = useRef();
  
  const handleStart = () => {
    setCount(count + 1);
    // setIsActive(true)
  };

  const handleStop = () => {
    clearTimeout(timerRef.current);
  };
  const handlereset = () => {
    setCount(0);
    clearTimeout(timerRef.current);
  };
  useEffect(() => {
    if (count) {
      timerRef.current = setTimeout(handleStart, 1500);
    }

    return () =>clearTimeout(timerRef.current)
  }, [count]);

  return (
    <div className="App">
      <h1>Let's start the counter</h1>
      <h3>{count}</h3>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
