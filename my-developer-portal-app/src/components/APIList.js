import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RedocStandalone } from "redoc";
import {
  Card,
  CardFooter,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

export function APIList(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();
  console.log("button", buttonClicked);
  const navigateTo = (swaggerId, swagger) => {
    history.push({
      pathname: `/APIMetadata/${swaggerId}`,
      state: { swagger },
    });
  };

  return (
    <div>
      <Row>
        {props.metadataStateProperty.map((eachAPI) => {
          return (
            <Col sm="6" className="mb-3">
              <Card key={eachAPI._id} body>
                <CardTitle>Category: {eachAPI.category}</CardTitle>
                <CardText>Description: {eachAPI.description}</CardText>
                <Button
                  onClick={(event) => navigateTo(eachAPI._id, eachAPI.Swagger)}
                >
                  Go To Swagger Definition
                </Button>
                {buttonClicked && <RedocStandalone spec={eachAPI.Swagger} />}
                <CardFooter>Scope: {eachAPI.scope}</CardFooter>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
