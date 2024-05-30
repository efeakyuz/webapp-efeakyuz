import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard"; */
import Home from "./components/Home";
/* import LogIn from "./components/LogIn";
import { AuthProvider } from "./services/Auth"; */
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"
import NotFound from './components/404';
import Footer from './components/footer.component';
import Nav from './components/HomeNavigation';

const App = () => {
  return (
    <>
    <div className="content">
    <Nav/>
      {/* <AuthProvider> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/admin" component={Admin}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={LogIn}/> */}
          <Route component={NotFound}/>
        </Switch>
      </Router>
    {/* </AuthProvider> */}
    </div>
    
    <Footer/>
    </>
  )
}
export default App;
