import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../services/Auth";
import firebaseConfig from "../env/firebase";
import content from "../static/registerContent";
import { Button, Form } from "react-bootstrap";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="center">
      <h2>Log In</h2>
      <Form onSubmit={handleSubmit}>
        {content.inputs.map((input, key) => {
          return (
            <Form.Group controlId={input.name} key={key}>
              <Form.Label>{input.label}</Form.Label>
              <Form.Control type={input.type} placeholder={input.label} />
            </Form.Group>
          );
        })}
        <Form.Group>
          <Button variant="success" type="submit" size="sm" block>
            Log In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LogIn;
