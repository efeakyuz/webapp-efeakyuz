import React, { useEffect, useState } from "react";
import firebaseConfig from "../firebase.js";
import UserCard from "./user-card.component.js";
import User from "./user.component.js";

export default function Datalist() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    const userRef = firebaseConfig.database().ref("users");
    userRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const userList = [];
      for (let id in data) {
        userList.push({id, ...data[id]});
      }
      console.log(userList);
      setUserList(userList);
    });
  }, []);

  return (
    <div className="mt-5">
      <User/>
      <div className="container">
        <div className="row mt-5 ">
          {userList
            ? userList.map((x, i) => (
                <div className="col-sm-4" key={i}>
                <UserCard x={x}/>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
