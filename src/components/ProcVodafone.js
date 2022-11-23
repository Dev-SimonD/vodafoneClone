import React from "react";
import classes from "./ProcVodafone.module.css";
import FiveGImg from "../asssets/procVodafone/fiveg.png";
import MobileImg from "../asssets/procVodafone/mobile.png";
import ChranimeImg from "../asssets/procVodafone/chranime.png";
import SpolecneImg from "../asssets/procVodafone/spolecne.png";

function ProcVodafone() {
  return (
    <div className="container" style={{ maxWidth: "none" }}>
      <h1 className={classes.headerText}>Proč Vodafone</h1>
      <div className={` container ${classes.mainBoxLarge}`}>
        <div className={classes.innerBoxLarge}>
          <div className={classes.itemLarge}>
            <img src={FiveGImg} />
            <h1>GigaSíť 5G</h1>
            <p>Naše síť je spolehlivá a neustále ji vylepšujeme</p>
            <button className="btn btn-light">Více o 5G</button>
          </div>
          <div className={classes.itemLarge}>
            <img src={MobileImg} />
            <h1> Aplikace Můj Vodafone </h1>
            <p>S naší aplikací máte přehled o službách kdykoliv a kdekoliv</p>
            <button className="btn btn-light">Více o aplikaci</button>
          </div>
          <div className={classes.itemLarge}>
            <img src={ChranimeImg} />
            <h1>Chráníme planetu</h1>
            <p>Naše síť využívá 100 % energií z obnovitelných zdrojů</p>
            <button className="btn btn-light">Více o energii</button>
          </div>
          <div className={classes.itemLarge}>
            <img src={SpolecneImg} />
            <h1> Společně pro lepší svět </h1>
            <p>Pomáháme budovat digitální společnost otevřenou všem</p>
            <button className="btn btn-light">Více o společnosti</button>
          </div>
        </div>
      </div>
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
      {/* min width 768px */}

      <div className="centered">
        <button
          className="btn btn-light my-4"
          style={{ borderColor: "#222", backgroundColor: "white" }}
        >
          Více důvodů, proč být s námi
        </button>
      </div>
    </div>
  );
}

export default ProcVodafone;
