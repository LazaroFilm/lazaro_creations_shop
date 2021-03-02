import React, { useContext } from "react";
import { DispatchContext, StateContext } from "../context";

// ##### MATERIAL UI #####
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();

  const { state } = useContext(StateContext);
  const { dispatch } = useContext(DispatchContext);
  // const [drawer, setDrawer] = useState(false);

  // const toggleDrawer = (state) => (event) => {
  //   setDrawer(state);
  // };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => {
        dispatch({ type: "close-drawer" });
      }}
      // onClick={toggleDrawer(false)}
    >
      <List>
        {["All"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <PlayArrowIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Steadicam", "Camera", "Cable clips", "Power", "Focus"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <PlayArrowOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        {/* <Button
          onClick={() => {
            dispatch({ type: "open-drawer" });
          }}
        >
          left
        </Button> */}
        <Drawer
          anchor="left"
          open={state.drawerState}
          // onClose={toggleDrawer(false)
          onClose={() => {
            dispatch({ type: "close-drawer" });
          }}
        >
          {list("left")}
          {/* LIST HERE */}
        </Drawer>
      </React.Fragment>
    </div>
  );
}