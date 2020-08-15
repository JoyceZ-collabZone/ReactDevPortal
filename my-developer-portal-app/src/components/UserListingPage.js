import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Badge, Jumbotron, Button } from "reactstrap";
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

// import { APIContainer } from "./components/APIContainer";
function UserListingPage() {
  const [initialUserListingState, setlUserListingState] = useState([]);
  useEffect(() => {
    userRefreshUserListing();
  }, []);
  const userRefreshUserListing = async () => {
    const getUsersAPIResponse = await userRefreshUserListing();
    console.log("logging user listing response", getUsersAPIResponse);
    setlUserListingState(getUsersAPIResponse);

    return (
      <ul>
        {getUsersAPIResponse.map((eachUser) => {
          return (
            <li key={eachUser.username}>
              User name: {eachUser.username} User profile: {eachUser.profile}
            </li>
          );
        })}
      </ul>
    );
  };
}
export default UserListingPage;
