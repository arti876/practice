import style from "./InputRadio.module.css";

interface InputRadioProps {
  labelText: string;
  name: string;
  value: number;
  isChecked: number;
  isDisabled?: boolean;
  onChange: (value: any) => void;
}

export default function InputRadio({
  labelText,
  name,
  value,
  isChecked,
  isDisabled,
  onChange,
}: InputRadioProps) {
  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return (
    <label className={style.radioWrapper}>
      <input
        className={style.radioElement}
        type="radio"
        name={name}
        value={value}
        checked={isChecked == value ? true : false}
        disabled={isDisabled}
        onChange={handleRadio}
      />
      <p>{labelText}</p>
    </label>
  );
}
