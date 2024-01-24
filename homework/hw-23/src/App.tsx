import PostList from "./components/PostList/PostList";
import AdvancedLevel from "./Pages/AdvancedLevel/AdvancedLevel";
import TabsSection from "./components/TabsSection/TabsSection";
import { useState } from "react";

export default function App() {
  const [inputRadio, setInputRadio] = useState("post-list");

  return (
    <>
      <TabsSection isActive={inputRadio} onChange={setInputRadio} />
      {inputRadio === "post-list" && <PostList />}
      {inputRadio === "advanced-level" && <AdvancedLevel />}
    </>
  );
}
