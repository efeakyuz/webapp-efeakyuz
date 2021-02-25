import React from "react";
import { Button } from "react-bootstrap";
import firebaseConfig from "../env/firebase";

export default function UserCard({x}) {

    const deleteUser = () => {
        const dataRef = firebaseConfig.database().ref("users").child(x.id);
        console.log(x)
        dataRef.remove();
    }

  return (
    <div className="card m-2" style={{ width: "18rem", height: "10rem" }}>
      <div className="card-body">
        <h5 className="card-title">{x.firstName + " " + x.lastName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{x.emailAddress}</h6>
      </div>
      <Button className="bg-danger" onClick={deleteUser}>
        Delete
      </Button>
    </div>
  );
}
