import React from "react";
import Card from "../UI/Card";
import classes from "./Clanek.module.css";

function Clanek() {
  return (
    <div className={`container ${classes.mainBox}`} style={{ width: "100%" }}>
      <Card>
        <div className="col-xs2 col-sm3 ">
          <img
            className={classes.clanekImage}
            src="https://www.vodafone.cz/public/galleries/33/32279/_thbs_/900X400__header-back-to-school.jpg"
            style={{ width: "100%" }}
          />
          <div className="px-3 py-1">
            <h1
              style={{
                lineHeight: "1.3",
                fontSize: "18px",
                paddingTop: "20px",
              }}
            >
              Levný a jednoduchý internet věcí. Vodafone spustil novou službu
              IoT Easy Connect
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                marginBlock: "40px",
              }}
            >
              DescripPro podnikatele a firmy spustil Vodafone službu, která jim
              snadno umožní připojit zařízení k internetu věcí. Speciální...
            </p>
            <a href="#">{`Celý článek >`}</a>
          </div>
        </div>
      </Card>
      <Card>
        <div className="col-xs2 col-sm3 ">
          <img
            className={classes.clanekImage}
            src="https://www.vodafone.cz/public/galleries/33/32580/_thbs_/900X400__student-header.jpg"
            style={{ width: "100%" }}
          />
          <div className="px-3 py-1">
            <h1
              style={{
                lineHeight: "1.3",
                fontSize: "18px",
                paddingTop: "20px",
              }}
            >
              Levný a jednoduchý internet věcí. Vodafone spustil novou službu
              IoT Easy Connect
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                marginBlock: "40px",
              }}
            >
              DescripPro podnikatele a firmy spustil Vodafone službu, která jim
              snadno umožní připojit zařízení k internetu věcí. Speciální...
            </p>
            <a href="#">{`Celý článek >`}</a>
          </div>
        </div>
      </Card>
      <Card>
        <div className="col-xs2 col-sm3">
          <img
            className={classes.clanekImage}
            src="https://www.vodafone.cz/public/galleries/35/34290/_thbs_/900X400__kyberpohadky-obal.png"
            style={{ width: "100%" }}
          />
          <div className="px-3 py-1">
            <h1
              style={{
                lineHeight: "1.3",
                fontSize: "18px",
                paddingTop: "20px",
              }}
            >
              Levný a jednoduchý internet věcí. Vodafone spustil novou službu
              IoT Easy Connect
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                marginBlock: "40px",
              }}
            >
              DescripPro podnikatele a firmy spustil Vodafone službu, která jim
              snadno umožní připojit zařízení k internetu věcí. Speciální...
            </p>
            <a href="#">{`Celý článek >`}</a>
          </div>
        </div>
      </Card>
      <Card>
        <div className="col-xs2 col-sm3">
          <img
            className={classes.clanekImage}
            src="https://www.vodafone.cz/public/galleries/35/34080/_thbs_/900X400__hellfest.jpg"
            style={{ width: "100%" }}
          />
          <div className="px-3 py-1">
            <h1
              style={{
                lineHeight: "1.3",
                fontSize: "18px",
                paddingTop: "20px",
              }}
            >
              Levný a jednoduchý internet věcí. Vodafone spustil novou službu
              IoT Easy Connect
            </h1>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                marginBlock: "40px",
              }}
            >
              DescripPro podnikatele a firmy spustil Vodafone službu, která jim
              snadno umožní připojit zařízení k internetu věcí. Speciální...
            </p>
            <a href="#">{`Celý článek >`}</a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Clanek;
