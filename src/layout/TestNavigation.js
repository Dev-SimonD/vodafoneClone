import React, { useEffect } from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import classes from "./TestNavigation.module.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Hamburger from "hamburger-react";
/* import Logo from "../asssets/logo.png"; */
import SearchIcon from "../asssets/menu/searchIcon.svg";
import ProfileIcon from "../asssets/menu/profile.png";
import CartIcon from "../asssets/menu/cart.png";
import Search from "../components/Search";

function TestNavigation() {
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <div>
        <div className={classes.navigation}>
          <div className="ms-2">
            {/*  <img src={Logo} alt="logo" /> */}
            <NavLink
              to="/"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                x="0"
                y="0"
                viewBox="0 0 284.9 285"
                aria-hidden="true"
              >
                <circle fill="#e60000" cx="142.5" cy="142.5" r="141.7"></circle>
                <path
                  fill="#fff"
                  d="M143.6 221.5c-38.9.1-79.5-33.1-79.6-86.5-.1-35.3 18.9-69.3 43.3-89.4 23.7-19.7 56.3-32.3 85.8-32.4 3.8 0 7.8.3 10.2 1.1-25.8 5.3-46.3 29.4-46.2 56.6 0 .9.1 1.9.2 2.3 43.2 10.5 62.7 36.6 62.9 72.6 0 36.1-28.5 75.6-76.6 75.7z"
                ></path>
              </svg>
            </NavLink>
          </div>
          <div className="centered">
            <div className="centered" style={{ marginRight: "10px" }}>
              <div style={{ cursor: "pointer" }}>
                <NavLink to="/eshop/kosik">
                  <img
                    className={classes.topIcon}
                    id={classes.cart}
                    src={CartIcon}
                  />
                </NavLink>
              </div>
              <div style={{ cursor: "pointer" }}>
                <NavLink to="/search">
                  <img
                    className={classes.topIcon}
                    id={classes.search}
                    src={SearchIcon}
                  />
                </NavLink>
              </div>
              <div style={{ cursor: "pointer" }}>
                <NavLink to="/muj/prihlaseni">
                  <img
                    className={classes.topIcon}
                    id={classes.profile}
                    src={ProfileIcon}
                  />
                </NavLink>
              </div>
            </div>

            <Button onClick={toggle} className={classes.topBurger}>
              <div className={classes.myBurger}>
                <div className={classes.line1}></div>
                <div className={classes.line2}></div>
                <div className={classes.line3}></div>
              </div>
            </Button>
          </div>
        </div>
        <div className={` ${classes.scrollmenu}`}>
          <NavLink to="/spojte-sluzby" style={{ position: "relative" }}>
            Spojte služby<span className={classes.menuSticker}>Nové</span>
          </NavLink>
          <NavLink to="/tarify">Tarify</NavLink>
          <NavLink to="/internet">Internet</NavLink>
          <NavLink to="/televize">Televize</NavLink>
          <NavLink to="/telefony">Telefony</NavLink>
          <NavLink to="/podpora">Podpora</NavLink>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        /* dialogClassName="custom-modal"
        bsClass="my-modal" */
        fullscreen={true}
      >
        <ModalHeader toggle={toggle}>
          {" "}
          <div className="ms-2">
            {/*  <img src={Logo} alt="logo" /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              x="0"
              y="0"
              viewBox="0 0 284.9 285"
              aria-hidden="true"
            >
              <circle fill="#e60000" cx="142.5" cy="142.5" r="141.7"></circle>
              <path
                fill="#fff"
                d="M143.6 221.5c-38.9.1-79.5-33.1-79.6-86.5-.1-35.3 18.9-69.3 43.3-89.4 23.7-19.7 56.3-32.3 85.8-32.4 3.8 0 7.8.3 10.2 1.1-25.8 5.3-46.3 29.4-46.2 56.6 0 .9.1 1.9.2 2.3 43.2 10.5 62.7 36.6 62.9 72.6 0 36.1-28.5 75.6-76.6 75.7z"
              ></path>
            </svg>
          </div>
        </ModalHeader>
        <ModalBody className={classes.modalBody}>
          <ul className={classes.modalUl}>
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="btn btn-danger"
              style={{ width: "200px", marginBottom: "30px" }}
            >
              {`Muj Vodafone >`}
            </button>
            <button className="basicBtn" style={{ width: "200px" }}>
              {`Prejit k nam >`}
            </button>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Okay
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}

export default TestNavigation;
