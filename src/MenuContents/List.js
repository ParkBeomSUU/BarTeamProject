import React from "react";
import { Row, Col } from "react-bootstrap";
import "./MenuShow.css";
import Cocktail from "./Button/Cocktail";
import Food from "./Button/Food";
import Korean from "./Button/Korean";
import Liquor from "./Button/liquor";


const List =({content, setVolume, volume }) => {

  return (
    <>
      <Row>
        <Col id="show">

        {content === 0 && <Liquor  volume={volume} setVolume={setVolume} />}
        {content === 1 && <Cocktail  volume={volume} setVolume={setVolume}/>}
        {content === 2 && <Korean volume={volume} setVolume={setVolume} />}
        {content === 3 && <Food volume={volume} setVolume={setVolume} />}
        </Col>
      </Row>
    </>
  )
}

export default List;