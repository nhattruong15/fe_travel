import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import img8 from "../img/ava-1.c185d7723fe40ec46830.jpg";
import img9 from "../img/ava-2.11e918c656d0c7851624.jpg";
import img10 from "../img/ava-3.1442075049ece43143f2.jpg";

import Card from "react-bootstrap/Card";
import OwlCarousel from "react-owl-carousel";
import { Subrise } from "./Subrise";

import "owl.carousel/dist/assets/owl.carousel.min.css";

import "owl.carousel/dist/assets/owl.theme.default.css";

const state = {
  0: {
    items: 1,
  },
  400: {
    items: 1,
  },
  600: {
    items: 1,
  },
  700: {
    items: 1,
  },
  1000: {
    items: 3,
  },
};
export class Owlcarousel extends Component {
  render() {
    return (
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="section__subtitle">Fans Love</h3>
            <h2 className="gallery__title">What our fans say about us</h2>
          </div>
          <div className="col-lg-12">
            <OwlCarousel
              className="owl-theme mt-5"
              loop
              margin={20}
              responsive={state}
            >
              <Card className="border-0 px-3" style={{ width: "20rem" }}>
                <Card.Body className="p-0">
                  <Card.Text style={{ textAlign: "justify" }}>
                    Our Vietnam is a beautiful country. We have a variety of
                    landscapes which are widely well-known such as Ha Long Bay,
                    Hoi An Old quarter and Phong Nha Ke Bang cave. A long coast
                    with many attractive beaches is also our recognized
                    reputation.
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center gap-5 mt-2 mx-auto">
                  <Card.Img
                    variant="top"
                    src={img8}
                    className="w-25 h-25 rounded-2 mb-2 pm-3"
                  />
                  <div className="mb-0 mt-3">
                    <h6> Chan Hiep</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </Card>
              <Card className="border-0" style={{ width: "20rem" }}>
                <Card.Body className="p-0">
                  <Card.Text style={{ textAlign: "justify" }}>
                    Our Vietnam is a beautiful country. We have a variety of
                    landscapes which are widely well-known such as Ha Long Bay,
                    Hoi An Old quarter and Phong Nha Ke Bang cave. A long coast
                    with many attractive beaches is also our recognized
                    reputation.
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center gap-5 mt-2 mx-auto">
                  <Card.Img
                    variant="top"
                    src={img9}
                    className="w-25 h-25 rounded-2 mb-2 pm-3"
                  />
                  <div className="mb-0 mt-3">
                    <h6> Van Duong</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </Card>
              <Card className="border-0 px-3" style={{ width: "20rem" }}>
                <Card.Body className="p-0">
                  <Card.Text style={{ textAlign: "justify" }}>
                    Our Vietnam is a beautiful country. We have a variety of
                    landscapes which are widely well-known such as Ha Long Bay,
                    Hoi An Old quarter and Phong Nha Ke Bang cave. A long coast
                    with many attractive beaches is also our recognized
                    reputation.
                  </Card.Text>
                </Card.Body>
                <div className="d-flex align-items-center gap-5 mt-2 ">
                  <Card.Img
                    variant="top"
                    src={img10}
                    className="w-25 h-25 rounded-2 mb-2 pm-3 "
                  />
                  <div className="mb-0 mt-3">
                    <h6> Chan Hiep</h6>
                    <p>Customer</p>
                  </div>
                </div>
              </Card>
            </OwlCarousel>
          </div>
        </div>
        <Subrise />
      </Container>
    );
  }
}
