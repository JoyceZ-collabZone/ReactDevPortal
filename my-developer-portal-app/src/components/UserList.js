import React from "react";
export class UserList extends React.Component {
  render() {
    return (
      <ul className="centered">
        {this.props.userStateProperty.map((eachUser) => {
          return (
            <div>
              <li key={eachUser.username}>
                User name: {eachUser.firstName}
                User Email: {eachUser.email}
                User Role: {eachUser.role}
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}
