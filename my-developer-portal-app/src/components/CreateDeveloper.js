import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
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
      <Form onSubmit={handleSubmit}>
        <h2>{props.pageTitle}</h2>
        <FormGroup>
          <Label>
            User Name
            <Input
              type="text"
              name="username"
              onChange={(e) => setUserName(e.currentTarget.value)}
              value={username}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              value={password}
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Profile:
            <Input
              type="text"
              name="profile"
              onChange={(e) => setProfile(e.currentTarget.value)}
              value={profile}
            />
          </Label>
        </FormGroup>
        <Input type="submit" value="Submit" />
      </Form>
    </>
  );
}
