import React, { useState, useEffect } from "react";
import { call_getADRs, call_deleteADR } from "../api";
import ADRList from "./ADRList";
import { Redirect } from "react-router-dom";

function ADRHome() {
  // use state hook
  const [ADRListResult, setADRList] = useState([]);
  const [ADRIdForEdit, setADRIdForEdit] = useState(null);

  // use effect hook, triggered multiple times when update happens, dependency, can be many
  //take function as parameter, empty array means not dependent on anything, behave like component did mount

  useEffect(() => {
    refreshADRHome();
  }, []);

  const refreshADRHome = async () => {
    const response = await call_getADRs();
    setADRList(response);
    console.log(
      "logging response in refresh ADR home route, returned from fetch api ",
      response
    );
  };

  const editADR = (ADRId) => {
    console.log("logging ADR ID in edit route ", ADRId);
    setADRIdForEdit(ADRId);
  };
  const deleteADR = async (id) => {
    const response = await call_deleteADR(id);
    setADRList(ADRListResult.filter((ADR) => ADR._id !== response._id));
  };
  return (
    <React.Fragment>
      <h2 className="titleColour"> ADR registered</h2>
      <ADRList
        ADRListResult={ADRListResult}
        ADREdit={editADR}
        ADRDelete={deleteADR}
      />
      {ADRIdForEdit && <Redirect to={`/edit/${ADRIdForEdit}`} />}
    </React.Fragment>
  );
}

export default ADRHome;
