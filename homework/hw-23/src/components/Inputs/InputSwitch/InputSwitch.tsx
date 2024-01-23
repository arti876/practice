import style from "./InputSwitch.module.css"

interface InputSwitchProps {
  label: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange: (checked: any) => void;
}

export default function InputSwitch({
  label,
  isChecked,
  isDisabled,
  onChange,
}: InputSwitchProps) {
  return (
    <div>
      <label className={style["switch-wrapper"]}>
        <input
          className={style["switch-element"]}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => onChange((prev: any) => !prev)}
        />
        <p>{label}</p>
      </label>
    </div>
  );
}