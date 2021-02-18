import React, { useEffect, useState } from "react";
import firebase from "../firebase.js";
import Form from "react-bootstrap/Form";
import { InputGroup, Col, FormControl, Button } from "react-bootstrap";

export default function User() {
    const [emailAddress, setEmailAddress] = useState();
    const [firstName, setFirstName] = useState();
    const [userId, setUserId] = useState();
    const [id, setId] = useState();

    const handleOnChangeName = (e) => {
        setFirstName(e.target.value);
    }

    const handleOnChangeMail = (e) => {
        setEmailAddress(e.target.value); 
    }

    const handleOnChangeUserId = (e) => {
        setUserId(e.target.value); 
    }
    const handleOnChangeId = (e) => {
        setId(e.target.value); 
    }

    const createUser = () => {
        const userRef = firebase.ref("users");
        const userList = {
            emailAddress,
            firstName,
            userId
        };

        userRef.push(userList);
        /* userRef.setValue(userList); */
    }

    return (
        <div className="card">
        <h5 className="card-header">React Firebase Database CRUD</h5>
        <div className="card-body">
          <Form>
            <Form.Row className="align-items-center">
             {/*  <Col xs="3">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Id
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Id"
                  onChange={handleOnChangeId}
                />
              </Col> */}
              <Col xs="3">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Id
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Id"
                  onChange={handleOnChangeUserId}
                />
              </Col>
              <Col xs="3">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Jane Doe"
                  onChange={handleOnChangeName}
                />
              </Col>
              <Col xs="3">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Mail
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Username"
                    onChange={handleOnChangeMail}
                    value={emailAddress}
                  />
                </InputGroup>
              </Col>
              <Col xs="3">
                <Button type="submit" className="mb-2" onClick={createUser}>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
    )
}
