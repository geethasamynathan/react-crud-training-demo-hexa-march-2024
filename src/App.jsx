import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./components/todoapp";
import Demo from "./components/demo";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Demo />
      <TodoApp />
    </>
  );
}

export default App;
