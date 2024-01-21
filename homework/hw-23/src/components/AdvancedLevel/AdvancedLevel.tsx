import style from "./AdvancedLevel.module.css";
import Checkbox from "./Checkbox";

export default function AdvancedLevel() {
  return (
    <div className={style.wrapper}>
      <p>AdvancedLevel</p>
      <div className={style.container}>
        <p>Checkbox</p>
        <Checkbox />
      </div>
    </div>
  );
}
