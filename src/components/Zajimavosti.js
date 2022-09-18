import React from "react";
import classes from "./Zajimavosti.module.css";
import Card from "../UI/Card";

function Zajimavosti() {
  return (
    <div>
      <h1 className={classes.headerText}>Mohlo by vás zajímat</h1>

      <div className={classes.box}>
        <div className={classes.item}>
          <img src="https://www.vodafone.cz/public/design/images/svg2/vodafone-store.svg" />
          <p>Prodejny Vodafonu</p>
        </div>
        <div className={classes.item}>
          <img src="https://www.vodafone.cz/public/design/images/svg2/network-signal.svg" />
          <p>Mapa Pokrytí</p>
        </div>
        <div className={classes.item}>
          <img src="https://www.vodafone.cz/public/design/images/svg2/roaming.svg" />
          <p>Roaming</p>
        </div>
        <div className={classes.item}>
          <img src="https://www.vodafone.cz/public/design/images/svg2/carer.svg" />
          <p>Kontakty</p>
        </div>
      </div>
    </div>
  );
}

export default Zajimavosti;
