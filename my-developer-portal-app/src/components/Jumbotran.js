import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Badge, Jumbotron, Button } from "reactstrap";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
              <Jumbotron className="backgroundPic" className="jumbo">
                <h1
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  className="jumboP"
                >
                  WELCOME TO MY DEVELOPER PORTAL
                </h1>
                <p
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  className="lead"
                  className="textColour"
                >
                  Our strong API foundations have given us an ability to deliver
                  great customer experiences and we now want you to benefit from
                  our API as well. We can’t wait to see what you create!
                </p>
                <hr className="my-2" />
                <p
                  className="textColour"
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                >
                  You need to register as a user to start your journey with us
                  to explore our partner apis, or login as existing user
                </p>
                <p
                  className="lead"
                  className="textColour"
                  style={{ fontFamily: "sans-serif" }}
                ></p>
                <div>
                  <h1>
                    <Link to="/APIMetadata">
                      <Button color="success">
                        {" "}
                        Explore Our APIs After Sign In
                      </Button>
                    </Link>
                  </h1>
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
