import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    type theme = "dark" | "light";

    const themeMode = localStorage.getItem("theme") as theme;

    console.log(themeMode);
  }, []);

  return <>Hello world</>;
}

export default App;
