import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import jwt from "jwt-decode";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import { SignInCall, updateHeaderOptions } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  image: {
    // backgroundImage: "url(../images/SignInPage.jpg)",
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[50]
    //     : theme.palette.grey[900],
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function UserLogin(props) {
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  let history = useHistory();

  const updateData = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    let object = { ...formData };
    object[name] = value;
    setFormData(object);
    console.log("step 1: logging browser form user input ", object);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("step 2: logging browser submit event ", formData);

    SignInCall(formData)
      .then((token) => {
        console.log(
          "step 3a: logging browser trigger fetch api all to node.js in user route/success",
          token
        );
        const decodedToken = jwt(token);
        console.log("decoded token", decodedToken);
        const tokenExpiryDateTime = moment.unix(decodedToken.exp);
        const userRole = decodedToken.role;
        console.log("logging user role ", userRole);
        console.log("token expires at ", tokenExpiryDateTime);
        const isTokenActive = moment().isBefore(tokenExpiryDateTime);
        console.log("isTokenActive", isTokenActive);
        console.log(
          "step 4a: setScreenMessage logging in user login route ",
          props.screenMessage
        );
        window.sessionStorage.setItem("token", token);
        window.sessionStorage.setItem("userRole", userRole);
        // updateHeaderOptions();
        console.log(
          "step 5: token in browser login response react route ",
          token
        );
        props.loggedInState(true);
        props.userRole(userRole);
        props.loggedInUser(decodedToken);
        props.setScreenMessageSignIn({
          message: `You have successfully logged in as "${userRole}"`,
          state: true,
        });
        // history.push("/APIMetadata");
      })
      .catch((error) => {
        props.setScreenMessageSignIn({
          message: "User login has failed, please try again",
          state: false,
        });

        console.log(
          "step 7b: logging frontend signIn response in react user route/error",
          error
        );
      });
  };
  return (
    // {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className="centered"
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {props.screenMessageSignIn &&
            props.screenMessageSignIn.message &&
            props.screenMessageSignIn.state && (
              <Alert severity="success">
                {props.screenMessageSignIn.message}
              </Alert>
            )}

          {props.screenMessageSignIn &&
            props.screenMessageSignIn.message &&
            !props.screenMessageSignIn.state && (
              <Alert severity="error">
                {props.screenMessageSignIn.message}
              </Alert>
            )}

          <form className={classes.form} noValidate onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={updateData}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={updateData}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link to="/register/user/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
