import { useState } from "react";
import style from "./AdvancedLevel.module.css";
import InputCheckbox from "../Inputs/InputCheckbox/InputCheckbox";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import InputSwitch from "../Inputs/InputSwitch/InputSwitch";
import InputRange from "../Inputs/InputRange/InputRange";

interface ICheckbox {
  checkbox1: boolean | null;
  checkbox2: boolean | null;
  checkbox3: boolean | null;
}

export default function AdvancedLevel() {
  // checkbox----------------------------------------
  const [checkbox, setCheckbox] = useState<ICheckbox>(Object);
  // radio-------------------------------------------
  const [inputRadio, setInputRadio] = useState<number>(1);
  // Switch----------------------------------------
  const [switch1, setSwitch1] = useState<boolean>(false);
  const [switch2, setSwitch2] = useState<boolean>(true);
  const [switch3, setSwitch3] = useState<boolean>(false);
  // Range----------------------------------------
  const [range, setRange] = useState("70");

  return (
    <>
      <form className={style.wrapper}>
        <div className={style.container}>
          <InputCheckbox
            labelText="Checkbox1"
            name="checkbox1"
            checkboxState={checkbox}
            isChecked={checkbox.checkbox1 || false}
            isDisabled={checkbox.checkbox3 ? false : true}
            onChange={setCheckbox}
          />
          <div className={style.container}>
            <InputCheckbox
              labelText="Checkbox2"
              name="checkbox2"
              checkboxState={checkbox}
              isChecked={checkbox.checkbox2 || false}
              isDisabled={checkbox.checkbox3 ? false : true}
              onChange={setCheckbox}
            />
          </div>
          <div className={style.container}>
            <InputCheckbox
              labelText="Checkbox3"
              name="checkbox3"
              checkboxState={checkbox}
              isChecked={checkbox.checkbox3 || false}
              onChange={setCheckbox}
            />
          </div>
        </div>
        <div className={style.container}>
          <InputRadio
            labelText="Radio1"
            name="radio"
            value={1}
            isChecked={inputRadio}
            isDisabled={checkbox.checkbox3 ? false : true}
            onChange={setInputRadio}
          />
          <InputRadio
            labelText="Radio2"
            name="radio"
            value={2}
            isChecked={inputRadio}
            onChange={setInputRadio}
          />
          <InputRadio
            labelText="Radio3"
            name="radio"
            value={3}
            isChecked={inputRadio}
            onChange={setInputRadio}
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
          <InputSwitch
            label="Switch3"
            isChecked={switch3}
            onChange={setSwitch3}
          />
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
