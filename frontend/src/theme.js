// import { useContext } from "react";
// import { createMuiTheme } from "@material-ui/core/styles";
// import { StateContext } from "./context";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

// const { state } = useContext(StateContext);
const theme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
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

export default theme;
