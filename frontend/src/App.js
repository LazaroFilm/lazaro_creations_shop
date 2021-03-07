import React, { useReducer, Fragment } from "react";

import { StateContext, DispatchContext } from "./context";
import reducer from "./reducer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import theme from "./theme";
import Nav from "./components/Nav";
import Drawer from "./components/Drawer";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Cart from "./components/Cart";
import About from "./components/About";
import NotFound from "./components/NotFound";

// ##### MATERIAL UI #####
import { Backdrop, Button, IconButton, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";

function App() {
  const initialState = {
    cartQty: 0,
    drawerState: false,
    darkMode: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const CartButtons = () => {
    return (
      <Fragment>
        <Button
          aria-label="cart +1"
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch({ type: "cart-increment" });
          }}
        >
          +
        </Button>
        <Button
          aria-label="cart -1"
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch({ type: "cart-decrement" });
          }}
        >
          -
        </Button>
        <IconButton
          aria-label="dark mode toggle"
          onClick={() => {
            dispatch({ type: "dark-mode-toggle" });
          }}
        >
          <Brightness4Icon />
        </IconButton>
      </Fragment>
    );
  };

  return (
    <Router>
      <StateContext.Provider value={{ state }}>
        <DispatchContext.Provider value={{ dispatch }}>
          <div className="App">
            <ThemeProvider theme={theme(state.darkMode)}>
              <Nav />
              <Paper style={{ height: "100vh" }}>
                <Drawer />
                <Switch>
                  <Route exact path="/" component={Shop} />
                  <Route
                    path="/item"
                    render={() => (
                      <Backdrop open={true}>
                        <Item />
                      </Backdrop>
                    )}
                  />
                  <Route path="/shop" component={Shop} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/about" component={About} />
                  <Route component={NotFound} />
                </Switch>
                <CartButtons />
              </Paper>
            </ThemeProvider>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </Router>
  );
}

export default App;
