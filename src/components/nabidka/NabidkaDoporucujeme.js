import React from "react";
import classes from "./NabidkaDoporucujeme.module.css";
import IphoneImg from "../../asssets/nabidkaDoporucujeme/iphone.jpg";
import ZvyhodneniImg from "../../asssets/nabidkaDoporucujeme/zvyhodneni.jpg";
import MotorolaImg from "../../asssets/nabidkaDoporucujeme/motorola.png";
import SimImg from "../../asssets/nabidkaDoporucujeme/sim.png";

function NabidkaDoporucujeme() {
  return (
    <div className={classes.mainBox}>
      <div
        className={
          classes.secondaryBox1
        } /* style={{ width: "100vw", margin: "auto" }} */
      >
        <div className={classes.secondImg}>
          <div className={classes.innerImg}>
            <h2 className="text-black" style={{ fontWeight: "bold" }}>
              Apple iPhone 13
            </h2>
            <h2>
              {" "}
              o <span className="greenText">4 000 Kč výhodněji</span>
            </h2>
            <p
              className="text-black"
              style={{ width: "150px", fontSize: "14px" }}
            >
              Pořiďte si iPhone 13 s neomezeným tarifem výhodněji. Nyní k němu
              získáte i Apple AirPods jen za 1 777 Kč.
            </p>
            <button className="btn btn-danger" style={{ marginTop: "20px" }}>
              Chci usetrit
            </button>
          </div>
        </div>
      </div>
      <div className={classes.secondaryBox2} style={{ paddingBottom: "20px" }}>
        <div className={classes.secondImg} id={classes.internetNaDoma}>
          <div className={classes.innerImg}>
            <h2 className="text-white" style={{ width: "50%" }}>
              Internet na doma i do mobilu
            </h2>
            <p className="text-white" style={{ width: "60%" }}>
              Za zvýhodněnou cenu díky spojení služeb
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
            <p>Neomezene tarify</p>
            <button
              className="btn btn-success"
              style={{ backgroundColor: "#009900" }}
            >
              Od 599kc
            </button>
          </div>
        </div>
      </div>

      {/* <div className={`discover-block ${classes.myblock}`}>
        <div style={{ margin: "auto" }}>
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
              src={IphoneImg}
              style={{
                borderRadius: "20px",
                width: "80vw",
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
              <h2 className="text-black" style={{ fontWeight: "bold" }}>
                Apple iPhone 13
              </h2>
              <h2>
                {" "}
                o <span className="greenText">4 000 Kč výhodněji</span>
              </h2>
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
        <div style={{ margin: "auto" }}>
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
              src={ZvyhodneniImg}
              style={{
                borderRadius: "20px",
                width: "80vw",
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
            minHeight: "228px",
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
            minWidth: "150px",
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
    </div>
  );
}

export default NabidkaDoporucujeme;
