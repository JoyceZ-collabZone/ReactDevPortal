import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { createUserCall } from "../api";
import { useForm } from "../utils/useForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    // backgroundColor: theme.white,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    font: "white",
    border: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CreateUser(props) {
  const classes = useStyles();

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const { userInput, captureUserInput } = useForm(initialState);
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  // const captureUserInput = (event) => {
  //   const name = event.currentTarget.name;
  //   const value = event.currentTarget.value;
  //   let inputObject = { ...userInput };
  //   inputObject[name] = value;
  //   setUserInput(inputObject);
  //   console.log("logging user name ", name, value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    userInput.role = role;
    createUserCall(userInput)
      .then((result) => {
        console.log("logging create user call response ", userInput);
        props.setScreenMessage({
          message: `User ${userInput.firstName} is successfully created`,
          state: true,
        });
      })
      .catch((error) => {
        console.log("logging error ", error);
        props.setScreenMessage({
          message: `User creation has failed, please try again`,
          state: false,
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs" className="formContainer">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {props.screenMessage &&
          props.screenMessage.message &&
          props.screenMessage.state && (
            <Alert severity="success">{props.screenMessage.message}</Alert>
          )}

        {props.screenMessage &&
          props.screenMessage.message &&
          !props.screenMessage.state && (
            <Alert severity="error">{props.screenMessage.message}</Alert>
          )}
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={captureUserInput}
                value={userInput.firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={captureUserInput}
                autoComplete="lname"
                value={userInput.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={captureUserInput}
                autoComplete="email"
                value={userInput.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={captureUserInput}
                autoComplete="current-password"
                value={userInput.password}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                name="role"
                label="User Role"
                id="role"
                onChange={captureUserInput}
                autoComplete="current-password"
              /> */}
              <FormControl className={classes.formControl}>
                <InputLabel id="role">User role</InputLabel>
                <Select
                  labelId="role"
                  id="role"
                  value={role}
                  onChange={handleChange}
                >
                  <MenuItem value="developer">developer</MenuItem>
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="staff">staff</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/user/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
