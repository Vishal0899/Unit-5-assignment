import { useEffect, useRef, useState } from "react";

import "./Stopwatch.css";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  const timer = useRef(null);

  useEffect(
    (timer) => {
      if (timerOn) {
        timer = setInterval(() => {
          setTime((prev) => prev + 10);
        }, 10);
      } else if (!timerOn) {
        clearInterval(timer);
      }
      return () => {
        clearInterval(timer);
      };
    },
    [timerOn]
  );

  const handleStart = () => {
    setTimeOn(true);
  };

  const handleReset = () => {
    setTime(0);
    setTimeOn(false);
  };

  const handleStop = () => {
    setTimeOn(false);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div ref={timer} className="time">
        <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2)} h :</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} m :</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} s :</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)} ms</span>
      </div>
      <div className="stopwatch-btn">
        <button className="start" onClick={handleStart}>
          START
        </button>
        <button className="stop" onClick={handleStop}>
          STOP
        </button>
        <button className="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
};
