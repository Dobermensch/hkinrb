import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const imgstyle = {
    width: "100%",
    height: "65vh"
}

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid" style={{border: "1px solid"}}>
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