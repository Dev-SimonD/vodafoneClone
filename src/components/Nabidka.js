import React, { useState } from "react";
import classes from "./Nabidka.module.css";
import { NavLink } from "react-router-dom";

import NabidkaDoporucujeme from "./nabidka/NabidkaDoporucujeme";
import NabidkaTarify from "./nabidka/NabidkaTarify";
import NabidkaInternet from "./nabidka/NabidkaInternet";
import NabidkaTelevize from "./nabidka/NabidkaTelevize";
import NabidkaTelefony from "./nabidka/NabidkaTelefony";
import NabidkaVodafone from "./nabidka/NabidkaVodafone";

function Nabidka() {
  const [nabidka, setNabidka] = useState("doporucujeme");

  const doporucujemeHandler = () => {
    setNabidka("doporucujeme");
  };
  const tarifyHandler = () => {
    setNabidka("tarify");
  };
  const internetHandler = () => {
    setNabidka("internet");
  };
  const televizeHandler = () => {
    setNabidka("televize");
  };
  const telefonyHandler = () => {
    setNabidka("telefony");
  };
  const vodafoneHandler = () => {
    setNabidka("vodafone");
  };

  return (
    <div>
      <h1 className={classes.headerText}>Vybíráme z naší nabídky</h1>
      <div className={` ${classes.scrollmenu}`}>
        {/*  <a href="#" style={{ backgroundColor: "#007c92", color: "white" }}>
          Doporučujeme
        </a>
        <NavLink to="#">Tarify</NavLink>
        <NavLink to="#">Internet</NavLink>
        <NavLink to="#">Televize</NavLink>
        <NavLink to="#">Telefony</NavLink>
        <NavLink to="#">Vodafone TV</NavLink> */}
        <ul style={{ padding: "0" }}>
          <li
            onClick={doporucujemeHandler}
            style={{ backgroundColor: "#007c92", color: "white" }}
          >
            Doporučujeme
          </li>
          <li onClick={tarifyHandler}>Tarify</li>
          <li onClick={internetHandler}>Internet</li>
          <li onClick={televizeHandler}>Televize</li>
          <li onClick={telefonyHandler}>Telefony</li>
          <li onClick={vodafoneHandler}>Vodafone</li>
        </ul>
      </div>
      {nabidka == "doporucujeme" ? (
        <NabidkaDoporucujeme />
      ) : nabidka == "tarify" ? (
        <NabidkaTarify />
      ) : nabidka == "internet" ? (
        <NabidkaInternet />
      ) : nabidka == "televize" ? (
        <NabidkaTelevize />
      ) : nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      ) : null}
    </div>
  );
}

export default Nabidka;
