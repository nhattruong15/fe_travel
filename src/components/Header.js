import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../img/logo.20544e60ea4eaeee7661.png";
export class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary position-fixed w-100"
        style={{ zIndex: 999999999 }}
      >
        <Container id="container">
          <img src={img1} alt="BigCo Inc. logo" style={{ height: "50px" }} />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav className="mx-5">
                <Nav.Link
                  href="#deets"
                  className="px-3"
                  style={{ color: "red" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link to className="px-3">
                  About
                </Nav.Link>
                <Nav.Link href="#deets" className="px-3">
                  Tours
                </Nav.Link>
              </Nav>
              <Nav className="mx-5 py-auto">
                <Nav.Link
                  href="login.js"
                  style={{ fontSize: "20px", padding: "17px 10px" }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  href="#memes"
                  className="section__subtitle"
                  style={{ background: "#faa935" }}
                >
                  Register
                </Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
