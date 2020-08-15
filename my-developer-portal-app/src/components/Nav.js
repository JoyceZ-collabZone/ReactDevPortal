import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { userRefreshUserListing } from "../api";
import { UserListingPage } from "./UserContainer";
import { RedocStandalone } from "redoc";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavComp(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleUserClickLogout = () => {
    window.localStorage.removeItem("token");
    props.afterLogoutState(false); // set loggedin to false
  };

  return (
    <React.Fragment>
      <div>
        <Navbar color="light" light expand="md">
          {/* <NavbarBrand>Open Banking Dev Portal Register</NavbarBrand> */}
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/register/user">
                  Developer Registration
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/register/admin">
                  Admin Registration
                </NavLink>
              </NavItem>
              <NavItem>
                {!props.beforeSignInState && (
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                )}
              </NavItem>
            </Nav>
            {props.beforeSignInState && (
              <NavItem>
                <Link to="/APIMetadata">API Definition</Link>
              </NavItem>
            )}
            {props.beforeSignInState && (
              <Link to="/logout" onClick={handleUserClickLogout}>
                Logout
              </Link>
            )}
          </Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default NavComp;
