import React, { useState, useEffect } from "react";
import { call_getADRs, call_deleteADR } from "../api";
import ADRList from "./ADRList_todelete";
import { Redirect } from "react-router-dom";

function Home() {
  //use state hook
  const [ADRListing, setADRListing] = useState([]);
  const [editADRById, setEditADRById] = useState(null);

  //in place of componentDidMount
  useEffect(() => {
    refreshADRs();
  }, []);

  const refreshADRs = async () => {
    const getADRResponse = await call_getADRs();
    setADRListing(getADRResponse);
  };

  const editADR = (ADRId) => {
    console.log(ADRId);
    setEditADRById(ADRId);
  };

  //   const deleteADRHandler = async (id) => {
  //     const deleteResponse = await deleteADR(id);
  //     setMovies(movies.filter((movie) => movie._id !== data.data._id));
  //   };

  return (
    <React.Fragment>
      <p>ADR listing works</p>
      <ADRList
        ADRListingProp={ADRListing}
        editADRProp={editADR}
        // delMovie={deleteMovieHandler}
      />
      {/* {editID && <Redirect to={`/edit/${editID}`} />} */}
    </React.Fragment>
  );
}

export default Home;
