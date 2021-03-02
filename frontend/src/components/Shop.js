import React, { useEffect, useState, useContext } from "react";
import { DispatchContext } from "../context";

// ##### MATERIAL UI #####
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  Tooltip,
  // Backdrop,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
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
  }

  // Executes useEffect upon page loading
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return data;
};

export default function TitlebarGridList() {
  const { dispatch } = useContext(DispatchContext);

  const tileData = useFetch(
    // "nothing"
    "https://lazaro-creations-shop.herokuapp.com/api/getItem"
  );
  const classes = useStyles();

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
                  <Tooltip title="add to cart">
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={() => {
                        dispatch({ type: "cart-increment" });
                      }}
                    >
                      <AddCircleIcon />
                    </IconButton>
                  </Tooltip>
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
