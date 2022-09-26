import React from "react";
import IphoneImg from "../../asssets/iphone.jpg";
import ZvyhodneniImg from "../../asssets/zvyhodneni.jpg";
import MotorolaImg from "../../asssets/motorola.png";
import SimImg from "../../asssets/sim.png";
function NabidkaTelefony() {
  return (
    <div>
      {" "}
      <div style={{ width: "90vw", margin: "auto" }}>
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
              Telefony...
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
          className="moveUpBox"
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
              /* width: "50%", */
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
      </div>
    </div>
  );
}

export default NabidkaTelefony;
