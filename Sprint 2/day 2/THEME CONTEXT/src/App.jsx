import { useContext } from "react";
import "./App.css"
import { Button } from "./components/Button";
import { ThemeContext } from "./Context/ThemeContextProvider";

function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Button text={theme === "light" ? "Dark" : "Light"} />
    </div>
  );
}

export default App;
