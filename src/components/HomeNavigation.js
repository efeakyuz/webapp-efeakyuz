import React from "react";
import { Navbar } from "react-bootstrap";
import "../content/css/home.css"

const Nav = () => {
  return (
    <Navbar className="navi" sticky="top">
      <Navbar.Brand href="/" className="logo">efeakyuz<span className="blinking-cursor">|</span></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="logo">
          <a href="mailto:hey@efeakyuz.com">Contact</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;