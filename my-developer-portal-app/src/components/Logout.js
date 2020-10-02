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

import Alert from "@material-ui/lab/Alert";

export default function Logout(props) {
  return (
    <div class="logoutMessage">
      {props.screenMessage &&
        props.screenMessage.message &&
        props.screenMessage.state && (
          <Alert severity="success">{props.screenMessage.message}</Alert>
        )}
    </div>
  );
}
