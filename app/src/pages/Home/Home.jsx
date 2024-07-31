import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="main">
        <div className="page1">
          <div className="nav">
            <div className="nav-left">
              <h1>DownWatch</h1>
            </div>
            <div className="nav-right">
              <h4>
                <a href="">Sign In</a>
              </h4>
              <h4>
                <a href="">Contact</a>
              </h4>
            </div>
          </div>
          <div className="center">
            <div className="heading">
              <h1 className="heading-1">Uptime is everything &amp; </h1>
              <br />
              <h1 className="heading-2">we know it.</h1>{" "}
            </div>
            <p>
              Ensure your website stays up and running with real-time monitoring
              and instant alerts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
