import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import firebaseConfig from "../env/firebase";

export default function Navigation() {
  return (
    
          <Button className="signOut"
            variant="danger"
            onClick={() => firebaseConfig.auth().signOut()}
          >
            Sign out
          </Button>
   
  );
}
