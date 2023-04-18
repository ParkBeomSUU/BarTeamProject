import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuShow.css";
import Receipt from "./Button/Receipt";
import Liquor from "./Button/liquor";
import Cocktail from "./Button/Cocktail";
import Korean from "./Button/Korean";
import Food from "./Button/Food";
import Korea from "./Image/Korea.png";
import cock from "./Image/Cocktail.png";
import Liq from "./Image/Liquor.png";
import foodd from "./Image/Food.png";
import axios from "axios";
import OrderButton from "./Button/OrderButton";
import qs from "qs";
import { post } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { prices } from "./Button/prices";
import MenuCheckModal from "./Button/MenuCheckModal";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Menu = ({
  setContent,
  volume,
  content,
  setMenuText,
  bill,
  setBill,
  setVolume,
  menuText,
  setForHyenoh,
    forHyenoh,
                reciptBody
}) => {
  //카카오 해보자
  const [, , removeCookie] = useCookies("nickName");
  const [kperson, setKPerson] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [receiptContents, setReceiptContents] = useState("");
  //주문하기 들어왔을때만 영수증에 들어가게 하기
  const [isOrderDone, setOrderDone] = useState(false);
  const token =window.localStorage.getItem("userAccessToken")
  const [tableNum, setTableNum] =useState("");
  const YOUR_REST_API_KEY="1cfc5abbc1e0dd24af7409e5284da67a"
  const YOUR_LOGOUT_REDIRECT_URI="https://web-ecuzo-react-cloud-108dypx2ale6e8i6k.sel3.cloudtype.app/"
  const KAKAO_LOGOUT=`https://kauth.kakao.com/oauth/logout?client_id=${YOUR_REST_API_KEY}&logout_redirect_uri=${YOUR_LOGOUT_REDIRECT_URI}`

  axios.get("https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/userOne",
      {headers:{'Content-Type': 'application/json','Authorization':"Bearer "+token}
  }).then(response=>{
    setTableNum(response.data['tableNum']);
  })
  //카카오 로그인
  //
  // useEffect(() => {
  //   if (code !== null) {
  //     axios
  //       .get("/~~~", { params: { code: code } })
  //       .then((response) => {
  //         setKPerson(response.data);
  //       })
  //       .then(() => {
  //         window.history.pushState(
  //           kperson,
  //           null,
  //           "http://localhost:3000/Menu/Contents"
  //         );
  //       });
  //   }
  //
  //   axios.get("/~~~~").then((response) => {
  //     var arr = response.data.split(" ");
  //     const nickName = arr[0];
  //     const email = arr[1];
  //     const profile = arr[2];
  //
  //     setNickName(nickName);
  //     setEmail(email);
  //     setProfile(profile);
  //   });
  //
  //   if (nickName !== "") {
  //     axios.get("/addkperson", null, {
  //       params: {
  //         nickname: nickName,
  //         email: email,
  //         profile: profile,
  //       },
  //     });
  //   }
  // }, [code, email, kperson, nickName, profile]);

  //자체서버 로그아웃
  const LogOut = () => {
    // Access Token을 로컬 스토리지에서 제거.
    window.localStorage.removeItem("userAccessToken");
    window.localStorage.removeItem("forHyenoh")
    // 로그인 페이지로 이동.

    window.location.href = `${KAKAO_LOGOUT}`;
  };

  //버튼 보내는거
  const handleClickButton = (e, number) => {
    setContent(number);
  };

  //버튼 보내는거
  // const url = "https //13.124.151.184/test";
  // const config = { "Content-Type": "application/json" };

  //볼륨 값이 있을때 주문이 영수증에 꽂힘
  useEffect(() => {
    setOrderDone("");
    let content = "";
    for (let key in volume) {
      if (volume[key] > 0) {
        content += key + ": " + volume[key] + ",";
      }
    }
    setMenuText(content);
  }, [volume]);

  //  메뉴의 개수와 가격 price.js에서 설정한것을 곱해서 영수증 만들기
  useEffect(() => {
    if (isOrderDone) {
      const forBill = {};
      const volumeKey = Object.keys(volume); //볼륨이랑 가격의 키를 받아온다.
      const priceKey = Object.keys(prices);

      volumeKey.map((menu, index) => {
        let price = volume[menu] * prices[priceKey[index]];
        if (price !== 0) {
          //0 빼고
          forBill[menu] = volume[menu] * prices[priceKey[index]];
        }
      });
      setBill(forBill);
    } else {
    }
  }, [isOrderDone]);

  // 메뉴첵모달에서 확인 눌러야 영수증js에 들어감

  return (
    <>
      <Container>
        <Row>
          <Col id="intro_2">
            {/*로그인 이름과 영수증 부분 {tableNum} */}
            <>
              <p
                className="tablenumber"
                style={{ fontSize: "20px", marginTop: "8px" }}
              >
                {" "}
                { tableNum }번 테이블
              </p>

              {/* {userID ==="admin" &&

              <button onclick="location.href='http://localhost:3000/admin'">Admin 페이지로 이동</button>} */}

              <a className="Logout-A">
                <button
                  className="LogoutButton"
                  id="logout"
                  onClick={(e) => {
                    LogOut();
                  }}
                >
                  <FontAwesomeIcon
                      icon={faSignOut}
                      className="fontawesonicon"
                      style={{color:"rgb(38 155 185)"}}
                  />

                  <h6 className="logoutText"> LOGOUT </h6>
                </button>
              </a>

              {/* <Receipt
                  className="receipt"
                  receiptContents={receiptContents}
                  volume={volume}
                  bill={bill}
                  forHyenoh={forHyenoh}
                  reciptBody={reciptBody}
              /> */}
              <div className="receipt-container">
                    <Receipt
                      className="receipt"
                      receiptContents={receiptContents}
                      volume={volume}
                      bill={bill}
                      forHyenoh={forHyenoh}
                      reciptBody={reciptBody}
                    />
              </div>
            </>
          </Col>
        </Row>

        <Row>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 0)}
              id="button_2"
            >
              <img src={Liq} style={{ width: "75px" }} id="MenuImg" />
              <br />
              <a style={{ fontSize: "1.5rem" }} id="MenuText">
                {" "}
                &#8213; Liquor &#8213;{" "}
              </a>
            </Button>
          </Col>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 1)}
              id="button_2"
            >
              <img src={cock} style={{ width: "75px" }} id="MenuImg" />
              <br />
              <a style={{ fontSize: "1.5rem" }} id="MenuText">
                &#8213; Cocktail &#8213;{" "}
              </a>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 2)}
              id="button_2"
            >
              <img src={Korea} style={{ width: "75px" }} id="MenuImg" />
              <br />
              <a style={{ fontSize: "1.4rem" }} id="MenuText">
                {" "}
                &#8213; Traditional &#8213;{" "}
              </a>
            </Button>
          </Col>
          <Col id="button_div_2">
            <Button
              variant="outline-info"
              onClick={(e) => handleClickButton(e, 3)}
              id="button_2"
            >
              <img src={foodd} style={{ width: "75px" }} id="MenuImg" />
              <br />
              <a style={{ fontSize: "1.5rem" }} id="MenuText">
                &#8213; Food &#8213;{" "}
              </a>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="cam_2">
            <Col id="cam_monitor">
              <form
                action="http://localhost:3000/admin"
                method="post"
                id="formBox"
              >
                {volume.founder > 0 && <p>{`파운더 : ${volume.founder}`}</p>}
                {volume.GlenDower > 0 && (
                  <p>{`글랜다워 : ${volume.GlenDower}`}</p>
                )}
                {volume.Jagermeilter > 0 && (
                  <p>{`예거마이스터 : ${volume.Jagermeilter}`}</p>
                )}
                {volume.JimBeam > 0 && <p> {`짐빔 : ${volume.JimBeam}`}</p>}
                {volume.Tina > 0 && <p> {`티나 : ${volume.Tina}`}</p>}
                {volume.TheClass33 > 0 && (
                  <p>{`더클라스33 : ${volume.TheClass33}`}</p>
                )}
                {volume.Macallan12 > 0 && (
                  <p>{`맥캘란12 : ${volume.Macallan12}`}</p>
                )}
                {volume.TellinfSingleMalt > 0 && (
                  <p>{`티링 : ${volume.TellinfSingleMalt}`}</p>
                )}
                {volume.Gambas > 0 && <p>{`감바스 : ${volume.Gambas}`}</p>}
                {volume.FridOjiCheese > 0 && (
                  <p>{`오지치즈후라이 : ${volume.FridOjiCheese}`}</p>
                )}
                {volume.cheeseBall > 0 && (
                  <p>{`치즈볼 : ${volume.cheeseBall}`}</p>
                )}
                {volume.Gorgonzola > 0 && (
                  <p>{`고르곤졸라 : ${volume.Gorgonzola}`}</p>
                )}
                {volume.Mellon > 0 && <p>{`멜론 : ${volume.Mellon}`}</p>}
                {volume.Pepperoni > 0 && (
                  <p>{`페페로니 : ${volume.Pepperoni}`}</p>
                )}
                {volume.pineapple > 0 && (
                  <p>{`파인애플 : ${volume.pineapple}`}</p>
                )}
                {volume.Dowon > 0 && <p>{`도원결의 : ${volume.Dowon}`}</p>}
                {volume.Hwang > 0 && <p>{`황진이 : ${volume.Hwang}`}</p>}
                {volume.Lee > 0 && <p>{`이강주 : ${volume.Lee}`}</p>}
                {volume.mak > 0 && <p>{`떠먹는 막걸리 : ${volume.mak}`}</p>}
                {volume.Monkey > 0 && (
                  <p>{`원숭이 막걸리 : ${volume.Monkey}`}</p>
                )}
                {volume.Naru > 0 && <p>{`나루 막걸리 : ${volume.Naru}`}</p>}
                {volume.nimome > 0 && <p>{`제주 니모메 : ${volume.nimome}`}</p>}
                {volume.Omiza > 0 && <p>{`장수 오미자 : ${volume.Omiza}`}</p>}
                {volume.OneSoju > 0 && <p>{`원소주 : ${volume.OneSoju}`}</p>}
                {volume.OdiRang > 0 && <p>{`오디랑 : ${volume.OdiRang}`}</p>}
                {volume.Peach > 0 && <p>{`복숭아와인 : ${volume.Peach}`}</p>}
                {volume.purpleJin > 0 && (
                  <p>{`퍼플 진: ${volume.purpleJin}`}</p>
                )}
                {volume.Rye > 0 && <p>{`퍼플진 : ${volume.Rye}`}</p>}
                {volume.SuloCity > 0 && <p>{`술로시티: ${volume.SuloCity}`}</p>}
                {volume.bloodyMary > 0 && (
                  <p>{`블러드 메리: ${volume.bloodyMary}`}</p>
                )}
                {volume.blueHawaii > 0 && (
                  <p>{`블루 하와이: ${volume.blueHawaii}`}</p>
                )}
                {volume.cosmopolitan > 0 && (
                  <p>{`코즈모폴리탄: ${volume.cosmopolitan}`}</p>
                )}
                {volume.margarita > 0 && (
                  <p>{`마가리타: ${volume.margarita}`}</p>
                )}
                {volume.martini > 0 && <p>{`마티니: ${volume.martini}`}</p>}
                {volume.mojito > 0 && <p>{`모히또: ${volume.mojito}`}</p>}
                {volume.oldFashioned > 0 && (
                  <p>{`올드패션드: ${volume.oldFashioned}`}</p>
                )}
                {volume.rustyNail > 0 && (
                  <p>{`러스티 네일: ${volume.rustyNail}`}</p>
                )}
                {volume.sangria > 0 && <p>{`상그리아: ${volume.sangria}`}</p>}
                {volume.tequilaSunrise > 0 && (
                  <p>{`데킬라선라이즈: ${volume.tequilaSunrise}`}</p>
                )}
              </form>
            </Col>
          </Col>

          {/* <OrderButton isOrderDone={isOrderDone} setOrderDone={setOrderDone} /> */}
          <MenuCheckModal
            isOrderDone={isOrderDone}
            setOrderDone={setOrderDone}
            volume={volume}
            menuText={menuText}
            content={content}
            bill={bill}
            setBill={setBill}
            setMenuText={setMenuText}
            setVolume={setVolume}
            setReceiptContents={setReceiptContents}
            setForHyenoh={setForHyenoh}
          />
        </Row>
      </Container>
    </>
  );
};

export default Menu;
