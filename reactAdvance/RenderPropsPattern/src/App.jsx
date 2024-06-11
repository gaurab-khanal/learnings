import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./component/Input";

function App() {
  const [count, setCount] = useState(0);

  const showValue = (value) => <>The value is {value}</>;
  const multiplyValue = (value) => (
    <>The multiplied is {parseInt(value) * 10 || ""}</>
  );

  return (
    <div className="App">
      <Input renderTextBelow={showValue} />
      <br />
      <Input renderTextBelow={multiplyValue} />
    </div>
  );
}

export default App;
