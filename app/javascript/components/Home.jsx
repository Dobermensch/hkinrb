import React from "react";
import { Link } from "react-router-dom";

const imgstyle = {
    width: "100%",
    height: "65vh"
}

export default () => (
    <div style={{display: "flex", width: "100vw", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <div className="jumbotron jumbotron-fluid bg-transparent">
          <img style={imgstyle} src={require("../../assets/images/hk_banner.jpg")} alt="Image of HK" />
            <div className="container secondary-color">
              <h1 className="display-4">Minority Experiences: HK</h1>
              <p className="lead">
                Experiences of the underrepresented.
              </p>
              <hr className="my-4" />
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <Link
                  to="/read"
                  className="btn btn-lg custom-button"
                  role="button"
                >
                  Read Experiences
                </Link>
                <Link
                  to="/about"
                  className="btn btn-lg custom-button"
                  role="button"
                >
                  About Website
                </Link>
            </div>
          </div>
      </div>
    </div>
);