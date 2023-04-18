import React, { useState, useEffect } from "react";
import ROSLIB from "roslib";
import { Ros, Topic } from "roslib";
import "./App.css";

function App() {
  // 속력값, 배터리 값 초기화

  const [twist, setTwist] = useState({});
  const [batterySOC, setBatterySOC] = useState(null);

  // rgb 색상 값 초기화
  const [ledColor, setLedColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });

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
      blue: ledColor.blue,
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
    if (level < -1)
      return <span style={{ color: "red" }}> 후진 {Math.abs(level)}</span>;
    if (level < 0) return <span style={{ color: "red" }}>0</span>;

    return level;
  }

  return (
    <div className="App">
      <div>
        <h3>Twist</h3>
        <ul>
          <li>Linear X: {twist.linear ? twist.linear.x.toFixed(2) : "0.00"}</li>
          <li>
            speed : {twist.linear ? getSpeedLevel(twist.linear.x) : "0"} 단계
          </li>
        </ul>

        {batterySOC !== null && (
          <div>
            <p>Battery SOC: {batterySOC}%</p>
          </div>
        )}

        <div>
          <button onClick={() => setBuzzer(true)}>Buzzer On</button>
          <button onClick={() => setBuzzer(false)}>Buzzer Off</button>
        </div>

        <div>
          <button onClick={() => setHeadlight(true)}>Headlight On</button>
          <button onClick={() => setHeadlight(false)}>Headlight Off</button>
        </div>
        <h3>LED Color</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="redInput">Red: </label>
          <input
            type="number"
            name="red"
            id="redInput"
            value={ledColor.red}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="greenInput">Green: </label>
          <input
            type="number"
            name="green"
            id="greenInput"
            value={ledColor.green}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="blueInput">Blue: </label>
          <input
            type="number"
            name="blue"
            id="blueInput"
            value={ledColor.blue}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default App;
