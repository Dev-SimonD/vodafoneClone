import React from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import classes from "./TestNavigation.module.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Hamburger from "hamburger-react";
import Logo from "../asssets/logo.png";

function TestNavigation() {
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div className={classes.navigation}>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <Button onClick={toggle} className={classes.topBurger}>
          <div className={classes.myBurger}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
          </div>
        </Button>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        /* dialogClassName="custom-modal"
        bsClass="my-modal" */
        fullscreen={true}
      >
        <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
        <ModalBody>
          <ul>
            <li>
              <NavLink to="/" onClick={toggle}>
                Úvod
              </NavLink>
            </li>
            <li>
              <NavLink to="/spojte-sluzby" onClick={toggle}>
                Spojte služby
              </NavLink>
            </li>
            <li>
              <NavLink to="/tarify" onClick={toggle}>
                Tarify
              </NavLink>
            </li>
            <li>
              <NavLink to="/internet" onClick={toggle}>
                Internet
              </NavLink>
            </li>
            <li>
              <NavLink to="/televize" onClick={toggle}>
                televize
              </NavLink>
            </li>
            <li>
              <NavLink to="/telefony" onClick={toggle}>
                telefony
              </NavLink>
            </li>
            <li>
              <NavLink to="/podpora" onClick={toggle}>
                podpora
              </NavLink>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TestNavigation;
