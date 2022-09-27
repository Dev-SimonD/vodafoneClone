import React, { useEffect } from "react";
import { NavigationMain } from "../layout/NavigationMain";
import { Footer } from "../layout/Footer";
import classes from "./Home.module.css";
import HomeImg from "../asssets//home/homeImg.jpg";
/* import IphoneImg from "../asssets/iphone.jpg";
import ZvyhodneniImg from "../asssets/zvyhodneni.jpg";
import MotorolaImg from "../asssets/motorola.png";
import SimImg from "../asssets/sim.png"; */
import Clanek from "../components/Clanek";
import Nabidka from "../components/Nabidka";
import IkonyNabidka from "../components/IkonyNabidka";
import ProcVodafone from "../components/ProcVodafone";
import Zajimavosti from "../components/Zajimavosti";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={` ${classes.main}`}>
      <div style={{ width: "90vw", margin: "auto" }}>
        <div
          style={{
            maxWidth: "400px",
            marginTop: "30px",
            paddingBottom: "20px",
            position: "relative",
          }}
        >
          <img src={HomeImg} style={{ width: "100%", borderRadius: "20px" }} />

          <div
            className="position-absolute"
            style={{
              position: "absolute",
              top: "50px",
              left: "20px",
            }}
          >
            <h2 className="text-white" style={{ fontWeight: "bold" }}>
              Kryje vám záda doma i venku
            </h2>
            <p
              className="text-white"
              style={{ width: "80%", paddingBottom: "20px" }}
            >
              PEVNÝ I MOBILNÍ INTERNET S NEJVĚTŠÍM POKRYTÍM
            </p>
            <button
              /* style={{
                borderColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }} */
              className="basicBtn"
            >
              Chci ušetřit
            </button>
          </div>
        </div>
      </div>
      <IkonyNabidka></IkonyNabidka>
      <Nabidka />

      <ProcVodafone />
      <Zajimavosti />
      <h1 className={classes.headerText} style={{ marginTop: "30px" }}>
        Novinky z Vodafonu
      </h1>
      <Clanek />
      <div className="centered">
        <button className="basicBtn">Vice clanku</button>
      </div>
    </div>
  );
};

export default Home;
