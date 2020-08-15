import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Badge, Jumbotron, Button } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavComp from "./Nav";
function Jumbo() {
  //   const [initialSignInState, setSignInState] = useState("false");
  //   console.log("logging setSignInState", setSignInState);

  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <div>
              <Jumbotron>
                <h1 className="display-3">WELCOME TO MY DEVELOPER PORTAL</h1>
                <p className="lead">
                  Our strong API foundations have given us an ability to deliver
                  great customer experiences and we now want you to benefit from
                  our API as well. We can’t wait to see what you create!
                </p>
                <hr className="my-2" />
                <p>
                  You need to register with us as a user to start your journey
                  with us to explore our partner apis, or login as existing user
                </p>
                <p className="lead">
                  <NavComp
                  // beforeSignInState={initialSignInState}
                  // afterLogoutState={setSignInState}
                  ></NavComp>
                </p>
                <div>
                  <h1>
                    <Badge color="secondary"> Register</Badge>
                  </h1>
                  <div
                    style={{
                      backgroundImage: `url(require("http://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/What-is-an-API-Portal.png"))`,
                    }}
                  ></div>
                </div>
              </Jumbotron>
            </div>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}
export default Jumbo;
