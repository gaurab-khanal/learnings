import "./App.css";
import Card from "./Card";

function App() {\


  const fnc = ()=>{
    return "hello"
  }

  return (
    <>
      Hello world
      <Card backgroundColor="blue" size="200px"  fnc={fnc}/>
    </>
  );
}

export default App;
