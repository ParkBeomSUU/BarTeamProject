import React from "react";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { MdInvertColors } from "react-icons/md";
import Flip from "react-reveal/Flip";

function HeadlightColor() {
  return (
    <Flip bottom duration={2000}>
      <MdInvertColors />
    </Flip>
  );
}

export default HeadlightColor;
