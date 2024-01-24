import style from "./InputCheckbox.module.css";

interface InputCheckboxProps {
  id: string;
  classLabel?: string;
  classInput?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  name: string;
  checkboxState: any;
  children: string | JSX.Element;
  onChange: (value: any) => void;
}

export default function InputCheckbox({
  id,
  classLabel,
  classInput,
  isChecked,
  isDisabled,
  name,
  checkboxState,
  children,
  onChange,
}: InputCheckboxProps) {
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    onChange({ ...checkboxState, [name]: !checkboxState[name] });
  }

  return (
    <div className={style["checkbox-wrapper"]}>
      <label
        htmlFor={id}
        className={classLabel ? classLabel : style["checkbox-label"]}
      >
        {children}
      </label>
      <input
        id={id}
        className={classInput ? classInput : style["checkbox-input"]}
        name={name}
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleCheckbox}
      />
    </div>
  );
}
