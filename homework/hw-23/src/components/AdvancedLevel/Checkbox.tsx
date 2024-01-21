import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    </div>
  );
}
