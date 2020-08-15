import React from "react";
import { RedocStandalone } from "redoc";
import { withRouter } from "react-router-dom";
import { getSwaggerObject } from "../api";

class SwaggerDefinition extends React.Component {
  render() {
    const { swagger } = this.props.location.state;
    return (
      <React.Fragment>
        <RedocStandalone spec={swagger} />
      </React.Fragment>
    );
  }
}

export default withRouter(SwaggerDefinition);
