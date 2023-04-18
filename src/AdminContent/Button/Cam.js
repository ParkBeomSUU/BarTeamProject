import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";

const Cam = () => {
  return (
    <>
      <Container>
        {" "}
        <Row id="MonitorRow">
          <Col id="monitor">
            <iframe
              id="VideoSecond"
              width="560"
              height="315"
              src="http://localhost:8000/video_feed"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cam;
