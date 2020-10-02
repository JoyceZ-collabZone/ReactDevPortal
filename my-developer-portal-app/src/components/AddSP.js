import React, { useEffect, useState } from "react";
import { CreateSP } from "./CreateSP";
import { call_addADR } from "../api";
import ScreenMessage from "./ScreenMessage";
function AddSP() {
  const [ADRSubmitMsg, setADRSubmitMsg] = useState({ msg: "", state: false });
  const [redirectHome, setRedirectHome] = useState(false); // boolean hook

  const addADRHandler = async (ADRInputDetails) => {
    try {
      const addADRResult = await call_addADR(ADRInputDetails);
      console.log("logging add SP result in react route ", addADRResult);
      setADRSubmitMsg({
        msg: "Congratulations, software product has been added successfully",
        state: true,
      });
    } catch (error) {
      console.log("logging add SP error", error);
      setADRSubmitMsg({
        msg: "Sorry, please try later, something went wrong",
        state: false,
      });
    }
  };
  return (
    <React.Fragment>
      <CreateSP
        SubmitHandler={addADRHandler}
        PageTitle={"Software Product Registration"}
        ADRCreateOrEdit={""}
      />
      <ScreenMessage
        ADRSubmitMsg={ADRSubmitMsg}
        // redirectHome={setRedirectHome}
        // redirectHome={redirectHome}
      />
    </React.Fragment>
  );
}
export default AddSP;
