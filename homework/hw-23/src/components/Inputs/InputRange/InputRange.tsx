import style from "./InputRange.module.css";

interface InputRangeProps {
  labelText: string;
  id?: string;
  name?: string;
  min: string;
  max: string;
  value: string;
  step: string;
  onChange: (checked: any) => void;
}

export default function InputRange({
  labelText,
  id,
  name,
  min,
  max,
  value,
  step,
  onChange,
}: InputRangeProps) {
  function handleRange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return (
    <div>
      <label>
        <p>{labelText}</p>
        <input
          type="range"
          id={id}
          name={name}
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleRange}
        />
      </label>
    </div>
  );
}
