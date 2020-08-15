import React from "react";
// function, input props, no render, no this
function ADRList(props) {
  return (
    <ul>
      {props.getADRResult.map((ADR) => {
        return (
          <li key={ADR._id}>
            User Name: {ADR.username} Legal Entity Name: {ADR.legalEntityName}{" "}
            Industry: {ADR.industry}
            Data Recipient Products: {ADR.softwareProductName} Data Recipient
            Product Description: {ADR.softwareProductDescription}
            <button onClick={() => props.deleteADR(ADR._id)}>Remove</button>
            <button onClick={() => props.editADR(ADR._id)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
}
export default ADRList;
