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
      <div className={`container ${classes.myAppsLarge}`}>
        <h1 className={classes.spojteLargeHeader}>Spojte se s Vodafonem</h1>
        <div className={`centered ${classes.spojteLarge}`}>
          <SocialIcon
            url="#"
            network="facebook"
            bgColor="white"
            fgColor="black"
            style={{ height: 33, width: 33 }}
            className={classes.socialIcon2}
          />
          <SocialIcon
            url="#"
            network="twitter"
            bgColor="white"
            fgColor="black"
            style={{ height: 33, width: 33 }}
            className={classes.socialIcon2}
          />
          <SocialIcon
            url="#"
            network="instagram"
            bgColor="white"
            fgColor="black"
            style={{ height: 33, width: 33 }}
            className={classes.socialIcon2}
          />
          <SocialIcon
            url="#"
            network="youtube"
            bgColor="white"
            style={{ height: 33, width: 33 }}
            fgColor="black"
            className={classes.socialIcon2}
          />
          <SocialIcon
            url="#"
            network="email"
            bgColor="white"
            fgColor="black"
            style={{ height: 33, width: 33 }}
            className={classes.socialIcon2}
          />
          <SocialIcon
            url="#"
            network="linkedin"
            bgColor="white"
            fgColor="black"
            style={{ height: 33, width: 33 }}
            className={classes.socialIcon2}
          />
        </div>
      </div>

      <div className={`container row footerList ${classes.footerList}`}>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            U??ite??n????odkazy
          </li>
          <li> Roaming</li>
          <li> Za????n??me s Vodafonem</li>
          <li>Dob??t kredit</li>
          <li>V??e o n??kupu v eShopu</li>
          <li>Mapa pokryt??</li>
          <li>Na??e s????</li>
          <li>Slovn??k pojm??</li>
          <li>M????en?? rychlosti internetu</li>
          <li>Dostupnost internetu</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            Kontakty a ????sla
          </li>
          <li>Podpora</li>
          <li>Kontakty</li>
          <li>Velkoobchod</li>
          <li>Prodejny Vodafonu</li>
          <li>P??ej??t k Vodafonu</li>
          <li>Odeb??rejte newsletter</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            O Vodafonu
          </li>
          <li> O spole??nosti</li>
          <li>Pro?? Vodafone</li>
          <li>Nejen pro m??dia</li>
          <li>Kari??ra</li>
          <li>Dokumenty ke sta??en??</li>
          <li>Udr??iteln?? podnik??n??</li>
          <li>Digit??ln?? rodi??ovstv??</li>
          <li>Nadace Vodafone</li>
        </ul>
        <ul className="col-sm-3" style={{ fontSize: "16px" }}>
          <li className="text-white" style={{ fontSize: "20px" }}>
            Online ??e??en??
          </li>
          <li>M??j Vodafone</li>
          <li>Vodafone galerie</li>
          <li>EET ??? El. evidence tr??eb</li>
          <li>VoLTE</li>
          <li>Wi-Fi vol??n??</li>
          <li>Dal???? online ??e??en??</li>
        </ul>
      </div>
      <div class={` accordion ${classes.myAccordion}`} id="accordionExample">
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
              U??ite??n????odkazy
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
                <li> Za????n??me s Vodafonem</li>
                <li>Dob??t kredit</li>
                <li>V??e o n??kupu v eShopu</li>
                <li>Mapa pokryt??</li>
                <li>Na??e s????</li>
                <li>Slovn??k pojm??</li>
                <li>M????en?? rychlosti internetu</li>
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
              Kontakty a ????sla
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
                <li>P??ej??t k Vodafonu</li>
                <li>Odeb??rejte newsletter</li>
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
                <li> O spole??nosti</li>
                <li>Pro?? Vodafone</li>
                <li>Nejen pro m??dia</li>
                <li>Kari??ra</li>
                <li>Dokumenty ke sta??en??</li>
                <li>Udr??iteln?? podnik??n??</li>
                <li>Digit??ln?? rodi??ovstv??</li>
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
              Online ??e??en??
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
                <li>M??j Vodafone</li>
                <li>Vodafone galerie</li>
                <li>EET ??? El. evidence tr??eb</li>
                <li>VoLTE</li>
                <li>Wi-Fi vol??n??</li>
                <li>Dal???? online ??e??en??</li>
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
      <div
        className={classes.footerBottomSmall}
        style={{ backgroundColor: "#252525" }}
      >
        <div className={`container ${classes.footerBottomSmallInner}`}>
          <h2 className="text-white pt-4 ps-2">English</h2>
          <ul className={classes.bottomul}>
            <li>Mapa webu</li>
            <li>Pr??vn?? podm??nky</li>
            <li>Ochrana soukrom??</li>
          </ul>
          <div className="d-flex justify-content-center align-items-center">
            <p
              className="container"
              style={{
                color: "#979797",
                fontSize: "14px",
                flexWrap: "wrap",
                textAlign: "left",
              }}
            >
              Copyright ?? 2022 Vodafone Czech Republic a.s.{" "}
            </p>
            <div>
              <img src={vodafoneGrey} alt="logo" style={{ padding: "20px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
