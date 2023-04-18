import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Admin.css";
import ROSLIB from "roslib";
import { Ros, Topic } from "roslib";

function RGBModal({ show, setShow, setLedColor, ledColor }) {
  const colorStyle = {
    backgroundColor: `rgb(${ledColor.red}, ${ledColor.green}, ${ledColor.blue})`,
    width: "50px",
    height: "50px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
  };

  const handleClose = () => setShow(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = parseInt(target.value);
    setLedColor({
      ...ledColor,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          <form onSubmit={handleSubmit}>
            <div>
            <label className="LedLabel"  htmlFor="redInput">Red &nbsp;</label>
            </div>
            <input
              type="number"
              min="0" max="255"
              name="red"
              className="LedInput"
              id="redInput"
              value={ledColor.red}
              onChange={handleInputChange}
            />
           
            <br /><br />
            <div>
            <label className="LedLabel" htmlFor="greenInput">Green &nbsp;</label>
            </div>
            <input
              type="number"
              min="0" max="255"
              name="green"
              className="LedInput"
              id="greenInput"
              value={ledColor.green}
              onChange={handleInputChange}
            />
           
            <br /><br />
            <div><label className="LedLabel" htmlFor="blueInput">Blue </label></div>
            
            <input
              type="number"
              min="0" max="255"
              name="blue"
              className="LedInput"
              id="blueInput"
              value={ledColor.blue}
              onChange={handleInputChange}
            />
            <br /><br />
            
          </form>
        </Modal.Body>
        <Modal.Footer>
        <button className="RgbSubmit" onClick={handleSubmit}>변경</button>
          <Button
            className="CancelModal"
            variant="primary"
            onClick={handleClose}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RGBModal;