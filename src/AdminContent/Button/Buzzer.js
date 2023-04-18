import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Tada from "react-reveal/Tada";

function BuzzerOn({ isOn, onToggle }) {
  return (
    <div>
      {isOn ? (
        <Tada onClick={() => onToggle(false)} duration={2000}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </Tada>
      ) : (
        <Tada onClick={() => onToggle(true)} duration={2000}>
          <FontAwesomeIcon icon={faVolumeXmark} />
        </Tada>
      )}
    </div>
  );
}

export default BuzzerOn;
