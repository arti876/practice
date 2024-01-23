import style from "./InputCheckbox.module.css";

interface InputCheckboxProps {
  label: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange: (checked: any) => void;
}

export default function InputCheckbox({
  label,
  isChecked,
  isDisabled,
  onChange,
}: InputCheckboxProps) {
  return (
    <div>
      <label className={style.checkboxWrapper}>
        <input
          className={style.checkboxElement}
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
