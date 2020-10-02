import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

// use const for functions when it's functional components
export function CreateSP(props) {
  const [legalEntityName, setLegalEntityName] = useState(
    props.ADRCreateOrEdit.legalEntityName
  );
  const [industry, setIndustry] = useState(props.ADRCreateOrEdit.industry);
  const [logoUri, setLogoUri] = useState(props.ADRCreateOrEdit.logoUri);
  const [softwareProductName, setSoftwareProductName] = useState(
    props.ADRCreateOrEdit.softwareProductName
  );
  const [softwareProductDescription, setSoftwareProductDescription] = useState(
    props.ADRCreateOrEdit.softwareProductDescription
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    props.SubmitHandler({
      legalEntityName: legalEntityName,
      industry: industry,
      logoUri: logoUri,
      softwareProductName: softwareProductName,
      softwareProductDescription: softwareProductDescription,
    });

    setLegalEntityName("");
    setIndustry("");
    setLogoUri("");
    setSoftwareProductName("");
    setSoftwareProductDescription("");
  };

  return (
    <div className="formContainer">
      <h2 className="titleColour">{props.PageTitle}</h2>
      <Form onSubmit={handleSubmit}>
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

        <FormGroup>
          <Label>Software Product Name</Label>
          <Input
            type="text"
            name="softwareProductName"
            onChange={(e) => setSoftwareProductName(e.currentTarget.value)}
            value={softwareProductName}
          />
        </FormGroup>

        <FormGroup>
          <Label>Software Product NameDescription </Label>
          <Input
            type="text"
            name="softwareProductDescription"
            onChange={(e) =>
              setSoftwareProductDescription(e.currentTarget.value)
            }
            value={softwareProductDescription}
          />
        </FormGroup>

        <button
          type="submit"
          value="Submit"
          className="btn btn-small btn-success"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
