import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";

import { RedocStandalone } from "redoc";
import Logout from "./Logout";

// import { UserListingPage } from "./UserContainer";

export default function Nav(props) {
  const handleUserClickLogout = () => {
    window.sessionStorage.removeItem("token");
    props.loggedInState(false); // set loggedin to false
    props.loggedInUser("");
    props.setScreenMessage({
      message: `You have successfully logged out`,
      state: true,
    });
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/home">
        <Button variant="contained" color="secondary">
          Home
        </Button>
      </Link>
      <Link to="/register/user">
        <Button variant="contained" color="secondary">
          User Signup
        </Button>
      </Link>
      <Link to="/user/login">
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Link>
      <Link to="/docupload">
        <Button variant="contained" color="secondary">
          Upload Swagger
        </Button>
      </Link>

      <Link to="/software/new">
        <Button variant="contained" color="secondary">
          Software Product Registration
        </Button>
      </Link>
      <Link to="/softwares/all">
        <Button variant="contained" color="secondary">
          View All Software Product
        </Button>
      </Link>

      {/* <NavLink tag={Link} to="/APIMetadata/5f2e06043a8c4409ecff1407">
        <Button color="success"> Public API</Button>
      </NavLink> */}
      {props.loggedInState && (
        <Link to="/APIMetadata/">
          <Button variant="contained" color="secondary">
            API Swagger Definition
          </Button>
        </Link>
      )}
      {props.loggedInState && (
        <Link to="/logout" onClick={handleUserClickLogout}>
          <Button variant="contained" color="secondary">
            Logout
          </Button>
        </Link>
      )}
    </Breadcrumbs>
  );
}
