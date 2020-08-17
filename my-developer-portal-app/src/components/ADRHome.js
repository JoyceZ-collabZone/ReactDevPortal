import React, { useState, useEffect } from "react";
import { getADRs, deleteADRAPICall } from "../api";
import ADRList from "./ADRList";
import { Redirect } from "react-router-dom";

function ADRHome() {
  // use state hook
  const [ADRListing, setADRListing] = useState([]);
  const [ADRIdForEdit, setADRIdForEdit] = useState(null);

  // use effect hook, triggered multiple times when update happens, dependency, can be many
  //take function as parameter, empty array means not dependent on anything, behave like component did mount

  useEffect(() => {
    refreshADRHome();
  }, []);

  const refreshADRHome = async () => {
    const response = await getADRs();
    setADRListing(response);
  };

  const editADR = (ADRId) => {
    console.log(ADRId);
    setADRIdForEdit(ADRId);
  };
  const deleteADR = async (id) => {
    const response = await deleteADRAPICall(id);
    setADRListing(ADRListing.filter((ADR) => ADR._id !== response._id));
  };
  return (
    <React.Fragment>
      <h2 className="titleColour"> ADR registered</h2>
      <ADRList
        getADRResult={ADRListing}
        editADR={editADR}
        deleteADR={deleteADR}
      />
      {ADRIdForEdit && <Redirect to={`/edit/${ADRIdForEdit}`} />}
    </React.Fragment>
  );
}

export default ADRHome;
