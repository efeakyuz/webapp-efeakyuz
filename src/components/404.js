import React from "react";
import { Button } from "react-bootstrap";
import "../content/css/404.css";

const NotFound = () => {
  return (
    <div className="center">
      <h1 className="h1-text">404</h1>
      <p className="pa">Oops! Something is wrong.</p>
      <div className="btn-container">
        <Button variant="primary" size="lg" href="/">
          <i class="icon-home"></i> Go back in initial page, is better.
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
