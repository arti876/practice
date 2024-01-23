import { useState } from "react";
import style from "./AdvancedLevel.module.css";
import InputCheckbox from "../Inputs/InputCheckbox/InputCheckbox";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import InputSwitch from "../Inputs/InputSwitch/InputSwitch";
import InputRange from "../Inputs/InputRange/InputRange";

export default function AdvancedLevel() {
  // checkbox----------------------------------------
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  // radio-------------------------------------------
  const [radioInput, setRadioInput] = useState(1);
  // Switch----------------------------------------
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  // Range----------------------------------------
  const [range, setRange] = useState("70");

  return (
    <>
      <form className={style.wrapper}>
        <div className={style.container}>
          <InputCheckbox
            label="Checkbox1"
            isChecked={checkbox1}
            isDisabled={checkbox3 ? false : true}
            onChange={setCheckbox1}
          />
          <InputCheckbox
            label="Checkbox2"
            isChecked={checkbox2}
            isDisabled={checkbox3 ? false : true}
            onChange={setCheckbox2}
          />
          <InputCheckbox
            label="Unlock Checkbox & Radio?"
            isChecked={checkbox3}
            onChange={setCheckbox3}
          />
        </div>
        <div className={style.container}>
          <InputRadio
            label="Radio1"
            name="radio"
            value={1}
            isChecked={radioInput}
            isDisabled={checkbox3 ? false : true}
            onChange={setRadioInput}
          />
          <InputRadio
            label="Radio2"
            name="radio"
            value={2}
            isChecked={radioInput}
            onChange={setRadioInput}
          />
          <InputRadio
            label="Radio3"
            name="radio"
            value={3}
            isChecked={radioInput}
            onChange={setRadioInput}
          />
        </div>
        <div className={style.container}>
          <InputSwitch
            label="Switch1"
            isChecked={switch1}
            isDisabled={switch3 ? false : true}
            onChange={setSwitch1}
          />
          <InputSwitch
            label="Switch2"
            isChecked={switch2}
            isDisabled={switch3 ? false : true}
            onChange={setSwitch2}
          />
          <InputSwitch label="Switch3" isChecked={switch3} onChange={setSwitch3} />
        </div>
        <InputRange
          labelText={`Range: ${range}`}
          min="0"
          max="100"
          value={range}
          step="10"
          onChange={setRange}
        />
      </form>
    </>
  );
}
