import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import "../Admin.css";
import StartModal from "./StartModal";

function RecipeModal({ show, setShow, tableContent, setTableContent, forHyenoh, currentTable }) {
  const handleClose = () => setShow(false);

  const total = 10000; //총계 받아오는 곳
  const tableTotal = total.toLocaleString();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <Table
            bordered
            variant="transparent"
            className="center"
            style={{ border: "0px solid black" }}
          >
            <tbody>
              <>
                <tr>
                  <td>
                    <p id="ReceiptModalHeader">영수증</p>
                    <hr />
                    {typeof tableContent === "string" && (
                      <>
                        {Object.keys(JSON.parse(tableContent)["bill"]).map(
                          (menu) => {
                            return (
                              <p id="TotalModalPtag">
                                {menu} &nbsp;{" "}
                                {JSON.parse(tableContent)["bill"][
                                  menu
                                ].toLocaleString()}
                                원
                              </p>
                            );
                          }
                        )}

                        <hr />
                        <p
                          id="TotalModalPtag"
                          style={{ color: "rgb(0 126 155)", fontSize: "22px" }}
                        >
                          총:{" "}
                          {JSON.parse(tableContent)[
                            "totalPrice"
                          ].toLocaleString()}
                          원
                        </p>
                      </>
                    )}
                  </td>
                </tr>
              </>
            </tbody>
          </Table>
          {/* {JSON.stringify(tableContent)} */}
        </Modal.Body>
        <Modal.Footer>
          <StartModal currentTable={currentTable} setTableContent={setTableContent}/>
          <Button
            className="CancelModal"
            variant="primary"
            onClick={handleClose}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default RecipeModal;
