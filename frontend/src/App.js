import React, { useReducer } from "react";

import { StateContext, DispatchContext } from "./context";
import reducer from "./reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Drawer from "./components/Drawer";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Cart from "./components/Cart";
import About from "./components/About";
import NotFound from "./components/NotFound";

// ##### MATERIAL UI #####
import { Button } from "@material-ui/core";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Fragment } from "react";

function App() {
  const initialState = {
    cartQty: 0,
    drawerState: false,
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

  const CartButtons = () => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  return (
    <Router>
      <StateContext.Provider value={{ state }}>
        <DispatchContext.Provider value={{ dispatch }}>
          <div className="App">
            <ThemeProvider theme={theme}>
              {/* <AppBar state={state} /> */}
              {/* TODO: work on useReducer state */}
              <Nav />
              <Drawer />
              {/* <ItemsGrid /> */}
              <Switch>
                <Route exact path="/" component={Shop} />
                <Route path="/shop" component={Shop} />
                <Route path="/item" component={Item} />
                <Route path="/cart" component={Cart} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
              <CartButtons />
            </ThemeProvider>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Router>
  );
}

export default App;
