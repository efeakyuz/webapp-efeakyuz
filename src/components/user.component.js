import React, { useState } from "react";
import firebase from "../firebase.js";
import Form from "react-bootstrap/Form";
import { InputGroup, Col, FormControl, Button } from "react-bootstrap";

export default function User() {
  const [emailAddress, setEmailAddress] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();

  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleOnChangeMail = (e) => {
    setEmailAddress(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const createUser = () => {
    const userRef = firebase.ref("users");
    const userList = {
      emailAddress,
      firstName,
      lastName,
      password,
      admin:false
    };

    userRef.push(userList);
    /* userRef.setValue(userList); */
  };

  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="3">
              <Form.Control
                className="mb-2"
                id="firstName"
                placeholder="Ad"
                onChange={handleOnChangeFirstName}
                value={firstName}
              />
            </Col>
            <Col xs="3">
              <Form.Control
                className="mb-2"
                id="lastName"
                placeholder="Soyad"
                onChange={handleOnChangeLastName}
                value={lastName}
              />
            </Col>
            <Col xs="3">
              <InputGroup className="mb-2">
                <FormControl
                  id="email"
                  placeholder="Email"
                  onChange={handleOnChangeMail}
                  value={emailAddress}
                />
              </InputGroup>
            </Col>
            <Col xs="3">
              <InputGroup className="mb-2">
                <FormControl
                  id="password"
                  placeholder="Password"
                  onChange={handleOnChangePassword}
                  value={password}
                  type="password"
                />
              </InputGroup>
            </Col>
            <Col xs="3">
              <Button type="submit" className="mb-2" onClick={createUser}>
                Kayıt
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
}
