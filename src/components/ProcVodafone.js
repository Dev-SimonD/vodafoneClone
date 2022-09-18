import React from "react";
import classes from "./ProcVodafone.module.css";
import FiveGImg from "../asssets/fiveg.png";
import MobileImg from "../asssets/mobile.png";
import ChranimeImg from "../asssets/chranime.png";
import SpolecneImg from "../asssets/spolecne.png";

function ProcVodafone() {
  return (
    <div className="container">
      <h1 className={classes.headerText}>Proc Vodafone</h1>
      <div className={classes.mainBox}>
        <div className={classes.innerBox}>
          <div className={classes.item}>
            <img src={FiveGImg} />
            <div>
              <h1>GigaSíť</h1>
              <p>Naše síť je spolehlivá a neustále ji vylepšujeme</p>
            </div>
          </div>
          <div className={classes.item}>
            <img src={MobileImg} />
            <div>
              <h1> Aplikace Můj Vodafone </h1>
              <p>S naší aplikací máte přehled o službách kdykoliv a kdekoliv</p>
            </div>
          </div>
          <div className={classes.item}>
            <img src={ChranimeImg} />
            <div>
              <h1>Chráníme planetu</h1>
              <p>Naše síť využívá 100 % energií z obnovitelných zdrojů</p>
            </div>
          </div>
          <div className={classes.item}>
            <img src={SpolecneImg} />
            <div>
              <h1> Společně pro lepší svět </h1>
              <p>Pomáháme budovat digitální společnost otevřenou všem</p>
            </div>
          </div>
        </div>
      </div>
      <div className="centered">
        <button className="basicBtn mt-4">Více důvodů, proč být s námi</button>
      </div>
    </div>
  );
}

export default ProcVodafone;
