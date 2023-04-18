import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import total from "../TotalData.json";
import axios from "axios";
import { BsReceiptCutoff } from "react-icons/bs";

// 모달을 노출하는 페이지
const TotalSales = ({}) => {
  const [show, setShow] = useState(false);
  const [totalResult, setTotalResult] = useState(0);
  // 값 저장
  const [responseData, setResponseData] = useState([]);
  //모달 관리
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    const accessToken = window.localStorage.getItem("adminAccessToken");
    axios
      .get("https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/total", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((response) => {
        console.log("통신 성공 handleshow");
        setResponseData(response.data);
        console.log("hh", responseData);
        let result = 0;
        responseData.map((m) => (result = result + m.totalPrice)).toString();
        setTotalResult(result);
      }).catch(()=>{
    });
  };

  //총계 받아오는 곳
  const amount = 10000;
  const totalSales = amount.toLocaleString();

  //1번 테이블~4번 까지 Loop

  return (
    <>
      <Button variant="light" id="TotalModal" size="lg" onClick={handleShow}>
        <BsReceiptCutoff id="TotalModalIcon" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="OrderList"></Modal.Title>
        </Modal.Header>

        <Modal.Body className="OrderTotalModal">
          <Table bordered variant="transparent" className="center">
            <thead id="TableHeader">
              <tr
                id="TotalModalHeader"
                style={{
                  color: "rgb(0 126 155)",
                  fontSize: "20px",
                }}
              >
                <th></th>
                <th>메뉴명 • 수량</th>
                <th>주문시간</th>
                <th>합계</th>
              </tr>
            </thead>
            {responseData.map((total, idx) => {
              return (
                <tbody>
                  <>
                    <tr>
                      <td>{idx + 1}</td>
                      <td>
                        {total.content.split(",").map((m) => (
                          <div>{m}</div>
                        ))}
                      </td>
                      <td>
                        <br />
                        {total.updateAt.substring(0, 16).replace("T", " -")}
                      </td>
                      <td>
                        <br />
                        {total.totalPrice.toLocaleString()}원
                      </td>
                    </tr>
                  </>
                </tbody>
              );
            })}
          </Table>
        </Modal.Body>
        <hr />
        <p
          id="TotalCount"
          style={{ color: "rgb(0 126 155)", fontSize: "20px" }}
        >
          총계: {totalResult.toLocaleString()}원
        </p>
        <Modal.Footer>
          <Button id="TotalClose" variant="outline-info" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TotalSales;
