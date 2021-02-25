import React, { useState } from "react";
import firebaseConfig from "../env/firebase";
import Form from "react-bootstrap/Form";
import { FormControl, Button } from "react-bootstrap";

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
    const userRef = firebaseConfig.database().ref("users");
    const userList = {
      emailAddress,
      firstName,
      lastName,
      password,
      admin: false,
    };

    userRef.push(userList);
    /* userRef.setValue(userList); */
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Form>
            <Form.Group>
              <Form.Label style={{float:"left"}}>First Name</Form.Label>
              <Form.Control
                id="firstName"
                placeholder="Ad"
                onChange={handleOnChangeFirstName}
                value={firstName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{float:"left"}}>Last Name</Form.Label>
              <Form.Control
                id="lastName"
                placeholder="Soyad"
                onChange={handleOnChangeLastName}
                value={lastName}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{float:"left"}}>Email</Form.Label>
              <FormControl
                id="email"
                placeholder="Email"
                onChange={handleOnChangeMail}
                value={emailAddress}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label style={{float:"left"}}>Password</Form.Label>
              <FormControl
                id="password"
                placeholder="Password"
                onChange={handleOnChangePassword}
                value={password}
                type="password"
              />
            </Form.Group>

            <Button type="submit" onClick={createUser}>
              Kayıt
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
