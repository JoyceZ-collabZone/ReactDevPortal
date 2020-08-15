import React, { useEffect, useState } from "react";
import { CreateADR } from "./CreateADR";
import { addADRAPICall } from "../api";
import ScreenMessage from "./MessagePage";
function AddADR() {
  const [ADRSubmitMsg, setADRSubmitMsg] = useState({ msg: "", state: false });
  const [redirectHome, setRedirectHome] = useState(false); // boolean hook

  const addADRHandler = async (ADRInputDetails) => {
    try {
      const addADRResult = await addADRAPICall(ADRInputDetails);
      console.log(addADRResult);
      setADRSubmitMsg({
        msg: "Congratulations, ADR has been registered successfully",
        state: true,
      });
    } catch (error) {
      console.log("logging add ADR error", error);
      setADRSubmitMsg({
        msg: "Sorry, please try later, something went wrong",
        state: false,
      });
    }
  };
  return (
    <React.Fragment>
      <CreateADR
        submitHandler={addADRHandler}
        pageTitle={"ADR Registration"}
        getByIDAResult={""}
      />
      <ScreenMessage
        ADRSubmitMsg={ADRSubmitMsg}
        setRedirectHome={setRedirectHome}
        // redirectHome={redirectHome}
      />
    </React.Fragment>
  );
}
export default AddADR;
