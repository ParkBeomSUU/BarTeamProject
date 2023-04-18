import { Container, Row, Col, Button } from "react-bootstrap";
import "./Button.css";
import React, { useState } from "react";

const Liquor = ({ setVolume, volume }) => {
  return (
    <>
      <Container>
        <Row id="Menus1">
          {/* 파운더스 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/Founder.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>파운더스</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 달콤하지만 묵직한 과일향
                    <br /> <br />
                    Price : 68.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              파운더스
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 10 ? 10 : volume.founder + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.founder} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      founder: volume.founder === 0 ? 0 : volume.founder - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 글랜다워 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/GlenDower.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>글랜다워</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 말린 과일향과 달콤한 사탕 맛이 <br />
                    은은하게 느껴짐
                    <br /> <br />
                    Price : 65.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              글랜다워
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      GlenDower:
                        volume.GlenDower === 10 ? 10 : volume.GlenDower + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.GlenDower} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      GlenDower:
                        volume.GlenDower === 0 ? 0 : volume.GlenDower - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 예거 마이스터 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/Jagermeilter.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>예거 마이스터</h3>
                  <p>
                    {" "}
                    alcohol degree : 35도 <br /> <br />
                    Taste : 허브향과 달달함의 조화
                    <br /> <br />
                    Price : 60.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              예거 마이스터
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Jagermeilter:
                        volume.Jagermeilter === 10
                          ? 10
                          : volume.Jagermeilter + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Jagermeilter} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Jagermeilter:
                        volume.Jagermeilter === 0 ? 0 : volume.Jagermeilter - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 짐빔 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/JimBeam.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>짐빔</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 부드럽고 달콤한 바닐라 맛
                    <br /> <br />
                    Price : 50.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              짐빔
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      JimBeam: volume.JimBeam === 10 ? 10 : volume.JimBeam + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.JimBeam} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      JimBeam: volume.JimBeam === 0 ? 0 : volume.JimBeam - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 티나 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/Tina.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>티나</h3>
                  <p>
                    {" "}
                    alcohol degree : 16도 <br /> <br />
                    Taste : 딸기의 달달한 맛
                    <br /> <br />
                    Price : 65.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              티나
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Tina: volume.Tina === 10 ? 10 : volume.Tina + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Tina} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Tina: volume.Tina === 0 ? 0 : volume.Tina - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 더클라스 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/TheClass33.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>더 클라스</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 깔끔하고 부드러운 맛
                    <br /> <br />
                    Price : 55.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              더 클라스
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      TheClass33:
                        volume.TheClass33 === 10 ? 10 : volume.TheClass33 + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.TheClass33} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      TheClass33:
                        volume.TheClass33 === 0 ? 0 : volume.TheClass33 - 1,
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
          {/* 맥캘란 12 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/Macallan12.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>맥캘란 12</h3>
                  <p>
                    {" "}
                    alcohol degree : 40도 <br /> <br />
                    Taste : 과일향과 쉐리향 그리고 약간의 달콤함, <br />
                    타피향과 나무향의 조화
                    <br /> <br />
                    Price : 250.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              맥캘란 12
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Macallan12:
                        volume.founder === 10 ? 10 : volume.Macallan12 + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Macallan12} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Macallan12:
                        volume.Macallan12 === 0 ? 0 : volume.Macallan12 - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* 틸링 싱글 몰트 */}
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Liquor/TellinfSingleMalt.png"}
                  style={{ width: "120px" }}
                />
                <div className="introduce">
                  <h3>틸링 싱글 몰트</h3>
                  <p>
                    {" "}
                    alcohol degree : 46도 <br /> <br />
                    Taste : 꽃향과 과일향의 조화
                    <br /> <br />
                    Price : 150.0
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              틸링 싱글 몰트
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      TellinfSingleMalt:
                        volume.TellinfSingleMalt === 10
                          ? 10
                          : volume.TellinfSingleMalt + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.TellinfSingleMalt} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      TellinfSingleMalt:
                        volume.TellinfSingleMalt === 0
                          ? 0
                          : volume.TellinfSingleMalt - 1,
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

export default Liquor;
