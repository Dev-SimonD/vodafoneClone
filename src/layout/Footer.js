import React from "react";
import classes from "./Footer.module.css";
import top from "../asssets/top.png";
import webtop from "../asssets/webtop.png";
import best from "../asssets/best.png";
import leaf from "../asssets/leaf.png";
import vodafoneGrey from "../asssets/vodafoneGreyIcon.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#2f2f2f" }}
      data-aos-once="true"
      data-aos="fade-up"
    >
      {/* <div style={{ padding: "16px" }}>
        <div className="container row footerList">
          <ul className="col-sm-3" style={{ fontSize: "16px" }}>
            <li className="text-white">pro uchazeče</li>
            <li>nabídky práce</li>
            <li>poslat životopis</li>
            <li>práce dle oboru</li>
            <li>vyberte si zaměstnavatele</li>
          </ul>
          <ul className="col-sm-3" style={{ fontSize: "16px" }}>
            <li className="text-white">pro zaměstnavatele</li>
            <li>temporary help</li>
            <li>permanent placement</li>
            <li>inhouse services</li>
            <li>HR solutions</li>
          </ul>
          <ul className="col-sm-3" style={{ fontSize: "16px" }}>
            <li className="text-white">články</li>
            <li>randstad radí</li>
            <li>průvodce zaměstnáním</li>
          </ul>
          <ul className="col-sm-3" style={{ fontSize: "16px" }}>
            <li className="text-white">o nás</li>
            <li>kariéra</li>
            <li>kontakty</li>
            <li>tiskové zprávy</li>
            <li>historie</li>
            <li>pomáháme</li>
          </ul>
          <div className="divider"></div>
        </div> */}
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
        {/* <span>
          <svg width="19" height="19" aria-hidden="true">
            <symbol id="globe" viewBox="8.3 0 107.1 105.4">
              <title>Globe</title>
              <path
                fill="#bcbcbc"
                d="M61.8 0.6c-18.7 0-35.2 9.9-44.4 24.8 -0.6 0.2-1 0.7-1 1.3 0 0.1 0 0.2 0.1 0.3 -4.3 7.6-6.8 16.4-6.8 25.7 0 28.7 23.4 52.1 52.1 52.1 28.7 0 52.1-23.4 52.1-52.1S90.6 0.6 61.8 0.6zM102.1 78.6L87.5 78.6c3.1-6.8 4.9-14.6 5.2-23.1l16.9 0C109.1 64 106.4 71.9 102.1 78.6zM60 100.5c-0.1-0.1-0.2-0.2-0.3-0.2 -8.5-4.5-15-10.9-19.4-18.8l20.1 0v19.1C60.3 100.6 60.2 100.6 60 100.5zM14 55.6l16.9 0c0.2 8.5 1.9 16.2 4.9 23.1L21.6 78.6C17.3 71.9 14.5 64 14 55.6zM63.2 25.3V5c9 4.8 15.8 11.7 20.3 20.3L63.2 25.3zM85 28.1c3.3 7.2 5 15.5 5 24.6l-26.7 0V28.1L85 28.1zM60.4 25.3l-19.9 0c4.5-8.1 11.2-14.7 19.9-19.4V25.3zM60.4 28.1V52.7l-26.7 0c0.1-9.1 2-17.4 5.4-24.6L60.4 28.1zM33.8 55.6l26.7 0v23.1l-21.5 0C35.7 71.9 34 64.1 33.8 55.6zM63.2 100.3V81.4l19.6 0c-4.4 7.6-10.7 13.7-18.9 18C63.6 99.6 63.4 99.9 63.2 100.3zM63.2 78.6V55.6l26.6 0c-0.3 8.6-2.2 16.3-5.5 23.1L63.2 78.6zM109.7 52.7l-17 0c0-9.1-1.6-17.3-4.7-24.6l14.8 0c4.3 7.2 6.8 15.6 6.8 24.6C109.7 52.7 109.7 52.7 109.7 52.7zM101.1 25.3l-14.3 0c-4-8-9.8-14.8-17.4-19.9C82.4 7.5 93.8 14.9 101.1 25.3zM56.1 5.2c-8.2 5.1-14.5 11.9-18.8 20.1l-14.8 0C30.2 14.4 42.3 6.8 56.1 5.2zM20.7 28.1l15.3 0c-3.2 7.3-5 15.5-5.1 24.6l-17 0c0 0 0 0 0-0.1C13.9 43.7 16.4 35.3 20.7 28.1zM23.6 81.5l13.6 0c3.8 7.4 9.3 13.7 16.4 18.4C41.4 97.7 30.7 91 23.6 81.5zM68.4 100.1c7.6-4.7 13.6-11 17.7-18.7l14 0C92.6 91.4 81.3 98.4 68.4 100.1z"
              ></path>
            </symbol>
          </svg>
        </span> */}
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
