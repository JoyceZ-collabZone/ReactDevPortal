import React, { useState } from "react";
// use const for functions when it's functional components
export function CreateADR(props) {
  const [username, setUserName] = useState(props.getByIDAResult.username);
  const [password, setPassword] = useState(props.getByIDAResult.password);
  const [profile, setProfile] = useState(props.getByIDAResult.profile);
  const [legalEntityName, setLegalEntityName] = useState(
    props.getByIDAResult.legalEntityName
  );
  const [industry, setIndustry] = useState(props.getByIDAResult.industry);
  const [logoUri, setLogoUri] = useState(props.getByIDAResult.logoUri);
  const [dataRecipientProduct, setDataRecipientProduct] = useState(
    props.getByIDAResult.dataRecipientProduct
  );
  const [
    dataRecipientProductDescription,
    setDataRecipientProductDescription,
  ] = useState(props.getByIDAResult.dataRecipientProductDescription);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitHandler({
      username: username,
      password: password,
      profile: profile,
      legalEntityName: legalEntityName,
      industry: industry,
      logoUri: logoUri,
      dataRecipientProduct: dataRecipientProduct,
      dataRecipientProductDescription: dataRecipientProductDescription,
    });

    setUserName("");
    setPassword("");
    setProfile("");
    setLegalEntityName("");
    setIndustry("");
    setLogoUri("");
    setDataRecipientProduct("");
    setDataRecipientProductDescription("");
  };

  return (
    <>
      <h2>{props.pageTitle}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.currentTarget.value)}
            value={username}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.currentTarget.value)}
            value={password}
          />
        </label>
        <label>
          Profile:
          <input
            type="text"
            name="profile"
            onChange={(e) => setProfile(e.currentTarget.value)}
            value={profile}
          />
        </label>
        <label>
          Legal Entity Name:
          <input
            type="text"
            name="legalEntityName"
            onChange={(e) => setLegalEntityName(e.currentTarget.value)}
            value={legalEntityName}
          />
        </label>
        <label>
          industry:
          <input
            type="text"
            name="industry"
            onChange={(e) => setIndustry(e.currentTarget.value)}
            value={industry}
          />
        </label>{" "}
        <label>
          Legal Entity Logo URL:
          <input
            type="text"
            name="legalEntityLogoURL"
            onChange={(e) => setLogoUri(e.currentTarget.value)}
            value={logoUri}
          />
        </label>
        <label>
          Data Recipient Product:
          <input
            type="text"
            name="dataRecipientProduct"
            onChange={(e) => setDataRecipientProduct(e.currentTarget.value)}
            value={dataRecipientProduct}
          />
        </label>{" "}
        <label>
          Data Recipient Product Description:
          <input
            type="text"
            name="dataRecipientProductDescription"
            onChange={(e) =>
              setDataRecipientProductDescription(e.currentTarget.value)
            }
            value={dataRecipientProductDescription}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
