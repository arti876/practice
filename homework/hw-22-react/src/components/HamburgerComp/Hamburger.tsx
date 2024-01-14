import { useState } from "react";

const Hamburger = () => {
  const [isActive, setActive] = useState(false);

  const handleToggleHumb = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={`hamb ${isActive ? "active" : ""}`}
      onClick={handleToggleHumb}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default Hamburger;
