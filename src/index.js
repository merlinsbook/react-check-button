import React from "react";
import { render } from "react-dom";
import { ButtonDemo } from "./ButtonDemo";

const App = () => (
  <main>
    <header>{"{ react-check-button }"}</header>
    <ButtonDemo label={"Spectrum Analyser"} activeColor={"red"} />
    <ButtonDemo label={"Space Bender"} activeColor={"blue"} />
    <ButtonDemo label={"Warp Drive"} activeColor={"green"} />
    <ButtonDemo label={"Warp Drive"} activeColor={"yellow"} />
  </main>
);

render(<App />, document.getElementById("root"));
