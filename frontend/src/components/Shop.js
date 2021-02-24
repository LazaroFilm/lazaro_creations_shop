import React, { useEffect, useState, useContext } from "react";
import { ReducerContext } from "../context";
import reducer from "../reducer";
// import { Link as RouterLink } from "react-router-dom";
// import tileData from "./tileData";
// import Item from "./Item";
// import pro_level from "./images/pro_level.jpg";

// ##### MATERIAL UI #####
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  // Backdrop,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // width: 900,
    justifyContent: "space-around",
    overflow: "hidden",
    // lg: 5,
    backgroundColor: theme.palette.background.paper,
    // backgroundcolor: "blue",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     description: 'description',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

// Fetches the JSON data from the server
const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    await fetch(url)
      .then((item) => item.json())
      .then((res) => setData(res.item));
    console.log(data);
  }

  // Executes useEffect upon page loading
  useEffect(() => {
    console.log(`fetching data`);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

export default function TitlebarGridList() {
  // const initialState = {
  //   cartQty: 0,
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  const { state, dispatch } = useContext(ReducerContext);

  const tileData = useFetch(
    // "nothing"
    "https://lazaro-creations-shop.herokuapp.com/api/getItem"
  );
  const classes = useStyles();

  // // Open/Close the backdrop
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   console.log("closing backdrop");
  //   setOpen(false);
  // };

  // const history = useHistory();

  // const handleItemClick = () => {
  //   history.push("/item");
  // };

  const LoadingGridTile = () => {
    return (
      <GridListTile key={`loading`}>
        {/* <Skeleton variant="text" />
              <Skeleton variant="circle" width={40} height={40} /> */}
        <Skeleton variant="rect" width={210} height={118} animation="wave" />
        <GridListTileBar
          title={<Skeleton variant="text" animation="wave" />}
          subtitle={<Skeleton variant="text" animation="wave" />}
          actionIcon={
            <Skeleton
              variant="circle"
              width={20}
              height={20}
              animation="wave"
            />
          }
        />
      </GridListTile>
    );
  };

  // if (tileData) {
  // console.log(tileData);
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData ? (
          tileData.map((tile) => (
            <GridListTile key={tile.title}>
              <img src={`/${tile.img}`} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    // component={RouterLink}
                    // to="/item"
                    //! WORKING ON REDUCER
                    onClick={() => {
                      console.log("adding to the cart from shop");
                      dispatch({ type: "cart-increment" });
                      console.log(state);
                    }}
                    // onClick={}
                  >
                    {/* <Link to="/item"> */}
                    <AddCircleIcon /> {/* </Link> */}
                  </IconButton>
                }
              />
            </GridListTile>
          ))
        ) : (
          <div>
            <LoadingGridTile />
            <LoadingGridTile />
            <LoadingGridTile />
            <LoadingGridTile />
          </div>
        )}
      </GridList>
      {/* <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ItemPrev />
      </Backdrop> */}
    </div>
  );
}
