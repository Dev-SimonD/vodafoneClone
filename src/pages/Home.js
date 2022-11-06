import React, { useEffect } from "react";
import { NavigationMain } from "../layout/NavigationMain";
import { Footer } from "../layout/Footer";
import classes from "./Home.module.css";
import HomeImg from "../asssets//home/homeImg.jpg";
import Clanek from "../components/Clanek";
import Nabidka from "../components/Nabidka";
import IkonyNabidka from "../components/IkonyNabidka";
import ProcVodafone from "../components/ProcVodafone";
import Zajimavosti from "../components/Zajimavosti";
import imgapp1 from "../asssets/home/app1.png";
import imgapp2 from "../asssets/home/app2.png";
import imgapp3 from "../asssets/home/app3.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={`${classes.main}`}>
      <div style={{ width: "100vw", margin: "auto" }}>
        <div className="container">
          <div className={classes.secondImg}>
            <div className={classes.innerImg}>
              <h2 className="text-white" style={{ fontWeight: "bold" }}>
                Kryje vám záda doma i venku
              </h2>
              <p
                className="text-white"
                style={{ width: "80%", paddingBottom: "20px" }}
              >
                PEVNÝ I MOBILNÍ INTERNET S NEJVĚTŠÍM POKRYTÍM
              </p>
              <button className="btn btn-light" style={{ borderColor: "#bbb" }}>
                Chci ušetřit
              </button>
            </div>
          </div>
        </div>
      </div>
      <IkonyNabidka></IkonyNabidka>
      <Nabidka />

      <ProcVodafone />
      <Zajimavosti />
      <h1
        className={classes.headerText}
        style={{ paddingBlock: "40px", marginTop: "40px" }}
      >
        Novinky z Vodafonu
      </h1>
      <Clanek />
      <div className="centered">
        <button
          className="btn btn-light my-4"
          style={{ borderColor: "#222", backgroundColor: "white" }}
        >
          Více článků
        </button>
      </div>
      <div className={classes.apps}>
        <h1 className={classes.appsHeader}>
          Mějte přehled o svých službách díky aplikaci Můj Vodafone
        </h1>
        <div className={classes.appsInner}>
          <img src={imgapp1} />
          <img src={imgapp2} />
          <img src={imgapp3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
