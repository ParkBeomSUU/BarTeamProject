import { useState, useEffect } from "react";
import "./Recipt.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import MenuShow from "../MenuShow";

const Receipt = ({ forHyenoh,reciptBody }) => {
  const [show, setShow] = useState(false);
  const headerMeta = ["상품", "수량", "가격"];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [oldOne, setOldOne] = useState({});

  // useEffect(() => {
  //   const oldOneFromStorage = JSON.parse(localStorage.getItem("forHyenoh"));
  //   setOldOne(oldOneFromStorage);

  //   const totalPrice = oldOneFromStorage.totalPrice + forHyenoh.totalPrice;
  //   if (forHyenoh) {
  //     window.localStorage.setItem(
  //         "forHyenoh",
  //         JSON.stringify({ ...oldOneFromStorage, ...forHyenoh, totalPrice })
  //     );
  //   }
  // }, [forHyenoh]);
  useEffect(() => {
    const oldOneFromStorage = JSON.parse(localStorage.getItem("forHyenoh"));
    setOldOne(oldOneFromStorage || {}); // null일 경우 빈 객체로 초기화

    let totalPrice = 0;
    if (oldOneFromStorage && forHyenoh) {
      totalPrice = oldOneFromStorage.totalPrice + forHyenoh.totalPrice;
    } else if (oldOneFromStorage) {
      totalPrice = oldOneFromStorage.totalPrice;
    } else if (forHyenoh) {
      totalPrice = forHyenoh.totalPrice;
    }

    if (forHyenoh) {
      window.localStorage.setItem(
          "forHyenoh",
          JSON.stringify({ ...oldOneFromStorage, ...forHyenoh, totalPrice })
      );
    }
  }, [forHyenoh]);



  return (
      <>
        <Button id="receiptCheck" size="lg" onClick={handleShow}>
          영수증
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="OrderList">영수증</Modal.Title>
          </Modal.Header>

          <Modal.Body className="OrderList">
            <Table striped bordered hover className="center">
              <thead>
              <tr>
                {headerMeta.map((i) => (
                    <th key={i}>{i}</th>
                ))}
              </tr>
              </thead>

              {/* <tbody className="ReciptBody">
              {Object.keys(reciptBody.bill).map((rec, index) => {
                 return (
                  <tr key={rec}>
                    <th>{rec}</th>
                    <th>{reciptBody.volume[rec]}</th>
                    <th>{reciptBody.bill[rec]}</th>
                  </tr>
                );
              })}
            </tbody> */}
              <tbody className="ReciptBody">
              {reciptBody.bill && Object.keys(reciptBody.bill).map((rec, index) => {
                return (
                    <tr key={rec}>
                      <th>{rec}</th>
                      <th>{reciptBody.volume[rec]}</th>
                      <th>{reciptBody.bill[rec]}</th>
                      {/* <th>Gorgonzola</th>
                      <th>1</th>
                      <th>15000</th> */}
                    </tr>
                );
              })}
              </tbody>

              <tfoot
                  className="ReciptFoot"
                  style={{ width: "100%", textAlign: "right" }}
              >
              <tr>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}></td>
                <td style={{ backgroundColor: "white" }}>
                  total : {(oldOne?.totalPrice || 0) + (forHyenoh?.totalPrice || 0)}원
                  {/* total : 15,000원 */}
                </td>
              </tr>
              </tfoot>
            </Table>
          </Modal.Body>

          <Modal.Footer>
            <Button
                className="ModalSend"
                variant="outline-info"
                onClick={handleClose}
            >
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
};

export default Receipt;