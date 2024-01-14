// import React from "react";
import Title from "../TitleComp/Title";
import Hamburger from "../HamburgerComp/Hamburger";
import Alerts from "../AlertsComp/Alerts";

const App = () => {
  const SignIn = "Sign In";

  return (
    <div className="wrapper">
      <Title textButton={SignIn} />
      <Hamburger />
      <Alerts AlertText="Lorem ipsum" />
    </div>
  );
};

export default App;
