import { DispatchContext, StateContext } from "../context";
import {
  Divider,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  PlayArrow as PlayArrowIcon,
  PlayArrowOutlined as PlayArrowOutlinedIcon,
} from "@material-ui/icons";
import React, { useContext } from "react";

import List from "@material-ui/core/List";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function LeftDrawer() {
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
