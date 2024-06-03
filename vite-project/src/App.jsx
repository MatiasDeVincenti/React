import { useState } from "react";
import MiPrimerComponente from "./components/miPrimerComponente/MiPrimerComponente";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MiPrimerComponente />
    </>
  );
}

export default App;
