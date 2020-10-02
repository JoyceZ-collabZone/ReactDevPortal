import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { call_getADRById, call_updateADRById } from "../api";
import { CreateSP } from "./CreateSP_todelete";
import ScreenMessage from "./ScreenMessage";
function EditSP() {
  const [editADRSubmitMsg, setEditADRSubmitMsg] = useState({
    msg: "",
    state: false,
  });
  const [redirectHome, setRedirectHome] = useState(false); // boolean hook

  let { id } = useParams();
  let [selectedADR, setSelectedADR] = useState(null);

  useEffect(() => {
    getADRById();
  }, []);

  const getADRById = async () => {
    const result = await call_getADRById(id);
    console.log("logging edit page id", id);
    setSelectedADR(result);
  };

  const submitHandler = async (formData) => {

    formData.user = 10;
    formData.role = 10;
    formData.DateTime = 10;

    try {
      const result = await call_updateADRById(selectedADR._id, formData);
      console.log(result);
      setEditADRSubmitMsg({
        msg: "Congratulations, ADR has been updated successfully",
        state: true,
      });
    } catch (error) {
      setEditADRSubmitMsg({
        msg: "Sorry, please try later, something went wrong during update",
        state: false,
      });
    }
  };

  return (
    <React.Fragment>
      {!selectedADR && <p>Please wait, edit form is loading</p>}
      {selectedADR && (
        <CreateSP
          PageTitle={"Edit ADR Registration"}
          ADRCreateOrEdit={selectedADR}
          SubmitHandler={submitHandler}
        />
      )}
      <ScreenMessage
        ADRSubmitMsg={editADRSubmitMsg}
        setRedirectHome={setRedirectHome}
        redirectHome={redirectHome}
      />
    </React.Fragment>
  );
}

export default EditSP;
