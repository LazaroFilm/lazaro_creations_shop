import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  Tooltip,
  isWidthUp,
  withWidth,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

import { AddShoppingCart as AddShoppingCartIcon } from "@material-ui/icons";
import { DispatchContext } from "../context";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "90%",
    height: "auto",
  },
  GridListTile: {},
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000",
  },
}));

/** example data:
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

function Shop(props) {
  const { dispatch } = useContext(DispatchContext);
  const classes = useStyles();

  // fetches the data for the items.
  const tileData = useFetch(
    // "nothing"
    // store items are stored on Heroku.
    "https://lazaro-creations-shop.herokuapp.com/api/getItem"
  );

  // template for a single skeleton item when loading.
  const LoadingGridTile = () => {
    return (
      <GridListTile key={`loading`}>
        {/* //TODO: Design the skeletons for when the page is loading */}
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

  const cols = () => {
    // console.log(props.width);
    if (isWidthUp("xl", props.width)) {
      return 5;
    }
    if (isWidthUp("lg", props.width)) {
      return 4;
    }
    if (isWidthUp("md", props.width)) {
      return 3;
    }
    if (isWidthUp("sm", props.width)) {
      return 2;
    }
    return 1;
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={cols()}>
        <GridListTile key="Subheader" cols={cols()} style={{ height: "auto" }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {/* gets the tileData from Heroku and populate the shop following the
        design below */}
        {tileData ? (
          tileData.map((tile) => (
            <GridListTile key={tile.title} component={Link} to="/item">
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
                        // TODO: when you click here, it should open a new
                        // TODO: drawer on the right to select your options
                        // TODO: if you click on the rest of the image,
                        // TODO: it should overlay the more detailed product page.
                        dispatch({ type: "cart-increment" });
                      }}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                }
              />
            </GridListTile>
          ))
        ) : (
          // This gets loaded while the db data isn't ready.
          <div>
            <LoadingGridTile />
            <LoadingGridTile />
            <LoadingGridTile />
            <LoadingGridTile />
          </div>
        )}
      </GridList>
    </div>
  );
}

export default withWidth()(Shop);
