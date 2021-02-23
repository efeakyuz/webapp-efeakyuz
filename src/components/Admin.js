import React, { useContext } from "react";
import { AuthContext } from "../services/Auth";
import { Link } from "react-router-dom";

const Admin = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="center">
            <h1>Admin Page</h1>
            {currentUser ? (
            <p>
                You are logged - <Link to="/dashboard">View Dashboard</Link>
            </p>
            ) : (
                <p>
                    <Link to="/login">Log In</Link>
                </p>
            )}   
        </div>
    );
};

export default Admin;