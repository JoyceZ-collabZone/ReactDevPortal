import React, { useState, useEffect } from "react";
import { getAPIListing } from "../api";
import APIList from "./APIList";

function APIContainer() {
  const [Metadata, setMetadata] = useState([]);

  useEffect(() => {
    getAPIListing().then(async (result) => {
      //   const APIJsonResponse = await result.json();
      console.log(result);
      setMetadata(result);
    });
  }, []);

  return (
    <React.Fragment>
      <h1 className="titleColour">Welcome to Open Banking APIs</h1>
      <APIList metadataStateProperty={Metadata} />
    </React.Fragment>
  );
}
export default APIContainer;
