import React from "react";
import { UserList } from "./UserList";
// import { userRefreshUserListing } from "../api";
// import React, { useState, useEffect } from "react";
// import { userRefreshUserListing } from "../api";

// function UserListingPage() {
//   const [initialUserListingState, setlUserListingState] = useState([]);
//   useEffect(() => {
//     userRefreshUserListing();
//   }, []);
//   const userRefreshUserListing = async () => {
//     const getUsersAPIResponse = await userRefreshUserListing();
//     console.log("logging user listing response", getUsersAPIResponse);
//     setlUserListingState(getUsersAPIResponse);
//   };

//   return (
//     <div>
//       <p>user listing page </p>
//       <ul>{}</ul>
//     </div>
//   );
// }
// export default UserListingPage();

export class UserContainer extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    fetch("/user").then(async (result) => {
      const userJsonResponse = await result.json();
      console.log(userJsonResponse);
      this.setState({ users: userJsonResponse });
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>this is user container</h1>
        <UserList userStateProperty={this.state.users} />
      </React.Fragment>
    );
  }
}
