import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../services/Auth";
import Datalist from "./datalist.component";
import DashNavigation from "./DashNavigation";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="App">
      <DashNavigation />
      <div className="container">
        <h1>Welcome</h1>
        <p>This is the dashboard, if you can see this you're logged in.</p>
        <Datalist />
      </div>
    </div>
  );
};

export default Dashboard;
