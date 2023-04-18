import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import OrderTest from "./OrderTest";

const Order = () => {
  return (
    <div
      className="OrderList"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <OrderTest />
      {/* <Container fluid>
        <Row>
          <Col id="order" md={6} lg={6}>
            <div id="TableName">
              <BsClipboardCheck /> &nbsp; Table 1
              <FontAwesomeIcon icon={faXmark} className="Xmark" />
            </div>
            <hr />
            <OrderTest />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Order;
