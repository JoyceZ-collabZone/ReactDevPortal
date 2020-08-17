import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { userSubmitSigninHandler } from "../api";
import jwt from "jwt-decode";
import moment from "moment";
// import { ErrorDisplay } from "./ErrorPage";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
// user login form,

export function LoginHomePage(props) {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const [username, captureUserNameEntered] = useState("");
  const [password, capturePasswordEntered] = useState("");
  const [profile, captureProfileEntered] = useState("");
  const [errorMessage, setErrormessage] = useState("");

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    // call the login function
    userSubmitSigninHandler({
      username: username,
      password: password,
      profile: profile,
    })
      .then((extractedTokenReturned) => {
        console.log(
          "logging token in login api response ",
          extractedTokenReturned
        );

        const decodedToken = jwt(extractedTokenReturned);
        console.log("decoded token", decodedToken);
        const tokenExpiryDateTime = moment.unix(decodedToken.exp);
        console.log("token expires at ", tokenExpiryDateTime);
        const isTokenActive = moment().isBefore(tokenExpiryDateTime);
        console.log("isTokenActive", isTokenActive);
        localStorage.setItem("token", extractedTokenReturned);
        props.loginStateChangeProperty(true);
        history.push("/APIMetadata");
      })
      .catch((error) => {
        console.log("logging error", error);
        setErrormessage("Please try again");
        // return <ErrorDisplay errorMessage={error} />;
      });
  };
  return (
    <>
      {errorMessage.length > 0 && <h1>{errorMessage}</h1>}

      <Form onSubmit={handleUserFormSubmit} className="formContainer">
        {/* <FormGroup>
        <Label>Sign in</Label>
      </FormGroup> */}
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            onChange={(e) => captureUserNameEntered(e.currentTarget.value)}
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => capturePasswordEntered(e.currentTarget.value)}
            value={password}
          />
        </FormGroup>

        <FormGroup>
          <Label for="profile">Profile</Label>
          <Input
            type="text"
            name="profile"
            onChange={(e) => captureProfileEntered(e.currentTarget.value)}
            value={profile}
          ></Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> I agree to the terms and conditions and
            the privacy policy
          </Label>
        </FormGroup>
        <button
          type="submit"
          value="Submit"
          className="btn btn-small btn-success"
        >
          Submit
        </button>
      </Form>
    </>
  );
}
