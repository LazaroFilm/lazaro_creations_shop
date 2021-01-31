import "./App.css";
import AppBar from "./AppBar";
import ItemsGrid from "./ItemsGrid";
import { useReducer } from "react";
import { Button } from "@material-ui/core";
import reducer from "./reducer";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

function App() {
  const initialState = {
    cartQty: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#fff350",
        main: "#ffc107",
        dark: "#c79100",
      },
      secondary: {
        light: "#757de8",
        main: "#3f51b5",
        dark: "#002984",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar state={state} />
        {/* <ItemDetails /> */}
        <ItemsGrid />
        {/* <ItemPrev /> */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "cart-increment" });
          }}
        >
          +
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch({ type: "cart-decrement" });
          }}
        >
          -
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
