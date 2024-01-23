import style from "./InputSwitch.module.css";

interface InputSwitchProps {
  labelText: string;
  isChecked: boolean;
  isDisabled?: boolean;
  name: string;
  switchState: any;
  onChange: (value: any) => void;
}

export default function InputSwitch({
  labelText,
  isChecked,
  isDisabled,
  name,
  switchState,
  onChange,
}: InputSwitchProps) {
  function handleSwitch(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    onChange({ ...switchState, [name]: !switchState[name] });
  }

  return (
    <div>
      <label className={style["switch-wrapper"]}>
        <input
          className={style["switch-element"]}
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleSwitch}
        />
        <p>{labelText}</p>
      </label>
    </div>
  );
}
