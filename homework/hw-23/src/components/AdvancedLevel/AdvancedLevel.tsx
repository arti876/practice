import { useState } from "react";
import style from "./AdvancedLevel.module.css";
import InputCheckbox from "../Inputs/InputCheckbox/InputCheckbox";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import InputSwitch from "../Inputs/InputSwitch/InputSwitch";
import InputRange from "../Inputs/InputRange/InputRange";
import Basket from "../Basket/Basket";

interface CheckboxProps {
  checkbox1: boolean | null;
  checkbox2: boolean | null;
  checkbox3: boolean | null;
}

interface InputSwitchProps {
  switch1: boolean | null;
  switch2: boolean | null;
  switch3: boolean | null;
}

export default function AdvancedLevel() {
  const [inputCheckbox, setInputCheckbox] = useState<CheckboxProps>(Object);
  const [inputRadio, setInputRadio] = useState<number>(1);
  const [inputSwitch, setInputSwitch] = useState<InputSwitchProps>(Object);
  const [inputRange, setInputRange] = useState<string>("70");
  const [basket, setBasket] = useState<string>(0);

  return (
    <>
      <form className={style.wrapper}>
        <div className={style.container}>
          <InputCheckbox
            labelText="Checkbox1"
            name="checkbox1"
            checkboxState={inputCheckbox}
            isChecked={inputCheckbox.checkbox1 || false}
            isDisabled={inputCheckbox.checkbox3 ? false : true}
            onChange={setInputCheckbox}
          />
          <div className={style.container}>
            <InputCheckbox
              labelText="Checkbox2"
              name="checkbox2"
              checkboxState={inputCheckbox}
              isChecked={inputCheckbox.checkbox2 || false}
              isDisabled={inputCheckbox.checkbox3 ? false : true}
              onChange={setInputCheckbox}
            />
          </div>
          <div className={style.container}>
            <InputCheckbox
              labelText="Checkbox3"
              name="checkbox3"
              checkboxState={inputCheckbox}
              isChecked={inputCheckbox.checkbox3 || false}
              onChange={setInputCheckbox}
            />
          </div>
        </div>
        <div className={style.container}>
          <InputRadio
            labelText="Radio1"
            name="radio"
            value={1}
            isChecked={inputRadio}
            isDisabled={inputCheckbox.checkbox3 ? false : true}
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
            labelText="Switch1"
            name="switch1"
            switchState={inputSwitch}
            isChecked={inputSwitch.switch1 || false}
            isDisabled={inputSwitch.switch3 ? false : true}
            onChange={setInputSwitch}
          />
          <InputSwitch
            labelText="Switch2"
            name="switch2"
            switchState={inputSwitch}
            isChecked={inputSwitch.switch2 || false}
            isDisabled={inputSwitch.switch3 ? false : true}
            onChange={setInputSwitch}
          />
          <InputSwitch
            labelText="Switch3"
            name="switch3"
            switchState={inputSwitch}
            isChecked={inputSwitch.switch3 || false}
            onChange={setInputSwitch}
          />
        </div>
        <InputRange
          labelText={`Range: ${inputRange}`}
          min="0"
          max="100"
          value={inputRange}
          step="10"
          onChange={setInputRange}
        />
        <Basket onClick={onClick}>{basket}</Basket>
      </form>
    </>
  );
}
