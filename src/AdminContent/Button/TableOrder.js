import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { BsClipboardCheck } from "react-icons/bs";

const TableOrder = ["양주 4, 칵테일 1, 커피 2"];

const TableList = () => {
  return (
    <>
      {TableOrder.map((anOrder, idx) => {
        return (
          <ul
            key={idx}
            style={{
              width: "50%",
            }}
          >
            <div className="OrderCheck">
              {anOrder.split(", ").map((o, i) => {
                return <li key={i}>{o}</li>;
              })}
            </div>
          </ul>
        );
      })}
    </>
  );
};

export default TableList;
