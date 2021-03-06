import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff350",
      main: "#ffc107",
      // main: green[500],
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
