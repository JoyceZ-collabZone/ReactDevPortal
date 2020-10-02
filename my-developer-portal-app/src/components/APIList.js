import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { RedocStandalone } from "redoc";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// import {
//   Card,
//   CardFooter,
//   Button,
//   CardTitle,
//   CardText,
//   Row,
//   Col,
// } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function APIList(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();
  const params = useParams();
  console.log("logging params in API list", params);

  console.log("button", buttonClicked);
  // const navigateTo = (swaggerId, swagger) => {
  //   console.log("logging swagger ", swagger);
  //   history.push({
  //     pathname: `/APIMetadata/${swaggerId}`,
  //     state: { swagger },
  //   });
  // };

  return (
    <div className={classes.root}>
      <Alert severity="success">Welcome to my api portal</Alert>
      <Grid container spacing={5}>
        {props.metadataStateProperty.map((eachAPI) => {
          return (
            <Grid item xs={6}>
              <Card
                className={classes.root}
                variant="outlined"
                key={eachAPI._id}
                body
              >
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Category: {eachAPI.category}
                  </Typography>
                  <Typography variant="h7" component="h7">
                    Scope: {eachAPI.scope}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description: {eachAPI.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/APIMetadata/${eachAPI._id}`}>
                    <Button> Swagger Definition</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
