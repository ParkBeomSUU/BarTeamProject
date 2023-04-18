import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import Battery from "./Battery";
import Buzzer from "./Buzzer";
import HeadlightOnOff from "./HeadlightOnOff";
import HeadlightColor from "./HeadlightColor";
import RgbModal from "./RgbModal";
import RpmLeft from "./RpmLeft";
import RpmRight from "./RpmRight";
import Reveal from "react-reveal/Reveal";
// import values from "../fakeData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ROSLIB from "roslib";
import { Ros, Topic } from "roslib";


const Robot = () => {


  const [isHeadlightOn, setIsHeadlightOn] = useState(false);
  const [isBuzzerOn, setIsBuzzerOn] = useState(false);


 const [show, setShow] = useState(false);
  // 속력값, 배터리 값 초기화 


  const [twist, setTwist] = useState({});
  const [batterySOC, setBatterySOC] = useState(null);
  const [status, setStatus] =useState(false);
  const [BuzzerCheck,setBuzzerCheck]= useState(false);
    
    // rgb 색상 값 초기화 
    const [ledColor, setLedColor] = useState({
      red: 255,
      green: 255,
      blue: 255,
    });
    
    useEffect(() => {
      console.log(ledColor)
    }, [ledColor])
  
    // 스피드 단계구하기   
    const SPEED_LEVELS = 10; // 분할 단계 수
    const SPEED_MAX = 1.5; // 최대 속도
    const SPEED_MIN = 0; // 최소 속도
  
    // 웹소켓 포트 
    useEffect(() => {
      const ros = new Ros({ url: "ws://192.168.0.135:9090" });
  
      ros.on("connection", function () {
        console.log("Connected to websocket server.");
      });
  
      ros.on("error", function (error) {
        console.log("Error connecting to websocket server: ", error);
      });
  
      ros.on("close", function () {
        console.log("Connection to websocket server closed.");
      });
  
  
  
      // 속도값 메세지 토픽 생성
      const twistTopic = new Topic({
        ros: ros,
        name: "/cmd_vel",
        messageType: "geometry_msgs/Twist",
      });
  
      // 배터리값 메시지 토픽 생성
      const batterySOCListener = new ROSLIB.Topic({
        ros: ros,
        name: "soc_topic",
        messageType: "std_msgs/Float32",
      });
  
      // 속도값 토픽 구독
      twistTopic.subscribe((msg) => {
        setTwist(msg);
      });
  
      // 배터리값 토픽 구독 
      batterySOCListener.subscribe(function (message) {
        setBatterySOC(message.data);
      });
  
      // 토픽 구독 해제 함수
      return () => {
        batterySOCListener.unsubscribe();
        twistTopic.unsubscribe();
      };
    }, []);
  
  

      // 부저 서비스 명령 
      function setBuzzer(value) {
        const ros = new Ros({ url: "ws://192.168.0.135:9090" });
    
        const setBuzzerService = new ROSLIB.Service({
          ros: ros,
          name: "/set_buzzer",
          serviceType: "omo_r1mini_bringup/Onoff",
        });
    
        const request = new ROSLIB.ServiceRequest({
          set: value,
        });
    
        setBuzzerService.callService(request, function (result) {
          console.log(result);
        });
        if(BuzzerCheck){
          setBuzzerCheck(false)
        }
        else{
          setBuzzerCheck(true)
        }
      }
  
    // 헤드라이트 서비스 명령 
    function setHeadlight(value) {
      const ros = new Ros({ url: "ws://192.168.0.135:9090" });
      
      const setHeadlightService = new ROSLIB.Service({
        ros: ros,
        name: "/set_headlight",
        serviceType: "omo_r1mini_bringup/Onoff",
      });
  
      const request = new ROSLIB.ServiceRequest({
        set: value,
      });
  
      setHeadlightService.callService(request, function (result) {
        console.log(result);
      });
      if(status){
        setStatus(false)
      }
      else{
        setStatus(true)
      }
      console.log(value)
    }
  
  
    // led 컬러 서비스 명령
    
    function setLedColorService() {
      const ros = new Ros({ url: "ws://192.168.0.135:9090" });
  
      const setLedColorService = new ROSLIB.Service({
        ros: ros,
        name: "/set_led_color",
        serviceType: "omo_r1mini_bringup/SetLedColor",
      });
  
      const request = new ROSLIB.ServiceRequest({
        red: ledColor.red,
        green: ledColor.green,
        blue: ledColor.blue
      });
  
      setLedColorService.callService(request, function (result) {
        console.log(result);
      });
    }
  
    // led color 입력 이벤트 
    function handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      const value = parseInt(target.value);
      setLedColor({
        ...ledColor,
        [name]: value,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      setLedColorService();
    }
   
  
    // 스피드 단계 구하기 
  
    function getSpeedLevel(speed) {
      // 속도 값을 1~10 단계로 분할
      const speedRange = SPEED_MAX - SPEED_MIN;
      const speedStep = speedRange / SPEED_LEVELS;
      const level = Math.floor((speed - SPEED_MIN) / speedStep);
    
      // 최대/최소 값 범위 체크
      if (level > SPEED_LEVELS) return SPEED_LEVELS;
      if (level < -1) return <span style={{ color: "red" }}> 후진 {Math.abs(level)}</span>;
      if (level < 0) return <span style={{ color: "red" }}>0</span>;
    
      return level;
    }

    

  return (
    <>
      <Container>
        <Row>
          {/* 배터리 */}
          <Col id="battery">
            <div className="FirstDiv" id="InfoBtn">
              <div id="BatteryIconDiv">
                <Reveal effect="fadeInUp">
                  <Battery />
                </Reveal>
              </div>
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">{batterySOC}%</p>{" "}
              <p className="SecondPtag">Battery</p>
            </div>
          </Col>

          {/* 버저 */}
          <Col id="buzzer">
            <div className="FirstDiv" id="InfoBtn">
              <Buzzer isOn={BuzzerCheck} />
            </div>
            <div className="SecondDiv">
              <p
              >
            
              </p>
              {BuzzerCheck? 
                  <button onClick={() => setBuzzer(true)}>ON</button>
                 : 
                  <button onClick={() => setBuzzer(false)}>OFF</button>
                }
              <p className="SecondPtag">Buzzer</p>
            </div>
          </Col>

          {/* <Col id="buzzer">
            <div className="FirstDiv" id="InfoBtn">
              <Buzzer isOn={Buzzer} onToggle={setBuzzer} />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">
                {Buzzer? (
                  <button onClick={() => setBuzzer(false)} >ON</button>
                ) : (
                  <button onClick={() => setBuzzer(true)} id="onBtn">OFF</button>
                  )}            
              </p>              
              <p className="SecondPtag">Buzzer</p>
            </div>
          </Col> */}

          {/* <Col id="headlight_onoff">
            <div className="FirstDiv" id="InfoBtn">
              <HeadlightOnOff isOn={isHeadlightOn} onToggle={setIsHeadlightOn} />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">
                {isHeadlightOn ? (
                  <button onClick={() => setIsHeadlightOn(false)}>ON</button>
                ) : (
                  <button onClick={() => setIsHeadlightOn(true)}>OFF</button>
                )}
              </p>
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col> */}

        </Row>



        <Row>
          {/* 헤드라이트 전원 */}
          <Col id="headlight_onoff">
            <div className="FirstDiv" id="InfoBtn">
              <HeadlightOnOff isOn={status}  />
            </div>
            <div className="SecondDiv">
              
              <p
                // className="FirstPtag"
                // onClick={(e) => {
                //   e.target.innerText =
                //     e.target.innerText == "ON" ? "OFF" : "ON";
                // }}\
            
              >
                  {status? 
                  <button onClick={() => setHeadlight(true)}>ON</button>
                 : 
                  <button onClick={() => setHeadlight(false)}>OFF</button>
                }
                <div>
      



      </div>
      </p>
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col>
          {/* <Col id="headlight_onoff">
            <div className="FirstDiv" id="InfoBtn">
              <HeadlightOnOff isOn={isHeadlightOn} onToggle={setIsHeadlightOn} />
            </div>
            <div className="SecondDiv">
              <p className="FirstPtag">
                {isHeadlightOn ? (
                  <button onClick={() => setIsHeadlightOn(false)}>ON</button>
                ) : (
                  <button onClick={() => setIsHeadlightOn(true)}>OFF</button>
                )}
              </p>
              <p className="SecondPtag">Headlight</p>
            </div>
          </Col> */}

          {/* 헤드라이트 색상 */}
          <Col id="headlight_color">
            <div className="FirstDiv" id="InfoButtons">
              <HeadlightColor />
            </div>
            <div className="SecondDiv">
            
              <p
                id="LedButton"
                className="FirstPtag"
                onClick={() => {
                  setShow(true);
                }}
                style={{
                  color: `rgb(${ledColor.red},${ledColor.green},${ledColor.blue})`,
                }}
              >
                <FontAwesomeIcon icon={faCircle} id="LedIcon" />
                
              </p>
              <p className="SecondPtag">LED Color</p>
            </div>
          </Col>
        </Row>

        <Row>
          {/* 왼쪽 rpm */}
          <Col id="rpm_l">
            <div className="SpeedDiv" id="TireIcon">
              <RpmLeft />
            </div>

            <div
              className="SpeedDiv2"
              id="SpeedText"
              style={{ marginTop: "20px" }}
            >
              <p className="FirstPtag" id="SpeedFirst">
                             {twist.linear ? getSpeedLevel(twist.linear.x) : "0"} 단계
              </p>

              <p className="SecondPtag" id="SpeedSecond">Speed
              </p>
            </div>

            <div className="SpeedDiv" id="TireIcon">
              <RpmRight />
            </div>

            {/* <div className="FirstDiv" id="InfoButtons"></div> */}
          </Col>
        </Row>
      </Container>
      <RgbModal show={show} setShow={setShow} setLedColor={setLedColor} ledColor={ledColor} />
    </>
  );
};

export default Robot;