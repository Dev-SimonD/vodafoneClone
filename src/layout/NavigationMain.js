import React from "react";
import { NavLink } from "react-router-dom";

export const NavigationMain = () => {
  return (
    <div className="menuMain position-fixed">
      <div className="container" style={{ paddingInline: "30px" }}>
        <div
          className="d-flex"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <h2 className="text-white" style={{ marginBottom: "0" }}>
            randstad
          </h2>
          <div className="navbar" /*  style={{ widt: "50px" }} */>
            <button
              type="button"
              id="hamburger"
              class="navbar-toggler"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                  <div class="modal-header" style={{ paddingInline: "20px" }}>
                    <h5
                      class="modal-title text-black"
                      style={{ paddingLeft: "30px" }}
                      id="exampleModalLabel"
                    >
                      Randstad
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ul>
                      <NavLink to="/">home</NavLink>
                      <NavLink to="/about">about</NavLink>
                    </ul>
                  </div>
                  {/* <div class="modal-body">
                    <div class="accordion container" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            hledám praci
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            hledám zaměstnavatele
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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

                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            o nás
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
                            <ul>
                              <li>randstad radí</li>
                              <li>průvodce zaměstnáním</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        {<div className="divider"></div>}
                        <h2 class="accordion-header" id="headingFour">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            employer brand research
                          </button>
                        </h2>

                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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
                      <div class="accordion-item">
                        {<div className="divider"></div>}
                        <h2 class="accordion-header" id="headingFive">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            HR novinky
                          </button>
                        </h2>

                        <div
                          id="collapseFive"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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
                      <div class="accordion-item">
                        {<div className="divider"></div>}
                        <h2 class="accordion-header" id="headingSix">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            karierní poradna
                          </button>
                        </h2>

                        <div
                          id="collapseSix"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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
                      <div class="accordion-item">
                        {<div className="divider"></div>}
                        <h2 class="accordion-header" id="headingSeven">
                          <button
                            class="accordion-button collapsed accordion-menu-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            pobočky
                          </button>
                        </h2>

                        <div
                          id="collapseSeven"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body accordion-menu-body">
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
                  </div> */}
                  {/* <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider" style={{ marginTop: "10px" }}></div>
        {/*  <div style={{ height: "100%", padding: "30px 0" }}>
          <h1
            className="pb-3"
            style={{
              fontSize: "32px",
              letterSpacing: "1px",
              lineHeight: "40px",
            }}
          >
            najděte si vysněnou práci.
          </h1>

          <div>
            
            <a
              className="py-3 text-white"
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              použít současnou polohu
            </a>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", height: "60px", margin: "40px 0" }}
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <span style={{ letterSpacing: "1px" }}>začít s hledáním</span>
          </button>
          <h4 className="pt-3">25 pracovních pozic</h4>
        </div> */}
      </div>
    </div>
  );
};
