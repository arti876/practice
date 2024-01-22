import style from "./Radio.module.css";

interface RadioProps {
  label: string;
  name: string;
  value: number;
  isChecked: number;
  isDisabled?: boolean;
  onChange: (e: any) => void;
  // React.ChangeEvent<HTMLInputElement>
}

export default function RadioInput({label, name, value, isChecked, isDisabled, onChange}: RadioProps) {
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
