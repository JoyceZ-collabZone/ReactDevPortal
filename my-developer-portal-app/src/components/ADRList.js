import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

// function, input props, no render, no this
function ADRList(props) {
  return (
    <ListGroup>
      {props.getADRResult.map((ADR) => {
        return (
          <ListGroupItem className="liColour" key={ADR._id}>
            User Name: {ADR.username} Legal Entity Name: {ADR.legalEntityName}
            {"     "}
            Industry: {ADR.industry}
            {/* Data Recipient Products: {ADR.softwareProductName} Data Recipient
            Product Description: {ADR.softwareProductDescription} */}
            <Button
              color="danger"
              onClick={() => props.deleteADR(ADR._id)}
              variant="primary"
            >
              Remove
            </Button>
            <Button color="warning" onClick={() => props.editADR(ADR._id)}>
              Edit
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
export default ADRList;
