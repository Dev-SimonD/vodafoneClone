import React from "react";
import { NavigationMain } from "../layout/NavigationMain";
import { Footer } from "../layout/Footer";
import classes from "./Home.module.css";
import HomeImg from "../asssets/homeImg.jpg";
import IphoneImg from "../asssets/iphone.jpg";
import Clanek from "../components/Clanek";
import Nabidka from "../components/Nabidka";
import IkonyNabidka from "../components/IkonyNabidka";

const Home = () => {
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
            <p className="text-white">
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
              Chci usetrit
            </button>
          </div>
        </div>
      </div>
      <IkonyNabidka></IkonyNabidka>
      <Nabidka />
      <div style={{ width: "90vw", margin: "auto" }}>
        <div
          style={{
            maxWidth: "400px",
            marginTop: "30px",
            paddingBottom: "20px",
            position: "relative",
          }}
        >
          <img
            src={IphoneImg}
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
            <h2 className="text-black" style={{ fontWeight: "bold" }}>
              Apple iPhone 13
            </h2>
            <p className="text-black">4 000 Kč výhodněji</p>
            <p
              className="text-black"
              style={{ width: "150px", fontSize: "14px" }}
            >
              Pořiďte si iPhone 13 s neomezeným tarifem výhodněji. Nyní k němu
              získáte i Apple AirPods jen za 1 777 Kč.
            </p>
            <button
              /* style={{
                borderColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }} */
              className="btn btn-danger"
            >
              Chci usetrit
            </button>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Novinky z Vodafonu</h1>
      <Clanek></Clanek>
      <div className="centered">
        <button className="basicBtn">Vice clanku</button>
      </div>
    </div>
  );
};

export default Home;
