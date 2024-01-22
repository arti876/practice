import style from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange: (checked: any) => void;
}

export default function Checkbox({
  label,
  isChecked,
  isDisabled,
  onChange,
}: CheckboxProps) {
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
