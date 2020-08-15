import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getADRById, updateADRById } from "../api";
import { CreateADR } from "./CreateADR";
import ScreenMessage from "./MessagePage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditADR() {
  let { id } = useParams();

  let [ADR, setADR] = useState(null);
  const [submitMsg, setSubmitMsg] = useState({ msg: "", state: false });
  const [redirectHome, setRedirectHome] = useState(false);

  useEffect(() => {
    getADR();
  }, []);

  const getADR = async () => {
    const response = await getADRById(id);
    // console.log('edit page id: ' + id);
    setADR(response);
  };

  const submitHandler = async (formData) => {
    try {
      const data = await updateADRById(ADR._id, formData);
      setSubmitMsg({ msg: "Metadata Updated Successfully", state: true });
    } catch (e) {
      console.log(e);
      setSubmitMsg({
        msg: "We are sorry, something went wrong, please try again later",
        state: false,
      });
    }
  };

  return (
    <React.Fragment>
      {!ADR && <p>loading...</p>}

      {ADR && (
        <CreateADR
          pageTitle={"Edit Metadata"}
          ADR={ADR}
          submitHandler={submitHandler}
        />
      )}

      <ScreenMessage
        submitMsg={submitMsg}
        setRedirectHome={setRedirectHome}
        redirectHome={redirectHome}
      />
    </React.Fragment>
  );
}

export default EditADR;
