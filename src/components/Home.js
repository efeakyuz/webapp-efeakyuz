import React from "react";
import "../content/css/home.css";
import * as Icon from "react-bootstrap-icons";

const Home = () => {
  return (
    <main>
      <div className="container container-top">
        <div className="grid-container">
          <div className="entry">
            <div className="entry-text">Hi!</div>
          </div>
          <div className="row1">
            <div className="info-text">I'm Efe</div>
          </div>
          <div className="row2">
            <div className="info-text">Frontend Developer, Designer and</div>
          </div>
          <div className="row3">
            <div className="info-text">Aviation Freak</div>
          </div>
          <div className="row4">
            <div className="info-text">
              Currently Working at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.smartapps.com.tr"
              >
                Smartapps
              </a>
            </div>
          </div>
          <div className="row5">
            <a href="https://github.com/efeakyuz">
              <Icon.Github />
            </a>
            <a href="https://twitter.com/efenakyuz">
              <Icon.Twitter />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
