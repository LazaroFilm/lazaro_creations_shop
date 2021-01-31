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
import image from "./pro_level.jpg";

const useStyles = makeStyles({
  root: {
    width: 845,
  },
  media: {
    height: 340,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
        <Button size="small" color="secondary">
          Like
        </Button>
        <Button size="small" color="secondary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
