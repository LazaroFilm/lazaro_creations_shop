import "./App.css";
import AppBar from "./AppBar";
import ItemPrev from "./ItemPrev";
import { useState } from "react";
import Button from "@material-ui/core/Button";

function App() {
  const [test, setTest] = useState(true);

  return (
    <div className="App">
      <AppBar />
      <header className="App-header">
        <ItemPrev />
        <p>Then let's see how this works: {test ? "All Good" : "Oh No"}</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTest(test ? false : true);
          }}
        >
          click me
        </Button>
      </header>
    </div>
  );
}

export default App;
