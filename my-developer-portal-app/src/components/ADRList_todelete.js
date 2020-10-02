import React from "react";
import { Button, Table } from "reactstrap";

// function, input props, no render, no this
function ADRList(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Legal Entity Name</th>
          <th>Industry</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.getADRResult.map((ADR) => {
          return (
            <tr className="liColour" key={ADR._id}>
              <td> {ADR.username}</td>
              <td> {ADR.legalEntityName}</td>
              <td>{ADR.industry}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => props.deleteADR(ADR._id)}
                  variant="primary"
                >
                  Remove
                </Button>
              </td>
              <td>
                <Button color="warning" onClick={() => props.editADR(ADR._id)}>
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default ADRList;
