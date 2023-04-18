import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Recipt.css";

const JwtExpired = () => {
  return (
    <div id="ErrorDiv">
      <div>
        <h1 id="ErrorPage" style={{ color: "white" }}>
          {/* Please Retry Login */}Your token has expired.
        </h1>
        <h3 id="ErrorPage">&nbsp;&nbsp;&nbsp;&nbsp;Please login again.</h3>
        <Link id="LoginAgain" to="/">
          Login
        </Link>
      </div>
    </div>
  );
};

export default JwtExpired;
