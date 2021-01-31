import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Fab from "@material-ui/core/Fab";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
import ItemPrev from "./ItemPrev";
// import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ItemPrev />
      </Backdrop>
    </div>
  );
}
