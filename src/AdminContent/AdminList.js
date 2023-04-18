import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Admin.css";
import Cam from "./Button/Cam";
import Order from "./Button/Order";
import Robot from "./Button/Robot";
import Table from "./Button/Table";

const AdminList = ({ content, forHyenoh }) => {
  return (
    <>
      {content === 0 && <Table forHyenoh={forHyenoh} />}
      {content === 1 && <Order />}
      {content === 2 && <Cam />}
      {content === 3 && <Robot />}
    </>
  );
};

export default AdminList;
