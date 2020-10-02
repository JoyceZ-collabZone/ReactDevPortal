import React, { useEffect, useState } from "react";

import { CreateDev } from "./CreateDeveloper_todelete";
import { CreateUser } from "../api";

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
        successMessage={devMessage}
        submitHandler={addDevHandler}
        pageTitle={"Developer Registration"}
        addDevResult={DevForm}
      />
    </React.Fragment>
  );
}
export default AddDev;
