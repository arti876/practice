import style from "./InputRadio.module.css";

interface InputRadioProps {
  label: string;
  name: string;
  value: number;
  isChecked: number;
  isDisabled?: boolean;
  onChange: (e: any) => void;
}

export default function InputRadio({
  label,
  name,
  value,
  isChecked,
  isDisabled,
  onChange,
}: InputRadioProps) {
  return (
    <label className={style.radioWrapper}>
      <input
        className={style.radioElement}
        type="radio"
        name={name}
        value={value}
        checked={isChecked == value ? true : false}
        disabled={isDisabled}
        onChange={() => onChange(() => event.target.value)}
      />
      <p>{label}</p>
    </label>
  );
}
