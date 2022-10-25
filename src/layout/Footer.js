import React from "react";
import classes from "./Footer.module.css";
import top from "../asssets/footer/top.png";
import webtop from "../asssets/footer/webtop.png";
import best from "../asssets/footer/best.png";
import leaf from "../asssets/footer/leaf.png";
import vodafoneGrey from "../asssets/footer/vodafoneGreyIcon.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#2f2f2f" }}
      data-aos-once="true"
      data-aos="fade-up"
    >
      <div className={`container row footerList ${classes.footerList}`}>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            Užitečné odkazy
          </li>
          <li> Roaming</li>
          <li> Začínáme s Vodafonem</li>
          <li>Dobít kredit</li>
          <li>Vše o nákupu v eShopu</li>
          <li>Mapa pokrytí</li>
          <li>Naše síť</li>
          <li>Slovník pojmů</li>
          <li>Měření rychlosti internetu</li>
          <li>Dostupnost internetu</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            Kontakty a čísla
          </li>
          <li>Podpora</li>
          <li>Kontakty</li>
          <li>Velkoobchod</li>
          <li>Prodejny Vodafonu</li>
          <li>Přejít k Vodafonu</li>
          <li>Odebírejte newsletter</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            O Vodafonu
          </li>
          <li> O společnosti</li>
          <li>Proč Vodafone</li>
          <li>Nejen pro média</li>
          <li>Kariéra</li>
          <li>Dokumenty ke stažení</li>
          <li>Udržitelné podnikání</li>
          <li>Digitální rodičovství</li>
          <li>Nadace Vodafone</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            Online řešení
          </li>
          <li>Můj Vodafone</li>
          <li>Vodafone galerie</li>
          <li>EET – El. evidence tržeb</li>
          <li>VoLTE</li>
          <li>Wi-Fi volání</li>
          <li>Další online řešení</li>
        </ul>
      </div>
      <div
        class={` accordion container ${classes.myAccordion}`}
        id="accordionExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button
              class="accordion-button collapsed text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
              style={{ fontSize: "20px", paddingInline: "0" }}
            >
              Užitečné odkazy
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div class={`accordion-body ${classes.footerAccordionBody}`}>
              <ul>
                <li> Roaming</li>
                <li> Začínáme s Vodafonem</li>
                <li>Dobít kredit</li>
                <li>Vše o nákupu v eShopu</li>
                <li>Mapa pokrytí</li>
                <li>Naše síť</li>
                <li>Slovník pojmů</li>
                <li>Měření rychlosti internetu</li>
                <li>Dostupnost internetu</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div className="divider"></div>
          <h2 class="accordion-header" id="headingNine">
            <button
              class="accordion-button collapsed text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
              style={{ fontSize: "20px", paddingInline: "0" }}
            >
              Kontakty a čísla
            </button>
          </h2>
          <div
            id="collapseNine"
            class="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div class={`accordion-body ${classes.footerAccordionBody}`}>
              <ul>
                <li>Podpora</li>
                <li>Kontakty</li>
                <li>Velkoobchod</li>
                <li>Prodejny Vodafonu</li>
                <li>Přejít k Vodafonu</li>
                <li>Odebírejte newsletter</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div className="divider"></div>

          <h2 class="accordion-header" id="headingTen">
            <button
              class="accordion-button collapsed text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
              style={{ fontSize: "20px", paddingInline: "0" }}
            >
              O Vodafonu
            </button>
          </h2>
          <div
            id="collapseTen"
            class="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div class={`accordion-body ${classes.footerAccordionBody}`}>
              <ul>
                <li> O společnosti</li>
                <li>Proč Vodafone</li>
                <li>Nejen pro média</li>
                <li>Kariéra</li>
                <li>Dokumenty ke stažení</li>
                <li>Udržitelné podnikání</li>
                <li>Digitální rodičovství</li>
                <li>Nadace Vodafone</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          {<div className="divider"></div>}
          <h2 class="accordion-header" id="headingEleven">
            <button
              class="accordion-button collapsed text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
              aria-expanded="false"
              aria-controls="collapseEleven"
              style={{ fontSize: "20px", paddingInline: "0" }}
            >
              Online řešení
            </button>
          </h2>

          <div
            id="collapseEleven"
            class="accordion-collapse collapse"
            aria-labelledby="headingEleven"
            data-bs-parent="#accordionExample"
          >
            <div class={`accordion-body ${classes.footerAccordionBody}`}>
              <ul>
                <li>Můj Vodafone</li>
                <li>Vodafone galerie</li>
                <li>EET – El. evidence tržeb</li>
                <li>VoLTE</li>
                <li>Wi-Fi volání</li>
                <li>Další online řešení</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`pt-4 d-flex align-items-center justify-content-center ${classes.footerIcons}`}
      >
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <img src={top} alt="top" />
          <p
            className={`text-center ${classes.greytext}`}
            style={{ fontSize: "10px" }}
          >
            top text
          </p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {" "}
          <img src={webtop} alt="webtop" />
          <p
            className={`text-center ${classes.greytext}`}
            style={{ fontSize: "10px" }}
          >
            webtop text
          </p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {" "}
          <img src={best} alt="best" />
          <p
            className={`text-center ${classes.greytext}`}
            style={{ fontSize: "10px" }}
          >
            best
          </p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
          s
        >
          {" "}
          <img src={leaf} alt="leaf" />
          <p
            className={`text-center ${classes.greytext}`}
            style={{ fontSize: "10px" }}
          >
            leaf
          </p>
        </div>
      </div>
      <h1 className={classes.spojte}>Spojte se s Vodafonem</h1>
      <div className="centered">
        <SocialIcon
          url="#"
          network="facebook"
          bgColor="white"
          fgColor="black"
          style={{ height: 33, width: 33 }}
          className={classes.socialIcon}
        />
        <SocialIcon
          url="#"
          network="twitter"
          bgColor="white"
          fgColor="black"
          style={{ height: 33, width: 33 }}
          className={classes.socialIcon}
        />
        <SocialIcon
          url="#"
          network="instagram"
          bgColor="white"
          fgColor="black"
          style={{ height: 33, width: 33 }}
          className={classes.socialIcon}
        />
        <SocialIcon
          url="#"
          network="youtube"
          bgColor="white"
          style={{ height: 33, width: 33 }}
          fgColor="black"
          className={classes.socialIcon}
        />
        <SocialIcon
          url="#"
          network="email"
          bgColor="white"
          fgColor="black"
          style={{ height: 33, width: 33 }}
          className={classes.socialIcon}
        />
        <SocialIcon
          url="#"
          network="linkedin"
          bgColor="white"
          fgColor="black"
          style={{ height: 33, width: 33 }}
          className={classes.socialIcon}
        />
      </div>

      <hr style={{ color: "white", margin: "0" }}></hr>
      <div style={{ backgroundColor: "#252525" }}>
        <h2 className="text-white pt-4 ps-2">English</h2>
        <ul className={classes.bottomul}>
          <li>Mapa webu</li>
          <li>Právní podmínky</li>
          <li>Ochrana soukromí</li>
        </ul>
        <div className="d-flex justify-content-center align-items-center">
          <p
            className="container"
            style={{ color: "#979797", fontSize: "14px", flexWrap: "wrap" }}
          >
            Copyright © 2022 Vodafone Czech Republic a.s.{" "}
          </p>
          <div>
            <img src={vodafoneGrey} alt="logo" style={{ padding: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
