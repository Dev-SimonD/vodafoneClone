import React from "react";
import classes from "./Footer.module.css";
import top from "../asssets/top.png";
import webtop from "../asssets/webtop.png";
import best from "../asssets/best.png";
import leaf from "../asssets/leaf.png";
import vodafoneGrey from "../asssets/vodafoneGreyIcon.png";

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
            <div class="accordion-body">
              <ul>
                <li>nabídky práce</li>
                <li>poslat životopis</li>
                <li>práce dle oboru</li>
                <li>vyberte si zaměstnavatele</li>
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
            <div class="accordion-body">
              <ul>
                <li>temporary help</li>
                <li>permanent placement</li>
                <li>inhouse services</li>
                <li>HR solutions</li>
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
            <div class="accordion-body">
              <ul>
                <li>randstad radí</li>
                <li>průvodce zaměstnáním</li>
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
            <div class="accordion-body">
              <ul>
                <li>kariéra</li>
                <li>kontakty</li>
                <li>tiskové zprávy</li>
                <li>historie</li>
                <li>pomáháme</li>
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
          <p className={`text-center ${classes.greytext}`}>top text</p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {" "}
          <img src={webtop} alt="webtop" />
          <p className={`text-center ${classes.greytext}`}>webtop text</p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          {" "}
          <img src={best} alt="best" />
          <p className={`text-center ${classes.greytext}`}>best</p>
        </div>
        <div
          style={{ width: "100px" }}
          className="d-flex justify-content-center align-items-center flex-column"
          s
        >
          {" "}
          <img src={leaf} alt="leaf" />
          <p className={`text-center ${classes.greytext}`}>leaf</p>
        </div>
      </div>
      <h1 className={classes.spojte}>Spojte se s Vodafonem</h1>
      <div>Icons</div>
      <hr style={{ color: "white", margin: "0" }}></hr>
      <div style={{ backgroundColor: "#252525" }}>
        <h2 className="text-white pt-4">🌎 English</h2>
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
