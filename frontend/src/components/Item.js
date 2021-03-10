import "./Item.css";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import React from "react";
import image from "../images/pro_level.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 845,
    // display: "flex",
  },
  media: {
    height: 340,
  },
});

export default function Item(item) {
  const classes = useStyles();

  return (
    // <Backdrop className={classes.backdrop} open="open">
    <Card
      className={classes.root}
      onClick={console.log("You clicked on a Card")}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pro Level
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Make balancing your camera a breeze
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={console.log(`like ${item}`)}
        >
          Like
        </Button>
        <Button size="small" color="secondary">
          Buy
        </Button>
      </CardActions>
    </Card>
    // </Backdrop>
  );
}
