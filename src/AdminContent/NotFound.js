import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import "./Recipt.css";

const NotFound = () => {
  return (
    <div id="ErrorDiv">
      <h1 id="ErrorPage">PAGE NOT FOUND</h1>
      <Link id="LoginAgain" to="/">
        Login
      </Link>
    </div>
  );
};

export default NotFound;
