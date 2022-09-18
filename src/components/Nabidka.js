import React from "react";
import classes from "./Nabidka.module.css";
function Nabidka() {
  return (
    <div>
      <h1 className={classes.headerText}>Vybíráme z naší nabídky</h1>
      <div className={` ${classes.scrollmenu}`}>
        <a href="#" style={{ backgroundColor: "#007c92", color: "white" }}>
          Doporučujeme
        </a>
        <a href="#">Tarify</a>
        <a href="#">Internet</a>
        <a href="#">Televize</a>
        <a href="#">Telefony</a>
        <a href="#">Vodafone TV</a>
      </div>
    </div>
  );
}

export default Nabidka;
