import React, { useEffect } from "react";
import { NavigationMain } from "../layout/NavigationMain";
import { Footer } from "../layout/Footer";
import classes from "./Home.module.css";
import HomeImg from "../asssets/homeImg.jpg";
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
      {/* <div style={{ width: "90vw", margin: "auto" }}>
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
            <button className="btn btn-danger">Chci usetrit</button>
          </div>
        </div>
      </div>

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
            src={ZvyhodneniImg}
            style={{
              borderRadius: "20px",
              height: "240px",
              width: "90vw",
              objectFit: "cover",
            }}
          />

          <div
            className="position-absolute"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          >
            <div>
              <h2 className="text-white" style={{ width: "50%" }}>
                Internet na doma i do mobilu
              </h2>
              <p className="text-white" style={{ width: "60%" }}>
                Za zvýhodněnou cenu díky spojení služeb
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex container"
        style={{
          justifyContent: "center",
          gap: "10px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          className="centered p-2"
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            minWidth: "150px",
            borderRadius: "10px",
          }}
        >
          <img
            src={MotorolaImg}
            alt="telefon"
            style={{ maxHeight: "150px", maxWidth: "100%" }}
          />
          <div className="centered" style={{ flexDirection: "column" }}>
            <p className="text-center">Motorola Moto</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#009900" }}
            >
              Sluchatka
            </button>
          </div>
        </div>
        <div
          className="centered p-2"
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <img
            src={SimImg}
            alt="sim"
            style={{ maxHeight: "150px", maxWidth: "100%" }}
          />
          <div className="centered" style={{ flexDirection: "column" }}>
            <p>Neomezene tarify</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#009900" }}
            >
              Od 599kc
            </button>
          </div>
        </div>
      </div> */}
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
