import React, { useState, useEffect } from "react";
import { call_getADRs, call_deleteADR } from "../api";
import SPList from "./SPList";
import { Redirect } from "react-router-dom";

function SPHome() {
  // use state hook
  const [ADRListResult, setADRList] = useState([]);
  const [ADRIdForEdit, setADRIdForEdit] = useState(null);

  // use effect hook, triggered multiple times when update happens, dependency, can be many
  //take function as parameter, empty array means not dependent on anything, behave like component did mount

  useEffect(() => {
    refreshSPHome();
  }, []);

  const refreshSPHome = async () => {
    const response = await call_getADRs();
    setADRList(response);
    const userRole = window.sessionStorage.getItem("userRole");
    console.log(
      "logging response in refresh ADR home route, returned from fetch api ",
      response
    );
    return userRole;
  };
  const editSP = (ADRId) => {
    console.log("logging ADR ID in edit route ", ADRId);
    setADRIdForEdit(ADRId);
  };
  const deleteSP = async (id) => {
    const response = await call_deleteADR(id);
    setADRList(ADRListResult.filter((ADR) => ADR._id !== response._id));
  };
  return (
    <React.Fragment>
      <h2 className="titleColour"> ADR registered</h2>

      {/* {userRole == "staff" && ( */}
      <SPList
        ADRListResult={ADRListResult}
        SPEdit={editSP}
        SPDelete={deleteSP}
      />
      {/* )} */}
      {/* {userRole !== "admin" && <p>Please login as admin to see all SPs</p>} */}
      {ADRIdForEdit && <Redirect to={`/edit/${ADRIdForEdit}`} />}
    </React.Fragment>
  );
}

export default SPHome;
