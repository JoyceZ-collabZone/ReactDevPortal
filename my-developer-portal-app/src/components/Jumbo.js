import React, { useState, useEffect } from "react";
import homeImage from "../assets/risks-and-benefits-of-open-banking.jpg";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: 0,
    maxHeight: "100%",
  },
});

function Jumbo() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="jumboPage">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="OB"
            height="400"
            image={homeImage}
            title="Open banking"
          />
        </CardActionArea>
      </Card>
      <Card className={"jumboHeight"}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
            WELCOME TO MY DEVELOPER PORTAL
          </Typography>
          <Typography variant="span" color="textSecondary" component="h2">
            Our strong API foundations have given us an ability to deliver great
            customer experiences and we now want you to benefit from our API as
            well. We can’t wait to see what you create!
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="large" color="primary">
            <Link to="/user/login"> Sign in</Link>
          </Button>
          <Button
            size="large"
            color="primary"
            href="https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0"
            target="_blank"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default Jumbo;
