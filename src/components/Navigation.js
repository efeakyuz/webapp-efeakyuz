import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import firebaseConfig from "../env/firebase";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Efe Akyuz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Form inline>
          <Button
            variant="danger"
            onClick={() => firebaseConfig.auth().signOut()}
          >
            Sign out
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
