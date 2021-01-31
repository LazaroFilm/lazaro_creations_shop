import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
  Backdrop,
} from "@material-ui/core";
// import InfoIcon from "@material-ui/icons/Info";
import AddCircleIcon from "@material-ui/icons/AddCircle";
// import tileData from "./tileData";
import ItemPrev from "./ItemPrev";
// import image from "./pro_level.jpg";

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

const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    await fetch(url)
      .then((item) => item.json())
      .then((res) => setData(res.item));
    console.log(data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return data;
};

export default function TitlebarGridList() {
  const tileData = useFetch("http://localhost:3001/api/getItem");
  const classes = useStyles();

  // Open/Close the backdrop
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  if (tileData) {
    console.log(tileData);
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">
              3D printed camera accessories for Steadicam and camera operators
            </ListSubheader>
          </GridListTile>
          {tileData.map((tile) => (
            <GridListTile key={tile.title}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                    onClick={handleToggle}
                  >
                    <AddCircleIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <ItemPrev />
        </Backdrop>
      </div>
    );
  } else {
    return <div>loading...</div>;
  }
}
