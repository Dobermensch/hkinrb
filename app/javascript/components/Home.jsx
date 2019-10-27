import React from "react";
import { Link } from "react-router-dom";

const imgstyle = {
    width: "100%",
    height: "65vh"
}

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
    <img style={imgstyle} src={require("../../assets/images/hk_banner.jpg")} alt="Image of HK" />
      <div className="container secondary-color">
        <h1 className="display-4">Hong Kong is not racist but...</h1>
        <p className="lead">
          Experiences of the underrepresented.
        </p>
        <hr className="my-4" />
        <Link
          to="/experiences"
          className="btn btn-lg custom-button"
          role="button"
        >
          Read Experiences
        </Link>
      </div>
    </div>
  </div>
);