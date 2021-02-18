import React, { Component } from "react";
import logo from "../logo.svg";

export default class home extends Component {
  render() {
    return (
      <div className="mt-2">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Work in Progress</p>
      </div>
    );
  }
}
