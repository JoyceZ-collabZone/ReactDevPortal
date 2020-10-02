import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Jumbo from "./components/Jumbo";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { UserLogin } from "./components/UserLogin";
// import session from "express-session";
import jwt from "jwt-decode";

import SwaggerDefinition from "./components/SwaggerDefinition";
import { UserContainer } from "./components/UserContainer";
import APIContainer from "./components/APIContainer";
import Home from "./components/Home_todelete";

import Nav from "./components/Nav";
import Logout from "./components/Logout";
import AddSP from "./components/AddSP";
import EditSP from "./components/EditSP";
import ADRList from "./components/ADRList";
import ADRHome from "./components/ADRHome";
import CreateUser from "./components/CreateUer";
import DocUpload from "./components/DocUpload";
import UserMessage from "./components/UserMessage";
import Table from "./components/ADRList";
import CreateSwagger from "./components/CreateSwagger";

//function to check if user is logged and reused across all routes
const isUserLoggedIn = () => {
  const SessionToken = sessionStorage.getItem("token");
  console.log("logging session token in APP.js route ", SessionToken);
  if (SessionToken) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const [loggedInState, setLoggedInState] = useState(isUserLoggedIn());
  const [loggedinUser, setLoggedinUser] = useState({});
  const [screenMessage, setScreenMessage] = useState({
    message: "",
    state: false,
  });

  console.log("logging loggedInState", loggedInState);
  console.log("logging loggedInUser", loggedinUser);

  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <Nav
              loggedInState={setLoggedInState}
              loggedInUser={setLoggedinUser}
              setScreenMessage={setScreenMessage}
            />
            <Switch>
              <Route path="/user/login">
                <UserLogin
                  loggedInState={setLoggedInState}
                  loggedInUser={setLoggedinUser}
                  setScreenMessage={setScreenMessage}
                  screenMessage={screenMessage}
                />
              </Route>

              <Route path="/users">
                <UserContainer />
              </Route>
              {/* 
              <Route path="/docUpload">
                <DocUpload />
              </Route> */}
              <Route path="/docupload">
                <CreateSwagger />
              </Route>
              <Route path="/APIMetadata" exact={true}>
                {loggedInState && <APIContainer />}
              </Route>
              <Route path="/software/new" exact={true}>
                <AddSP />
              </Route>

              {/* 
              <Route path="/user">
                <userRefreshUserListing />
              </Route> */}
              <Route path="/APIMetadata/:swaggerId">
                <SwaggerDefinition />
              </Route>

              <Route path="/edit/:id">
                <EditSP />
              </Route>
              <Route path="/softwares/all">
                <ADRHome />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/register/user/">
                <CreateUser
                  setScreenMessage={setScreenMessage}
                  screenMessage={screenMessage}
                />
              </Route>
              <Route path="/logout">
                <Logout
                  loggedInState={setLoggedInState}
                  loggedInUser={setLoggedinUser}
                  setScreenMessage={setScreenMessage}
                  screenMessage={screenMessage}
                />
              </Route>
              <Route path="/home">
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
