# Style

## ThemeProvider

ThemeProvider will give all components inside access to your custom theme.

```html
<ThemeProvider theme="{theme}">
  // all the items here will use your theme
</ThemeProvider>
```

## MakeStyle

This allows to add styles to certain elements without changing the entire theme.

### Theme breakpoint

To style something depending on breakpoints
In the example below, the button's background color is set to blue if the
viewport is smaller than `sm` otherwise it's red

```js
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  background: black
  button: {
    backgroundColor: "red",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "blue"
    }
  }
}));
// then in your element return:
const classes = useStyles;
//then in your element to style:
<Button className={classes.button} color={primary}>
```

## Palette

You can change the palette from light to dark.

```JS
// in your theme:
palette: {
  type: "dark"
}
```

# Grid

You can use a grid divided into 12 segments that and allocate a grid element to
any number of segments.
