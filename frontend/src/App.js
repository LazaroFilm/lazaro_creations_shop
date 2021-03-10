import "./App.css";

import { Backdrop, Button, IconButton, Paper } from "@material-ui/core";
import { DispatchContext, StateContext } from "./context";
import React, { Fragment, useReducer } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";

import About from "./components/About";
import { Brightness4 as Brightness4Icon } from "@material-ui/icons";
import Cart from "./components/Cart";
import Drawer from "./components/Drawer";
import Item from "./components/Item";
// import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import reducer from "./reducer";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.appBar - 1,
    color: "#fff",
  },
}));

function App() {
  const classes = useStyles();

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
                    // component={Item}
                    render={() => (
                      <Fragment>
                        <Shop />
                        <Backdrop className={classes.backdrop} open={true}>
                          <Item />
                        </Backdrop>
                      </Fragment>
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
