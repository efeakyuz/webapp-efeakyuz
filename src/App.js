import "./App.css";
import * as React from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DataList from "./components/datalist.component";
import Home from "./components/home.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div className="page-container App">
      <div className="content-wrap">
        <nav className="navbar sticky-top navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Efe Akyuz
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/datalist" activeClassName="hurray">
                Data
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact>
            {" "}
            <Home />{" "}
          </Route>
          <Route exact path="/datalist">
            <DataList />
          </Route>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
