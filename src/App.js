import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./components/views/About";
import Home from "./components/views/Home";
import Tour from "./componentrom "./components/Footer";
import Container from "react-bs/views/Tour";
import { Footer } footstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "./img/logo.20544e60ea4eaeee7661.png";
function App() {
  return (
    <div className="App">
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
              <Nav className="mx-5 d-flex justify-content-center">
                <NavLink
                  to="./Home"
                  className="px-3  text-decoration-none"
                  style={{ color: "red", lineHeight: "60px" }}
                >
                  Home
                </NavLink>

                <NavLink
                  to="./About"
                  className="px-3  text-decoration-none"
                  style={{ color: "red", lineHeight: "60px" }}
                >
                  About
                </NavLink>
                <NavLink
                  to="./Tour"
                  className="px-3 py-auto  text-decoration-none"
                  style={{ color: "red", lineHeight: "60px" }}
                >
                  Tours
                </NavLink>
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

      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
      </Routes>
      <div className="py-5">
        <Footer />;
      </div>
    </div>
  );
}

export default App;
