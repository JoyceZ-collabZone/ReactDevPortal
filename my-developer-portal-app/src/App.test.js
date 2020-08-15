import React from "react";
import { render } from "@testing-library/react";
import App from "./App_Backup";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

<RedocStandalone specUrl={"http://localhost:3000/account-balances.json"} />;

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>

      <Card>
        <CardHeader tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardFooter className="text-muted">Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RedocStandalone } from "redoc";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

export function APIList(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();
  console.log("button", buttonClicked);
  const navigateTo = (swaggerId, swagger) => {
    history.push({
      pathname: `/APIMetadata/${swaggerId}`,
      state: { swagger },
    });
  };

  return (
    <ul>
      {props.metadataStateProperty.map((eachAPI) => {
        return (
          <li key={eachAPI._id}>
            API name: {eachAPI.name} Category: {eachAPI.category} Description:{" "}
            {eachAPI.description} Scope: {eachAPI.scope}
            <button
              onClick={(event) => navigateTo(eachAPI._id, eachAPI.Swagger)}
            >
              Swagger Definition
            </button>
            {buttonClicked && <RedocStandalone spec={eachAPI.Swagger} />}
          </li>
        );
      })}
    </ul>
  );
}
return (
  <div>
    <p>You must log in to view the page at {from.pathname}</p>

    <form onSubmit={handleUserFormSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) => captureUserNameEntered(e.currentTarget.value)}
          value={username}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) => capturePasswordEntered(e.currentTarget.value)}
          value={password}
        />
      </label>
      <label>
        Profile:
        <input
          type="text"
          name="profile"
          onChange={(e) => captureProfileEntered(e.currentTarget.value)}
          value={profile}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);
