import React, { useEffect, useState } from "react";
import "./Timer.css";

export const Timer = () => {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState(false);

  useEffect(() => {
    let secId = null;
    let minId = null;
    let hrId = null;
    if (time) {
      secId = setInterval(() => {
        if (sec <= 0) {
          setSec(0);
        } else {
          setSec((prev) => prev - 1);
        }
        if (sec < 0) {
          clearInterval(secId);
        }
      }, 1000);
    }
    if (sec === 0 && min !== 0) {
      clearInterval(secId);
      minId = setInterval(() => {
        setMin((prev) => prev - 1);
        if (min === 0) {
          clearInterval(minId);
        } else {
          setSec(60);
        }
      }, 1000);
    }
    if (min === 0 && hr !== 0) {
      hrId = setInterval(() => {
        setHr((prev) => prev - 1);
        if (hr === 0) {
          clearInterval(hrId);
        } else {
          setMin(60);
        }
      }, 1000);
    }
    if (hr === 0) {
      clearInterval(hrId);
    }
    if (hr === 0 && min === 0 && sec === 0) {
      clearInterval(hr);
      clearInterval(min);
      clearInterval(sec);
    }
    return () => {
      clearInterval(secId);
      clearInterval(minId);
      clearInterval(hrId);
    };
  }, [hr, min, sec, time]);
  const handleStart = () => {
    setTime(true);
  };
  const handleReset = () => {
    setHr(0);
    setMin(0);
    setSec(0);
    setTime(false);
  };

  const handleStop = () => {
    setTime(false);
  };
  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="timer-input">
        <input
          type="number"
          value={hr}
          onChange={(e) => setHr(e.target.value)}
        />
        hr:
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        min:
        <input
          type="number"
          value={sec}
          onChange={(e) => setSec(e.target.value)}
        />
        sec
      </div>
      <div className="timer-btn">
        <button onClick={handleStart} className="start">
          Start
        </button>
        <button onClick={handleStop} className="stop">
          Stop
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};
