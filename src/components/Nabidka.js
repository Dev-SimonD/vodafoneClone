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
  const [doporucujemeActive, setDoporucujemeActive] = useState(true);
  const [tarifyActive, setTarifyActive] = useState(false);
  const [internetActive, setInternetActive] = useState(false);
  const [televizeActive, setTelevizeActive] = useState(false);
  const [telefonyActive, setTelefonyActive] = useState(false);
  const [vodafoneActive, setVodafoneActive] = useState(false);

  const doporucujemeHandler = () => {
    setNabidka("doporucujeme");
    setDoporucujemeActive(true);
    setTarifyActive(false);
    setInternetActive(false);
    setTelevizeActive(false);
    setTelefonyActive(false);
    setVodafoneActive(false);
  };
  const tarifyHandler = () => {
    setNabidka("tarify");
    setDoporucujemeActive(false);
    setTarifyActive(true);
    setInternetActive(false);
    setTelevizeActive(false);
    setTelefonyActive(false);
    setVodafoneActive(false);
  };
  const internetHandler = () => {
    setNabidka("internet");
    setDoporucujemeActive(false);
    setTarifyActive(false);
    setInternetActive(true);
    setTelevizeActive(false);
    setTelefonyActive(false);
    setVodafoneActive(false);
  };
  const televizeHandler = () => {
    setNabidka("Vodafone TV");
    setDoporucujemeActive(false);
    setTarifyActive(false);
    setInternetActive(false);
    setTelevizeActive(true);
    setTelefonyActive(false);
    setVodafoneActive(false);
  };
  const telefonyHandler = () => {
    setNabidka("telefony");
    setDoporucujemeActive(false);
    setTarifyActive(false);
    setInternetActive(false);
    setTelevizeActive(false);
    setTelefonyActive(true);
    setVodafoneActive(false);
  };
  const vodafoneHandler = () => {
    setNabidka("vodafone");
    setDoporucujemeActive(false);
    setTarifyActive(false);
    setInternetActive(false);
    setTelevizeActive(false);
    setTelefonyActive(false);
    setVodafoneActive(true);
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
        <ul style={{ padding: "0" }} className={classes.ul}>
          <li
            className={doporucujemeActive ? "activeLink" : ""}
            onClick={doporucujemeHandler}
          >
            Doporučujeme
          </li>
          <li
            className={tarifyActive ? "activeLink" : ""}
            onClick={tarifyHandler}
          >
            Tarify
          </li>
          <li
            className={internetActive ? "activeLink" : ""}
            onClick={internetHandler}
          >
            Internet
          </li>
          <li
            className={televizeActive ? "activeLink" : ""}
            onClick={televizeHandler}
          >
            Vodafone TV
          </li>
          {/* <li
            className={telefonyActive ? "activeLink" : ""}
            onClick={telefonyHandler}
          >
            Telefony
          </li>
          <li
            className={vodafoneActive ? "activeLink" : ""}
            onClick={vodafoneHandler}
          >
            Vodafone
          </li> */}
        </ul>
      </div>
      {nabidka == "doporucujeme" ? (
        <NabidkaDoporucujeme />
      ) : nabidka == "tarify" ? (
        <NabidkaTarify />
      ) : nabidka == "internet" ? (
        <NabidkaInternet />
      ) : nabidka == "Vodafone TV" ? (
        (<NabidkaTelevize /> /*  : nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      )  */ /*: nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      )  */ /*: nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      )  */ /*: nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      )  */)
      ) : /*: nabidka == "telefony" ? (
        <NabidkaTelefony />
      ) : nabidka == "vodafone" ? (
        <NabidkaVodafone />
      )  */
      null}
    </div>
  );
}

export default Nabidka;
