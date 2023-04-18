import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import "./Admin.css";
import AdminList from "./AdminList";

const AdminPage = ({ forHyenoh }) => {
  const [content, setContent] = useState(0); //state 선언
  console.log(content);
  return (
    <>
      <Container id="out" style={{ display: "flex" }}>
        <Row style={{ width: "100%" }}>
          <Col id="first" sm={{ span: 4 }} xs={{ span: 4 }}>
            <Menu setContent={setContent} />
          </Col>

          <Col id="second" sm={{ span: 8 }} xs={{ span: 8 }}>
            <AdminList forHyenoh={forHyenoh} content={content} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;
