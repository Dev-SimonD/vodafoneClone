import React, { useEffect } from "react";
import classes from "./SpojteSluzby.module.css";
import SpojteTarifyImg from "../asssets/spojteTarifyImg.jpg";
import SpojteTarifyImg2 from "../asssets/spojteTarifyJakToFunguje.png";
import CastoKladeneDotazy from "../components/CastoKladeneDotazy";
function SpojteSluzby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div style={{ width: "90vw", margin: "auto" }} className="pt-4">
        <div
          style={{
            maxWidth: "400px",
            marginBottom: "30px",

            position: "relative",
            borderRadius: "20px",
          }}
          className="moveUpBox"
        >
          <img
            src={SpojteTarifyImg}
            style={{ width: "100%", borderRadius: "20px" }}
          />

          <div
            className="position-absolute"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              /* width: "50%", */
            }}
          >
            <h2 className="text-white" style={{ fontWeight: "bold" }}>
              Pořiďte si náš internet na doma i do mobilu
            </h2>
            <p
              className="text-white mt-4"
              style={{ width: "150px", fontSize: "18px" }}
            >
              Za zvýhodněnou cenu díky spojení služeb
            </p>
            <button className="btn basicBtn mt-4">Ukázat příklady</button>
          </div>
        </div>
      </div>
      <h1 className={classes.headerText} style={{ marginTop: "30px" }}>
        Jak spojení služeb funguje?
      </h1>
      <p style={{ textAlign: "center" }}>
        <b>Pevný internet od Vodafonu</b> je základ. Díky němu získáte už
        napořád <b>levy na další služby.</b>
      </p>
      <div className="container">
        <img
          src={SpojteTarifyImg2}
          style={{ width: "90vw", maxWidth: "100%", margin: "auto" }}
        />{" "}
      </div>
      <h1 className={classes.headerText} style={{ marginTop: "30px" }}>
        Prohlédněte si příklady, jak{" "}
        <span className="greenText">můžete ušetřit</span>
      </h1>
      <h1 className={classes.headerText} style={{ marginTop: "30px" }}>
        Často kladené dotazy
      </h1>
      <div>
        <CastoKladeneDotazy />
      </div>
    </div>
  );
}

export default SpojteSluzby;
