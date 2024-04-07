import { useEffect } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  useEffect(() => {
    type theme = "dark" | "light";

    const themeMode = localStorage.getItem("theme") as theme;

    console.log(themeMode);
  }, []);

  return (
    <Button value={5} valueList={[1, 2, 3, 4]}>
      Bhn
    </Button>
  );
}

export default App;
