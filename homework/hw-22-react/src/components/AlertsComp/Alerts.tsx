import Image from "../ImageComp/Image";
import { useState } from "react";

interface AlertsProps {
  AlertText: string;
}

const Alerts = ({ AlertText }: AlertsProps) => {
  const [isClickWarning, setClickWarning] = useState(false);
  const [isClickBell, setClickBell] = useState(false);
  const [isClickForbidden, setClickForbidden] = useState(false);
  const [isClickInfo, setClickInfo] = useState(false);
  const [isClickTick, setClickTick] = useState(false);

  const clickWarning = () => {
    if (!isClickWarning) {
      setClickWarning(!isClickWarning);
    }
    setClickBell(false);
    setClickForbidden(false);
    setClickInfo(false);
    setClickTick(false);
  };

  const clickBell = () => {
    if (!isClickBell) {
      setClickBell(!isClickBell);
    }
    setClickWarning(false);
    setClickForbidden(false);
    setClickInfo(false);
    setClickTick(false);
  };

  const clickForbidden = () => {
    if (!isClickForbidden) {
      setClickForbidden(!isClickForbidden);
    }
    setClickWarning(false);
    setClickBell(false);
    setClickInfo(false);
    setClickTick(false);
  };

  const clickInfo = () => {
    if (!isClickInfo) {
      setClickInfo(!isClickInfo);
    }
    setClickWarning(false);
    setClickBell(false);
    setClickForbidden(false);
    setClickTick(false);
  };

  const clickTick = () => {
    if (!isClickTick) {
      setClickTick(!isClickTick);
    }
    setClickWarning(false);
    setClickBell(false);
    setClickForbidden(false);
    setClickInfo(false);
  };

  const clickClose = () => {
    setClickTick(false);
    setClickWarning(false);
    setClickBell(false);
    setClickForbidden(false);
    setClickInfo(false);
  };

  return (
    <div className="alerts">
      <p className="title">ALERTS</p>
      <div className="btn-alerts">
        <button name="warning" className="switch-btn" onClick={clickWarning}>
          <Image name="image-warning" className="image-btn image-warning" />
        </button>
        <button className="switch-btn" onClick={clickBell}>
          <Image name="image-bell" className="image-btn image-bell" />
        </button>
        <button className="switch-btn" onClick={clickForbidden}>
          <Image name="image-forbidden" className="image-btn image-forbidden" />
        </button>
        <button className="switch-btn" onClick={clickInfo}>
          <Image name="image-info" className="image-btn image-info" />
        </button>
        <button className="switch-btn" onClick={clickTick}>
          <Image name="image-tick" className="image-btn image-tick" />
        </button>
      </div>
      <div
        className={`alerts-item ${isClickWarning ? "style-warning" : ""}${
          isClickBell ? "style-bell" : ""
        }${isClickForbidden ? "style-forbidden" : ""}${
          isClickInfo ? "style-info" : ""
        }${isClickTick ? "style-tick" : ""}`}
      >
        <div className="image-container">
          <Image
            name={`${isClickWarning ? "image-warning" : ""}${
              isClickBell ? "image-bell" : ""
            }${isClickForbidden ? "image-forbidden" : ""}${
              isClickInfo ? "image-info" : ""
            }${isClickTick ? "image-tick" : ""}`}
            className={`image-btn ${isClickWarning ? "image-warning" : ""}${
              isClickBell ? "image-bell" : ""
            }${isClickForbidden ? "image-forbidden" : ""}${
              isClickInfo ? "image-info" : ""
            }${isClickTick ? "image-tick" : ""}`}
          />
        </div>
        <p>{AlertText}</p>
        <button className="close" onClick={clickClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Alerts;
