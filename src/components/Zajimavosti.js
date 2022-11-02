import React from "react";
import classes from "./Zajimavosti.module.css";
import Card from "../UI/Card";

function Zajimavosti() {
  return (
    <div>
      <div className={classes.mainZajimavosti}>
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

      <h1 className={classes.headerText2}>Mohlo by vás zajímat</h1>
      <div className="centered" style={{ justifyContent: "space-evenly" }}>
        <div className={classes.storeBox}>
          <img
            src="https://www.vodafone.cz/public/galleries/29/28151/512x480__ipad_mini_2021_celo_zada-2-1.png
"
          />
          <p>Prodejny Vodafonu</p>
        </div>

        <div className={classes.signalBox}>
          <img
            src="https://www.vodafone.cz/public/galleries/29/28148/512x480__ipad_mini_2021_celo_zada-2-1-1.png
"
          />
          <p>Mapa pokrytí</p>
        </div>

        <div className={classes.roamingBox}>
          <img
            src="https://www.vodafone.cz/public/galleries/29/28145/512x480__ipad_mini_2021_celo_zada-2-1-2.png
"
          />
          <p>Roaming</p>
        </div>

        <div className={classes.carerBox}>
          <img
            src="https://www.vodafone.cz/public/galleries/29/28142/512x480__ipad_mini_2021_celo_zada-2-1-3.png
"
          />
          <p>Kontakty</p>
        </div>
      </div>
    </div>
  );
}

export default Zajimavosti;
