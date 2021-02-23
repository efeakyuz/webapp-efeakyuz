import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../firebase";
import content from "../static/registerContent";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="center">
      <h2>Sign In</h2>
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

export default SignUp;
