import style from "./InputSwitch.module.css";

interface InputSwitchProps {
  id: string;
  classLabel?: string;
  classInput?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  name: string;
  switchState: any;
  children: string | JSX.Element;
  onChange: (value: any) => void;
}

export default function InputSwitch({
  id,
  classLabel,
  classInput,
  isChecked,
  isDisabled,
  name,
  switchState,
  children,
  onChange,
}: InputSwitchProps) {
  function handleSwitch(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    onChange({ ...switchState, [name]: !switchState[name] });
  }

  return (
    <div className={style["switch-wrapper"]}>
      <label
        htmlFor={id}
        className={classLabel ? classLabel : style["switch-label"]}
      >
        {children}
      </label>
      <input
        className={classInput ? classInput : style["switch-input"]}
        name={name}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleSwitch}
      />
    </div>
  );
}
