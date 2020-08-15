import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADRById, updateADRById } from "../api";
import { CreateADR } from "./CreateADR";
import ScreenMessage from "./MessagePage";
function EditADR() {
  const [ADRSubmitMsg, setADRSubmitMsg] = useState({ msg: "", state: false });
  const [redirectHome, setRedirectHome] = useState(false); // boolean hook

  let { id } = useParams();
  let [singleADR, setSingleADR] = useState(null);

  useEffect(() => {
    getADRByIDAPICall();
  }, []);

  const getADRByIDAPICall = async () => {
    const result = await getADRById(id);
    console.log("logging edit page id", id);
    setSingleADR(result);
  };

  const submitHandler = async (formData) => {
    try {
      const result = await updateADRById(singleADR._id, formData);
      console.log(result);
      setADRSubmitMsg({
        msg: "Congratulations, ADR has been updated successfully",
        state: true,
      });
    } catch (error) {
      setADRSubmitMsg({
        msg: "Sorry, please try later, something went wrong during update",
        state: false,
      });
    }
  };

  return (
    <React.Fragment>
      {!singleADR && <p>Please wait, edit form is loading</p>}
      {singleADR && (
        <CreateADR
          pageTitle={"Edit ADR Registration"}
          getByIDAResult={singleADR}
          submitHandler={submitHandler}
        />
      )}
      <ScreenMessage
        ADRSubmitMsg={ADRSubmitMsg}
        setRedirectHome={setRedirectHome}
        redirectHome={redirectHome}
      />
    </React.Fragment>
  );
}

export default EditADR;
