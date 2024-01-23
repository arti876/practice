import style from "./InputCheckbox.module.css";

interface InputCheckboxProps {
  labelText: string;
  isChecked: boolean;
  isDisabled?: boolean;
  name: string;
  checkboxState: any;
  onChange: (prov: any) => void;
}

export default function InputCheckbox({
  labelText,
  isChecked,
  isDisabled,
  onChange,
  name,
  checkboxState,
}: InputCheckboxProps) {
  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    onChange({ ...checkboxState, [name]: !checkboxState[name] });
    console.log(checkboxState);
  }

  return (
    <div>
      <label className={style.checkboxWrapper}>
        <input
          className={style.checkboxElement}
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleCheckbox}
        />
        <p>{labelText}</p>
      </label>
    </div>
  );
}
