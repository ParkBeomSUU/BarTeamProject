import { Container, Row, Col, Button } from "react-bootstrap";
import "./Button.css";
import React, { useState } from "react";

const Korean = ({ setVolume, volume }) => {
  return (
    <>
      <Container>
        <Row id="Menus1">
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Dowon.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>도원결의</h3>
                  <p>
                    {" "}
                    Price : 27.0 <br /> <br />
                    Taste : 복숭아 본연의 맛과 향이 은은하게 느껴지는 맛<br />{" "}
                    <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              도원결의
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Dowon: volume.Dowon === 10 ? 10 : volume.Dowon + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Gambas} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Dowon: volume.Dowon === 0 ? 0 : volume.Dowon - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Hwang.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>황진이</h3>
                  <p>
                    {" "}
                    Price : 5.0 <br /> <br />
                    Taste : 오미자와 산수유가 첨가되어 달달하며
                    <br /> 부드럽고 청량한 맛<br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              황진이
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Hwang: volume.Hwang === 10 ? 10 : volume.Hwang + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Hwang} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Hwang: volume.Hwang === 0 ? 0 : volume.Hwang - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Lee.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>전주 이강주</h3>
                  <p>
                    {" "}
                    Price : 34.0 <br /> <br />
                    Taste : 배, 생강, 울금, 계피와 꿀의 조화
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              전주 이강주
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Lee: volume.Lee === 10 ? 10 : volume.Lee + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Lee} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Lee: volume.Lee === 0 ? 0 : volume.Lee - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/mak.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>떠먹는 막걸리</h3>
                  <p>
                    {" "}
                    Price : 8.0 <br /> <br />
                    Taste : 이화곡이라는 누룩을 이용하며, 요거트, 푸딩같은 질감
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              떠먹는 막걸리
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      mak: volume.mak === 10 ? 10 : volume.mak + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.mak} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      mak: volume.mak === 0 ? 0 : volume.mak - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Monkey.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>술 취한 원숭이</h3>
                  <p>
                    {" "}
                    Price : 36.0 <br /> <br />
                    Taste : 은은한 과일향
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              술 취한 원숭이
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Monkey: volume.Monkey === 10 ? 10 : volume.Monkey + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Monkey} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Monkey: volume.Monkey === 0 ? 0 : volume.Monkey - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Naru.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>나루 생 막걸리</h3>
                  <p>
                    {" "}
                    Price : 12.0 <br /> <br />
                    Taste : 시원한 참외향과 은은한 단맛
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              나루 생 막걸리
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Naru: volume.Naru === 10 ? 10 : volume.Naru + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Naru} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Naru: volume.Naru === 0 ? 0 : volume.Naru - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/nimome.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>제주 니모 메 </h3>
                  <p>
                    {" "}
                    Price : 6.0 <br /> <br />
                    Taste : 감귤을 직접 세척해 <br />
                    쌀과 함께 발효시켜 만든 전통주
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              제주 니모 메
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      nimome: volume.nimome === 10 ? 10 : volume.nimome + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.nimome} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      nimome: volume.nimome === 0 ? 0 : volume.nimome - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/OdiRang.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>오디랑 </h3>
                  <p>
                    {" "}
                    Price : 6.0 <br /> <br />
                    Taste : 오디의 새콤달콤한 맛
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              오디랑
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      OdiRang: volume.OdiRang === 10 ? 10 : volume.OdiRang + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.OdiRang} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      OdiRang: volume.OdiRang === 0 ? 0 : volume.OdiRang - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Omiza.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>장수 오미자주 </h3>
                  <p>
                    {" "}
                    Price : 30.0 <br /> <br />
                    Taste : 산뜻하고 달콤한 오미자향
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              장수 오미자주
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Omiza: volume.Omiza === 10 ? 10 : volume.Omiza + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Omiza} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Omiza: volume.Omiza === 0 ? 0 : volume.Omiza - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/OneSoju.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>원소주 </h3>
                  <p>
                    {" "}
                    Price : 15.0 <br /> <br />
                    Taste : 고소한 쌀향이 나며 씁쓸하면서도 부드러운 맛
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              원소주
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      OneSoju: volume.OneSoju === 10 ? 10 : volume.OneSoju + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.OneSoju} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      OneSoju: volume.OneSoju === 0 ? 0 : volume.OneSoju - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Peach.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>복숭아 와인 </h3>
                  <p>
                    {" "}
                    Price : 38.0 <br /> <br />
                    Taste : 복숭아의 부드럽고 향긋한 향
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              복숭아 와인
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Peach: volume.Peach === 10 ? 10 : volume.Peach + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Peach} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Peach: volume.Peach === 0 ? 0 : volume.Peach - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/purpleJin.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>퍼플 진 </h3>
                  <p>
                    {" "}
                    Price : 50.0
                    <br /> <br />
                    Taste : 오미자를 포함한 여러 과일과 허브의 조화
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              퍼플 진
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      purpleJin:
                        volume.purpleJin === 10 ? 10 : volume.purpleJin + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.purpleJin} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      purpleJin:
                        volume.purpleJin === 0 ? 0 : volume.purpleJin - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/Rye.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>려 고구마 </h3>
                  <p>
                    {" "}
                    Price : 42.0 <br /> <br />
                    Taste : 구수하면서도 달콤한 고구마 향
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              려 고구마
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Rye: volume.Rye === 10 ? 10 : volume.Rye + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Rye} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Rye: volume.Rye === 0 ? 0 : volume.Rye - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Korea/SuloCity.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>전주 술로시티 </h3>
                  <p>
                    {" "}
                    Price : 13.0 <br /> <br />
                    Taste : 무농약 인증을 받은 보리를 사용한 맥주
                    <br /> <br />
                    원산지 : 국산
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              전주 술로시티
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      SuloCity:
                        volume.SuloCity === 10 ? 10 : volume.SuloCity + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Rye} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      SuloCity: volume.SuloCity === 0 ? 0 : volume.SuloCity - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Korean;
