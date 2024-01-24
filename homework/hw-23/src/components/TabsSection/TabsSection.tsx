import style from "./TabsSection.module.css";
import InputRadio from "../Inputs/InputRadio/InputRadio";

interface TabsSectionProps {
  isActive: string;
  onChange: (value: any) => void;
}

export default function TabsSection({ isActive, onChange }: TabsSectionProps) {
  return (
    <>
      <div className={style["tab-wrapper"]}>
        <InputRadio
          classLabel={style["tab-btn"]}
          classInput={style["tab-input"]}
          id="post-list"
          name="tab"
          value={"post-list"}
          isChecked={isActive}
          onChange={onChange}
        >
          POST LIST
        </InputRadio>
        <InputRadio
          classLabel={style["tab-btn"]}
          classInput={style["tab-input"]}
          id="advanced-level"
          name="tab"
          value={"advanced-level"}
          isChecked={isActive}
          onChange={onChange}
        >
          ADVANCED LEVEL
        </InputRadio>
      </div>
    </>
  );
}
