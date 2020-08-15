import React, { useEffect, useState } from "react";
import { CreateDev } from "./CreateDeveloper";
import { addDevAPICall } from "../api";

function AddDev() {
  const [DevForm, setDevForm] = useState("");
  const [devMessage, setDevMessage] = useState("");

  const addDevHandler = async (DevInputDetails) => {
    try {
      const addDevResult = await addDevAPICall(DevInputDetails);
      console.log(addDevResult);
      setDevForm(addDevResult);
      setDevMessage(addDevResult.message);
    } catch (error) {
      console.log("logging add dev error", error);
      setDevMessage("Sorry, user creation is failed");
    }
  };
  return (
    <React.Fragment>
      <CreateDev
        submitHandler={addDevHandler}
        pageTitle={"Developer Registration"}
        addDevResult={DevForm}
      />
      {devMessage && <h1>{devMessage}</h1>}
    </React.Fragment>
  );
}
export default AddDev;
