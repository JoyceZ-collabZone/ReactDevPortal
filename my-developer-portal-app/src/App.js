import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Badge,
  Jumbotron,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Jumbo from "./components/Jumbotran";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { LoginHomePage } from "./components/UserLogin";
// import session from "express-session";
import jwt from "jwt-decode";

import SwaggerDefinition from "./components/SwaggerDefinition";
import { UserContainer } from "./components/UserContainer";
import { APIContainer } from "./components/APIContainer";
import Home from "./components/Home";

import NavComp from "./components/Nav";
import AddADR from "./components/AddADR";
import EditADR from "./components/EditADR";
import ADRHome from "./components/ADRHome";
import AddDev from "./components/AddDeveloper";

// import { APIContainer } from "./components/APIContainer";

// function to check if user is logged and reused across all routes
const isUserLoggedIn = () => {
  const SessionToken = localStorage.getItem("token");
  console.log("logging session token", SessionToken);
  if (SessionToken) {
    return true;
  } else {
    return false;
  }
};

//

function App() {
  const [initialSignInState, setSignInState] = useState(isUserLoggedIn());
  console.log("logging setSignInState", setSignInState);

  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <NavComp
              beforeSignInState={initialSignInState}
              afterLogoutState={setSignInState}
            />

            <Switch>
              <Route path="/login">
                <LoginHomePage loginStateChangeProperty={setSignInState} />
              </Route>
              {/* <Route path="/logout">
            <Logout loginStateChangeProperty={setSignInState} />
          </Route> */}
              <Route path="/user">
                <UserContainer />
                {/* <Logout loginStateChangeProperty={setSignInState} /> */}
              </Route>

              <Route path="/APIMetadata" exact={true}>
                {initialSignInState && <APIContainer />}
              </Route>
              {/* 
              <Route path="/user">
                <userRefreshUserListing />
              </Route> */}
              <Route path="/APIMetadata/:swaggerId">
                <SwaggerDefinition />
              </Route>
              <Route path="/register/admin/">
                <AddADR />
              </Route>
              <Route path="/edit/:id">
                <EditADR />
              </Route>
              <Route path="/register/all">
                <ADRHome />
              </Route>
              <Route path="/register/user/">
                <AddDev />
              </Route>
              <Route path="/">
                <Jumbo />
              </Route>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
