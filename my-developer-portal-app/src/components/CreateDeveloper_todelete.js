import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

export function CreateDev(props) {
  const [username, setUserName] = useState(props.addDevResult.username);
  const [password, setPassword] = useState(props.addDevResult.password);
  const [profile, setProfile] = useState(props.addDevResult.profile);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitHandler({
      username: username,
      password: password,
      profile: profile,
    });

    setUserName("");
    setPassword("");
    setProfile("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="formContainer">
        <h2 className="titleColour">{props.pageTitle}</h2>
        {props.successMessage && (
          <Alert variant="success">{props.successMessage}</Alert>
        )}
        <FormGroup>
          <Label>User Name</Label>
          <Input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password </Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label>Profile </Label>
          <Input
            type="text"
            name="profile"
            onChange={(e) => setProfile(e.currentTarget.value)}
            value={profile}
          />
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
