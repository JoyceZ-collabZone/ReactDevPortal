import React from "react";
export class UserList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.userStateProperty.map((eachUser) => {
          return (
            <li key={eachUser.username}>
              User name: {eachUser.username} User profile: {eachUser.profile}
            </li>
          );
        })}
      </ul>
    );
  }
}
