import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Hello world {count}
      <Button setCount={setCount} />
    </>
  );
}

export default App;
