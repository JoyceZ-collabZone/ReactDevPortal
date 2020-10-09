import React, { useState, useEffect } from "react";
import { withRouter, useParams } from "react-router-dom";
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
// import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from "react-dropzone-uploader";

import { call_uploadFile } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    width: "60%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
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

function CreateSwagger() {
  const classes = useStyles();
  const [formData, setFormData] = useState({});
  const [fileData, setFileData] = useState({});
  const [screenMessageUpload, setScreenMessageUpload] = useState({
    message: "",
    state: false,
  });

  //   let history = useHistory();

  const updateData = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    let object = { ...formData };
    object[name] = value;
    setFormData(object);
    console.log(
      "step 1: logging browser form user input in swagger creation ",
      object
    );
  };

  const onFileChange = (e) => {
    console.log("logging file name ", e.target.files[0]);
    setFileData(e.target.files[0]);
    console.log("logging file data", setFileData);
    // formData.append("description", "good time");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    console.log("logging file data ", fileData);

    data.append("fileUpload", fileData);
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("scope", formData.scope);
    data.append("category", formData.category);
    data.append("permission", formData.permission);

    console.log("logging  data ", data);
    console.log("form state logging", formData);

    call_uploadFile(data)
      .then((result) => {
        setScreenMessageUpload({
          message: `Document ${formData.name} is successfully upload`,
          state: true,
        });
        console.log(
          "logging browser trigger fetch api all to node.js in createSwagger route/success",
          result
        );
      })
      .catch((error) => {
        setScreenMessageUpload({
          message: `Document ${formData.name} is failed uploading`,
          state: false,
        });
        console.log(
          "step 2b: logging frontend signIn response in react user route/error",
          error
        );
      });
  };

  return (
    // {errorMessage.length > 0 && <h1>{errorMessage}</h1>}
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Swagger Metadata
          </Typography>

          {screenMessageUpload.message && screenMessageUpload.state && (
            <Alert severity="success">{screenMessageUpload.message}</Alert>
          )}

          {screenMessageUpload.message && !screenMessageUpload.state && (
            <Alert severity="error">{screenMessageUpload.message}</Alert>
          )}

          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={updateData}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="description"
              type="description"
              id="description"
              autoComplete="description"
              onChange={updateData}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="scope"
              label="scope"
              type="scope"
              id="scope"
              autoComplete="scope"
              onChange={updateData}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="category"
              label="category"
              type="category"
              id="category"
              autoComplete="category"
              onChange={updateData}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="permission"
              label="permission"
              type="permission"
              id="permission"
              autoComplete="permission"
              onChange={updateData}
            />
            <input type="file" name="inputFile" onChange={onFileChange} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Upload Swagger Definition
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default CreateSwagger;
