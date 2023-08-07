import React, { Component } from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import img7 from "../img/experience.f276d1992082e5879afb.png";
import img12 from "../img/gallery-01.3c21b9a6df0243f772c5 (1).jpg";
import img13 from "../img/gallery-02.c9ae06755eebce595a38.jpg";
import img14 from "../img/gallery-03.9acd7c84d293f45ac15e.jpg";
import img15 from "../img/gallery-04.4c0ac04026db9075b42b.jpg";
import img16 from "../img/gallery-05.b327cf60ba18a59db408.jpg";
import img17 from "../img/gallery-06.66c107edd159054ae8cf.jpg";
import img18 from "../img/gallery-07.45ab035583b65864c53a.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

export class Exprerience extends Component {
  render() {
    return (
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="experience__content">
              <h3 className="section__subtitle">Experience</h3>
              <h2 className="service_title">
                With Duong our all experience
                <br />
                we will serve you
              </h2>
              <p>
                Duong ipsum dolor sit consectetur.
                <br /> tempppppppppppppppppppppppppp
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Year experience</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img src={img7} alt="Bi  gCo Inc. logo" className="img-fluid" />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12">
              <h3
                className="section_subtitle"
                style={{ lineHeight: "1.5", fontWeight: "50" }}
              >
                Gallery
              </h3>
              <h2 className="featured__tour-title">
                Visit our customers tour gallery
              </h2>
            </div>
            <div id="img_gallery" className="col-lg-12">
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  <div
                    id="div-child"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      placecontent: "stretch flex-start",
                      flex: "1 1 0%",
                      width: "0px",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={img12}
                      alt=""
                      style={{
                        width: "100%",
                        height: "30",
                        display: "block",
                      }}
                    />
                    <img
                      src={img16}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      placecontent: "stretch flex-start",
                      flex: "1 1 0%",
                      width: "0px",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={img13}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                    <img
                      src={img17}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      placecontent: "stretch flex-start",
                      flex: "1 1 0%",
                      width: "0px",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={img14}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                    <img
                      src={img18}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      placecontent: "stretch flex-start",
                      flex: "1 1 0%",
                      width: "0px",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={img15}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                    <img
                      src={img13}
                      alt=""
                      style={{
                        width: "100%",
                        display: "block",
                        borderradius: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
