import React from "react";
import { Button, ListGroup } from "reactstrap";

// function, input props, no render, no this
function ADRList(props) {
  return (
    <ul>
      {props.getADRResult.map((ADR) => {
        return (
          <li className="liColour" key={ADR._id}>
            User Name: {ADR.username} Legal Entity Name: {ADR.legalEntityName}
            {"     "}
            Industry: {ADR.industry}
            Data Recipient Products: {ADR.softwareProductName} Data Recipient
            Product Description: {ADR.softwareProductDescription}
            <Button
              className="gapInButton"
              onClick={() => props.deleteADR(ADR._id)}
              variant="primary"
            >
              Remove
            </Button>
            <Button onClick={() => props.editADR(ADR._id)}>Edit</Button>
          </li>
        );
      })}
    </ul>
  );
}
export default ADRList;
