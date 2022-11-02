import React from "react";
import IphoneImg from "../../asssets/nabidkaDoporucujeme/iphone.jpg";
import ZvyhodneniImg from "../../asssets/nabidkaDoporucujeme/zvyhodneni.jpg";
import MotorolaImg from "../../asssets/nabidkaDoporucujeme/motorola.png";
import SimImg from "../../asssets/nabidkaDoporucujeme/sim.png";
import classes from "./NabidkaVodafone.module.css";
import NabidkaTarifySmall1 from "../../asssets/nabidkaTarify/tarifyNabidkasmall1.png";

function NabidkaVodafone() {
  return (
    <div className={classes.mainBox}>
      <div className={classes.secondaryBox1}>
        <div className={classes.secondImg}>
          <div className={classes.innerImg}>
            <h2 className="text-black" style={{ fontWeight: "bold" }}>
              Získejte
            </h2>
            <h2>
              {" "}
              o <span className="greenText">4 000 Kč </span> na nový telefon 5G.
            </h2>
            <p
              className="text-black"
              style={{ width: "150px", fontSize: "14px", fontWeight: "normal" }}
            >
              Užijte si naši nejrychlejší síť naplno. K neomezeným tarifům
              můžete získat slevu až 4 000 Kč na nákup 5G telefonu.
            </p>
            <button className="btn btn-danger" style={{ marginTop: "20px" }}>
              Chci telefon
            </button>
          </div>
        </div>
      </div>
      <div className={classes.secondaryBox2} style={{ paddingBottom: "20px" }}>
        <div className={classes.secondImg} id={classes.internetNaDoma}>
          <div className={classes.innerImg}>
            <h2 className="text-white" style={{ width: "50%" }}>
              Neomezené 5G tyrify
            </h2>
            <p className="text-white" style={{ width: "60%" }}>
              Za super ceny jedině u nás
            </p>
          </div>
        </div>
      </div>

      <div
        className={`d-flex container ${classes.smallBoxes}`}
        /* style={{
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
        }} */
      >
        <div
          className={`centered p-2 ${classes.smallBox1}`}
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            width: "100%",
            borderRadius: "10px",
            minHeight: "228px",
          }}
        >
          <img
            src={NabidkaTarifySmall1}
            alt="telefon"
            style={{ maxHeight: "150px", maxWidth: "100%" }}
          />
          <div className="centered" style={{ flexDirection: "column" }}>
            <p className="text-center">Nejlevnější tarify</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#009900" }}
            >
              Sluchatka
            </button>
          </div>
        </div>
        <div
          className={`centered p-2 ${classes.smallBox2}`}
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            width: "100%",
            borderRadius: "10px",
            minHeight: "228px",
          }}
        >
          <img
            src={SimImg}
            alt="sim"
            style={{ maxHeight: "150px", maxWidth: "100%" }}
          />
          <div className="centered" style={{ flexDirection: "column" }}>
            <p>Pro studenty</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#009900" }}
            >
              Od 599kc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NabidkaVodafone;
