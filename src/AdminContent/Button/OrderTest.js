import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { BsClipboardCheck } from "react-icons/bs";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";
import Swal from "sweetalert2";
// import Checkbox from "./Checkbox";

// const OrderArray = OrderText.split(", ");
// console.log(OrderArray);

const OrderTest = () => {
  // 값 저장
  const [tableNum, setTableNum] = useState(0);
  const [content_t1, setContent_t1] = useState("주문내역 없음");
  const [content_t2, setContent_t2] = useState("주문내역 없음");
  const [content_t3, setContent_t3] = useState("주문내역 없음");
  const [content_t4, setContent_t4] = useState("주문내역 없음");
  const [userId, setUserId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [createAt, setCreateAt] = useState(0);
  const [updateAt, setUpdateAt] = useState(0);
  const accessToken = window.localStorage.getItem("adminAccessToken");
  const [pathVal, setPathVal] = useState(1);

  //  번호 일치하는 테이블에 들어가게 하려면 어떻게 코드를 짜야하는지
  const [OrderText, setOrderText] = useState([
    content_t1,
    content_t2,
    content_t3,
    content_t4,
  ]);
  // Swal.fire({
  //   icon: "success",
  //   title: "로봇이 서빙을 완료했습니다.",
  //   text: `${tableNum}번 테이블 주문 완료!`,
  //   confirmButtonText: "확인",
  // }).then(()=>{
  //   handleDelete(tableNum)
  // })
  useEffect(() => {
    setOrderText([content_t1, content_t2, content_t3, content_t4]);
  }, [content_t1, content_t2, content_t3, content_t4]);

  //1번 테이블~4번 까지 Loop
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/order/list`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          },
        })
        .then((response) => {
          for (let i = 0; i < 4; i += 1) {
            let last = response.data[i];
            console.log(last);
            let content = last["content"];
            let userId = last["userId"];
            let tableNum = last["tableNum"];
            let totalPrice = last["totalPrice"];
            let createAt = last["createAt"];
            let updateAt = last["updateAt"];
            setTableNum(tableNum);
            setUserId(userId);
            setTotalPrice(totalPrice);
            setCreateAt(createAt);
            setUpdateAt(updateAt);
            if (tableNum == "1") setContent_t1(content);
            else if (tableNum == "2") setContent_t2(content);
            else if (tableNum == "3") setContent_t3(content);
            else if (tableNum == "4") setContent_t4(content);
          }
        })
        .catch((error) => {
          // window.location.href='/jwtexpired'
        });
      if (pathVal === 4) {
        setPathVal(1);
      } else {
        setPathVal(pathVal + 1);
      }
    }, 10000);
    // return ()=>clearInterval(timer)
  }, [pathVal]);
  // 삭제 기능
  const handleDelete = (delIdx) => {
    axios
      .delete(`https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/delete/${delIdx + 1}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
      .then(() => {
        setOrderText(
          OrderText.map((anOrder, idx) => {
            if (idx === delIdx) {
              if (delIdx == "1") setContent_t1("주문내역 없음");
              else if (delIdx == "2") setContent_t2("주문내역 없음");
              else if (delIdx == "3") setContent_t3("주문내역 없음");
              else if (delIdx == "4") setContent_t4("주문내역 없음");
              return "주문내역 없음";
            } else {
              return anOrder;
            }
          })
        );
      }).catch(()=>{
    });
  };

  return (
    <>
      {OrderText.map((anOrder, idx) => {
        return (
          <ul
            className="each-table"
            key={idx}
            style={{
              width: "50%",
            }}
          >
            <div className="TableName">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <BsClipboardCheck /> &nbsp;Table {idx + 1}
              <CloseButton
                onClick={() => {
                  handleDelete(idx);
                }}
                className="Xmark"
              />
            </div>
            <hr
              style={{
                margin: "10px",
              }}
            />

            <div className="OrderName">
              {anOrder
                .split(",")
                .reverse()
                .map((o, i) => {
                  return (
                    <li id="List" key={i}>
                      {o}
                    </li>
                  );
                })}
            </div>
          </ul>
        );
      })}
    </>
  );
};

export default OrderTest;
