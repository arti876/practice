import { useState } from "react";
import style from "./AdvancedLevel.module.css";
import Checkbox from "./Checkbox";
import RadioInput from "./RadioInput";

export default function AdvancedLevel() {
  // checkbox----------------------------------------
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  // radio-------------------------------------------
  const [radioInput, setRadioInput] = useState(1);

  return (
    <>
      <form className={style.wrapper}>
        <div className={style.container}>
          <Checkbox
            label="Checkbox1"
            isChecked={checkbox1}
            isDisabled={checkbox3 ? false : true}
            onChange={setCheckbox1}
          />
          <Checkbox
            label="Checkbox2"
            isChecked={checkbox2}
            isDisabled={checkbox3 ? false : true}
            onChange={setCheckbox2}
          />
          <Checkbox
            label="Unlock Checkbox & Radio?"
            isChecked={checkbox3}
            onChange={setCheckbox3}
          />
        </div>
        <div className={style.container}>
          <RadioInput
            label="Radio1"
            name="radio"
            value={1}
            isChecked={radioInput}
            isDisabled={checkbox3 ? false : true}
            onChange={setRadioInput}
          />
          <RadioInput
            label="Radio2"
            name="radio"
            value={2}
            isChecked={radioInput}
            onChange={setRadioInput}
          />
          <RadioInput
            label="Radio3"
            name="radio"
            value={3}
            isChecked={radioInput}
            onChange={setRadioInput}
          />
        </div>
      </form>
    </>
  );
}
