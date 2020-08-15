import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    <div className="formContainer">
      <h2 >{props.pageTitle}</h2>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label>User Name</Label>
              <Input
                type="text"
                name="username"
                onChange={(e) => setUserName(e.currentTarget.value)}
                value={username}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Profile </Label>
              <Input
                type="text"
                name="profile"
                onChange={(e) => setProfile(e.currentTarget.value)}
                value={profile}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Legal Entity Name </Label>
              <Input
                type="text"
                name="legalEntityName"
                onChange={(e) => setLegalEntityName(e.currentTarget.value)}
                value={legalEntityName}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Industry </Label>
              <Input
                type="text"
                name="industry"
                onChange={(e) => setIndustry(e.currentTarget.value)}
                value={industry}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Legal Entity Logo URL </Label>
          <Input
            type="text"
            name="legalEntityLogoURL"
            onChange={(e) => setLogoUri(e.currentTarget.value)}
            value={logoUri}
          />
        </FormGroup>
        <Col md={6}>
          <FormGroup>
            <Label>Data Recipient Product </Label>
            <Input
              type="text"
              name="dataRecipientProduct"
              onChange={(e) => setDataRecipientProduct(e.currentTarget.value)}
              value={dataRecipientProduct}
            />
          </FormGroup>
        </Col>
        <FormGroup>
          <Label>Data Recipient Product Description </Label>
          <Input
            type="text"
            name="dataRecipientProductDescription"
            onChange={(e) =>
              setDataRecipientProductDescription(e.currentTarget.value)
            }
            value={dataRecipientProductDescription}
          />
        </FormGroup>

        <Input type="submit" value="Submit" />
      </Form>
    </div>
  );
}
