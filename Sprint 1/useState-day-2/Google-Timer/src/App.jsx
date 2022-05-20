import { useState } from "react";
import "./App.css";
import { Stopwatch } from "./components/Stopwatch";
import { Timer } from "./components/Timer";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <h1 className="heading">Google Timer</h1>
      <div className="App">
        <div className="button-box">
          <button onClick={() => setDisplay(true)}>Timer</button>
          <button onClick={() => setDisplay(false)}>Stopwatch</button>
        </div>
        {display ? (
          <div className="timer">
            <Timer />
          </div>
        ) : (
          <div className="stopwatch">
            <Stopwatch />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
