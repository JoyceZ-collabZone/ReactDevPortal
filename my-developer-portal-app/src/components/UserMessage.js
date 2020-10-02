import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Redirect, Link } from "react-router-dom";

export default function UserMessage(props) {
  return (
    <React.Fragment>
      {props.screenMessage.message.length > 0 && (
        <React.Fragment>
          <h1 className="titleColour">{props.screenMessage.message}</h1>

          {props.screenMessage.state && (
            <Link to={"/register/all"}>
              <button>View ADR List</button>
            </Link>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
