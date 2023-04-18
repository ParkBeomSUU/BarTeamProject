import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faCircleInfo,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { RiAdminFill } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useCookies } from "react-cookie";
import ReactPlayer from 'react-player'
// import AdminList from "./AdminList";

const Menu = ({ setContent }) => {
  const handleClickButton = (e, number) => {
    setContent(number);
  };


  //자체서버 로그아웃
  const LogOut = () => {
    // Access Token을 로컬 스토리지에서 제거.
    window.localStorage.removeItem("adminAccessToken");
    // 로그인 페이지로 이동.
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Row>
          <Col id="intro">
            <div id="UserIcon">
              <RiAdminFill />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div id="IntroText">Admin</div>
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
                  id="logoutAdmin"
                />

                <h6 className="logoutText"> LOGOUT </h6>
              </button>
            </a>
          </Col>
        </Row>

        <Row style={{ flexWrap: "noWrap" }}>
          <Col id="button_div">
            <Button
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 0)}
            >
              <TbReportMoney className="ButtonIcon2" />
              <div className="ButtonName">Receipt</div>
            </Button>
          </Col>

          <Col id="button_div">
            <Button
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 1)}
            >
              <FontAwesomeIcon icon={faReceipt} className="ButtonIcon" />
              <div className="ButtonName"> Order List</div>
            </Button>
          </Col>
        </Row>

        <Row style={{ flexWrap: "noWrap" }}>
          <Col id="button_div">
            <Button
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 2)}
            >
              <FontAwesomeIcon icon={faVideo} className="ButtonIcon" />
              <div className="ButtonName">Monitor</div>
            </Button>
          </Col>
          <Col id="button_div">
            <Button
              variant="outline-dark"
              id="buttonFirst"
              onClick={(e) => handleClickButton(e, 3)}
            >
              <FontAwesomeIcon icon={faCircleInfo} className="ButtonIcon" />
              <div className="ButtonName">Robot Info</div>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col id="cam">
            <Col id="cam_monitor">
              <Col id="cam_monitor_inner">
{/* 
              <iframe
              id="VideoSecond"
              width="380px"
              height="320px"
              src="http://localhost:8000/video_feed"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}

                {/* <iframe
                  id="MusicApi"
                  width="100%"
                  height="100%"
                  // scrolling="no"
                  // frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/gilbertcriville/sets/playlist-1&amp;color=999999&show_artwork=false
                  { ADD YOUR PARAMETERS HERE }"
                ></iframe> */}
                <ReactPlayer
                width="100%"
                height="100%"
                playing={true} 
                url="/mov/robotMov.mp4" />
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
