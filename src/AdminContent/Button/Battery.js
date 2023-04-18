import React from "react";
// import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import Jump from "react-reveal/Jump";


// 배터리 아이콘 액션 동작

function Battery() {
  return (
    <Jump duration={2000}>
      {/* <ProgressBar id="BatteryIcon" /> */}
      <FontAwesomeIcon icon={faBatteryThreeQuarters} />
      {/* <a style={{fontSize:"30px"}}>Battery</a>dfg */}
    </Jump>
    
  );
}

export default Battery;