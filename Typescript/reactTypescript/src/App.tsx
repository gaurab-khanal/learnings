import "./App.css";
import Card from "./Card";

function App() {
  const fnc = () => {
    return "hello";
  };

  return (
    <>
      Hello world
      <Card style={{ height: "200px", backgroundColor: "red" }} />
    </>
  );
}

export default App;
