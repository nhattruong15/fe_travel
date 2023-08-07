import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import img2 from "../img/world.12b28835610f2449f5e9.png";
import img3 from "../img/hero-img01.cdfa5451ce66d17ee1f8.jpg";
import img4 from "../img/hero-img02.c5c2185a4223b66365fb.jpg";
import img5 from "../img/gallery-07.45ab035583b65864c53a.jpg";
import img6 from "../img/data1.png";

export class Content extends Component {
  render() {
    return (
      <Container className="py-5">
        <Row className="mt-5">
          <div className="col-lg-6 my-5">
            <div className="hero_content">
              <div className="hero__subtitle d-flex align-items-center">
                <h3
                  className="section_subtitle"
                  style={{ lineHeight: "1.5", fontWeight: "50" }}
                >
                  Know Before You Go
                </h3>
                <img
                  src={img2}
                  alt="BigCo Inc. logo"
                  style={{ height: "50px" }}
                />
              </div>
              <h1 className="my-3">
                Traveling opens the door to creating
                <span> memories with duong</span>
              </h1>
              <p className="my-3">
                Our Vietnam is a beautiful country. We have a variety of
                landscapes which are widely well-known such as Ha Long Bay, Hoi
                An Old quarter and Phong Nha Ke Bang cave. A long coast with
                many attractive beaches is also our recognized reputation.
                Although Vietnam was a rich traditional culture country, it has
                undergone a great change since 1945 due to the war. But you can
                still find spiritual values in traditional arts performances
                such as singing Tru, Cheo, Tuong, water puppet, ancient
                artifacts at the museums at the cultural centers in Hanoi and
                Saigon.
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="hero_imgbox">
              <img
                src={img3}
                alt="BigCo Inc. logo"
                // style={{ height: "50px" }}
              />
            </div>
          </div>
          <div className="col-lg-2 mt-4">
            <div className="hero_imgbox">
              <img src={img4} alt="BigCo Inc. logo" />
            </div>
          </div>
          <div className="col-lg-2 mt-5">
            <div className="hero_imgbox">
              <img
                src={img5}
                alt="BigCo Inc. logo"
                // style={{ height: "50px" }}
              />
            </div>
          </div>
        </Row>
        <div className="py-5">
          <div className="row">
            <div className="col-lg-3">
              <h5 className="service_subtitle">What we serve</h5>
              <h2 className="service_title">We offer our best services</h2>
            </div>
            <div className="mb-4 col-sm-12 col-md-6 col-lg-3">
              <div className="service_item">
                <div className="service_img">
                  <img src={img6} alt="BigCo Inc. logo" />
                </div>
                <h6>Best Tour Guide</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="mb-4 col-sm-12 col-md-6 col-lg-3">
              <div className="service_item">
                <div className="service_img">
                  <img src={img6} alt="BigCo Inc. logo" />
                </div>
                <h6>Calculate Weather</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="mb-4 col-sm-12 col-md-6 col-lg-3">
              <div className="service_item">
                <div className="service_img">
                  <img src={img6} alt="BigCo Inc. logo" />
                </div>
                <h6>Customization</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
