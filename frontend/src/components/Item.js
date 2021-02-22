import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import image from "../images/pro_level.jpg";

const useStyles = makeStyles({
  root: {
    width: 845,
  },
  media: {
    height: 340,
  },
});

export default function MediaCard(item) {
  const classes = useStyles();

  return (
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
  );
}
