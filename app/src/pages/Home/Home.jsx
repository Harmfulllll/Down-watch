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
                <a href="/login">Sign In</a>
              </h4>
              <h4>
                <a href="https://github.com/Harmfulllll">Contact</a>
              </h4>
            </div>
          </div>
          <div className="center">
            <div className="heading">
              <h1 className="heading-1">Uptime is everything &amp; </h1>
              <br />
              <h1 className="heading-2">we know it</h1>{" "}
            </div>
            <p>
              Ensure your website stays up and running with <br />{" "}
              <span>real-time monitoring and instant alerts</span>
            </p>
            <h4 className="get-started">
              <a href="/register">Get Started</a>
            </h4>
            <div class="hero">
              <div class="hero-1"></div>
              <div class="hero-2"></div>
              <div class="hero-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
