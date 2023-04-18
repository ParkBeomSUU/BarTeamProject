import { Container, Row, Col, Button } from "react-bootstrap";
import "./Button.css";
import React, { useState } from "react";

const Food = ({ setVolume, volume }) => {
  return (
    <>
      <Container>
        <Row id="Menus1">
          <Row id="Menus">
            <Col>
              <div className="box">
                <img
                  src={process.env.PUBLIC_URL + "/Food/Gambas.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>Gambas</h3>
                  <p>
                    {" "}
                    Price : 20.0 <br /> <br />
                    Taste : 소금과 후추로 간을 한 새우를
                    <br />
                    마늘, 페페론치노와 함께 올리브 오일에 넣어
                    <br />
                    낮은 온도에서 끓이는 음식
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              Gambas
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Gambas: volume.Gambas === 10 ? 10 : volume.Gambas + 1,
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
                      Gambas: volume.Gambas === 0 ? 0 : volume.Gambas - 1,
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
                  src={process.env.PUBLIC_URL + "/Food/FriedOjiCheese.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>Fried Oji Cheese</h3>
                  <p>
                    {" "}
                    Price : 18.0 <br /> <br />
                    Taste : 바삭하게 튀겨진 감자튀김과
                    <br />
                    짭조름한 치즈의 조화
                  </p>
                </div>
                <hr size="4" />
              </div>
              Fried Oji Cheese
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      FriedOjiCheese:
                        volume.FriedOjiCheese === 10
                          ? 10
                          : volume.FriedOjiCheese + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.FriedOjiCheese} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      FriedOjiCheese:
                        volume.FriedOjiCheese === 0
                          ? 0
                          : volume.FriedOjiCheese - 1,
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
                  src={process.env.PUBLIC_URL + "/Food/cheeseBall.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>CheeseBall</h3>
                  <p>
                    {" "}
                    Price : 8.0 <br /> <br />
                    Taste : 쫀득한 반죽 안에 고소한 크림치즈를 넣어
                    <br />
                    튀겨낸 음식
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              CheeseBall
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      cheeseBall:
                        volume.cheeseBall === 10 ? 10 : volume.cheeseBall + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.cheeseBall} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      cheeseBall:
                        volume.cheeseBall === 0 ? 0 : volume.cheeseBall - 1,
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
                  src={process.env.PUBLIC_URL + "/Food/Gorgonzola.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>Gorgonzola</h3>
                  <p>
                    {" "}
                    Price : 15.0 <br /> <br />
                    Taste : 이탈리아의 블루 치즈인 고르곤졸라 치즈를
                    <br />
                    얹어 꿀에 찍어먹는 피자
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              Gorgonzola
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Gorgonzola:
                        volume.Gorgonzola === 10 ? 10 : volume.Gorgonzola + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Gorgonzola} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Gorgonzola:
                        volume.Gorgonzola === 0 ? 0 : volume.Gorgonzola - 1,
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
                  src={process.env.PUBLIC_URL + "/Food/Mellon.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>Melon</h3>
                  <p>
                    {" "}
                    Price : 10.0 <br /> <br />
                    Taste : 수분이 많아 시원한 식감이 있으며
                    <br />
                    부드럽고 달콤한 맛
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              Melon
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Mellon: volume.Mellon === 10 ? 10 : volume.Mellon + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Mellon} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Mellon: volume.Mellon === 0 ? 0 : volume.Mellon - 1,
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
                  src={process.env.PUBLIC_URL + "/Food/Pineapple.png"}
                  style={{ width: "150px" }}
                />
                <div className="introduce">
                  <h3>Pineapple</h3>
                  <p>
                    {" "}
                    Price : 10.0 <br /> <br />
                    Taste : 새콤함과 달콤함의 조화를 느낄 수 있으며
                    <br />
                    가볍고 깔끔하게 즐기기 좋은 안주
                    <br />
                  </p>
                </div>
                <hr size="4" />
              </div>
              Pineapple
              <div id="PlusMa">
                <Button
                  id="Plus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Pineapple:
                        volume.Pineapple === 10 ? 10 : volume.Pineapple + 1,
                    })
                  }
                >
                  +{" "}
                </Button>
                <div id="Count"> {volume.Pineapple} </div>
                <Button
                  id="Minus"
                  onClick={() =>
                    setVolume({
                      ...volume,
                      Pineapple:
                        volume.Pineapple === 0 ? 0 : volume.Pineapple - 1,
                    })
                  }
                >
                  -{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Row>
        <Row id="Menus">
          <Col>
            <div className="box">
              <img
                src={process.env.PUBLIC_URL + "/Food/Pepperoni .png"}
                style={{ width: "150px" }}
              />
              <div className="introduce">
                <h3>Pepperoni Pizza</h3>
                <p>
                  {" "}
                  Price : 15.0 <br /> <br />
                  Taste : 양념이 들어간 고기로 만든 페퍼로니를
                  <br />
                  듬뿍 얹은 피자로 짭짤하면서도 담백한 맛
                  <br />
                </p>
              </div>
              <hr size="4" />
            </div>

            감바스
            <div id="PlusMa">
              <Button
                id="Plus"
                onClick={() =>
                  setVolume({
                    ...volume,
                    Pepperoni:
                      volume.Pepperoni === 10 ? 10 : volume.Pepperoni + 1,
                  })
                }
              >
                +{" "}
              </Button>
              <div id="Count"> {volume.Pepperoni} </div>
              <Button
                id="Minus"
                onClick={() =>
                  setVolume({
                    ...volume,
                    Pepperoni:
                      volume.Pepperoni === 0 ? 0 : volume.Pepperoni - 1,
                  })
                }
              >
                -{" "}
              </Button>
            </div>
          </Col>
        </Row>

 
</Container>


</>


    )
};

export default Food;
