import Image from "../ImageComp/Image";
import { useState } from "react";

interface AlertsProps {
  AlertText: string;
}

interface IState {
  isWarning: string[];
  isBell: string[];
  isForbidden: string[];
  isInfo: string[];
  isTick: string[];
}

const state: IState = {
  isWarning: ["image-warning", "style-warning"],
  isBell: ["image-bell", "style-bell"],
  isForbidden: ["image-forbidden", "style-forbidden"],
  isInfo: ["image-info", "style-info"],
  isTick: ["image-tick", "style-tick"],
};

const Alerts = ({ AlertText }: AlertsProps) => {
  const [isClick, setClick] = useState("");

  function ckick(param) {
    setClick(param);
  }

  let alertImage = null;
  let alertStyle = null;

  if (state[isClick] === state.isWarning) {
    alertImage = state[isClick][0];
    alertStyle = state[isClick][1];
  } else if (state[isClick] === state.isBell) {
    alertImage = state[isClick][0];
    alertStyle = state[isClick][1];
  } else if (state[isClick] === state.isForbidden) {
    alertImage = state[isClick][0];
    alertStyle = state[isClick][1];
  } else if (state[isClick] === state.isInfo) {
    alertImage = state[isClick][0];
    alertStyle = state[isClick][1];
  } else {
    alertImage = state[isClick][0];
    alertStyle = state[isClick][1];
  }

  return (
    <div className="alerts">
      <p className="title">ALERTS</p>
      <div className="btn-alerts">
        <button className="switch-btn" onClick={() => ckick("isWarning")}>
          <Image name="image-warning" className="image-btn image-warning" />
        </button>
        <button className="switch-btn" onClick={() => ckick("isBell")}>
          <Image name="image-bell" className="image-btn image-bell" />
        </button>
        <button className="switch-btn" onClick={() => ckick("isForbidden")}>
          <Image name="image-forbidden" className="image-btn image-forbidden" />
        </button>
        <button className="switch-btn" onClick={() => ckick("isInfo")}>
          <Image name="image-info" className="image-btn image-info" />
        </button>
        <button className="switch-btn" onClick={() => ckick("isTick")}>
          <Image name="image-tick" className="image-btn image-tick" />
        </button>
      </div>
      <div className={`alerts-item ${alertStyle}`}>
        <div className="image-container">
          <Image name={alertImage} className={`image-btn ${alertStyle}`} />
        </div>
        <p>{AlertText}</p>
        <button className="close">X</button>
      </div>
    </div>
  );
};

export default Alerts;
