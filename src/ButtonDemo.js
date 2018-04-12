import React from "react";
import { injectGlobal } from "styled-components";
import { compose, withHandlers, withState } from "recompose";

injectGlobal`
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
@import url('https://fonts.googleapis.com/css?family=Poppins');

body {
  font: 13px/20px 'Poppins', sans-serif;
  color: #404040;
  background: #333;
}

main {
  position: absolute;
  height: 100%;
  width: 100%;
}

header {
  width: 100%;
  text-align: center;
  font-size: 34px;
  line-height: 64px;
  border-bottom: 1px dotted #888;
  color: #aaa;
}
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 2em;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 24px;
  width: 24px;
  font-size: 15px;
  color: white;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.3);
  border: 2px solid;
  border-radius: 50%;
  outline: 0;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  border-color: #222;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  background-image: linear-gradient(to bottom, #444 0%, #555 30%, #333 50%, #111 100%);
}

.button:before, .button:after {
  content: '';
  position: absolute;
}

.button:before {
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  z-index: -1;
  border-radius: 50%;
  background: #333;
  background-image: linear-gradient(to bottom, #333, #444);
}

.button:after {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 0;
  border-radius: 50%;
}

.button.active {
  background: #6D6D6F;
  background-image: linear-gradient(to bottom, #1B1B1E 0%, #2F2F32 60%, #6D6D6F 100%);

  & p.label {
    color: #26E2E2;
    text-shadow: 0 1px 3px rgba(38, 226, 226, 0.45);
  }
}

.red {
  border-color: #FF143B #FF143B #FF143B;
  box-shadow: 0 1px 3px #FF143B;
}

.blue {
  border-color: #26BAE2 #26BAE2 #26BAE2;
  box-shadow: 0 1px 3px #26BAE2;
}

.green {
  border-color: #3FFF14 #3FFF14 #3FFF14;
  box-shadow: 0 1px 3px #3FFF14;
}

.yellow {
  border-color: #FFEE00 #FFEE00 #FFEE00;
  box-shadow: 0 1px 3px #FFEE00;
}

 .label-red {
    color: #FF3255;
  }

  .label-blue {
    color: #26BAE2;
  }

 .label-green {
    color: #3FFF14;
  }

 .label-yellow {
    color: #FFEE00;
  }

p {
  position: absolute;
  left: 38px;;
  font-size: 15px;
  color: #999;
  width: 180px;
  transition: ease-in, color 1.2s, text-shadow 1.2s;
}

`;

const _ButtonDemo = ({ activeColor, label, active, setActiveHandler }) => (
  <div className="wrapper">
    <a
      href="#"
      onClick={setActiveHandler}
      className={`button ${active ? "active " + activeColor : ""}`}
    >
      <p className={`label-${active ? activeColor : ""}`}>{label}</p>
    </a>
  </div>
);

export const ButtonDemo = compose(
  withState("active", "setActive", false),
  withHandlers({
    setActiveHandler: ({ active, setActive }) => () => {
      setActive(!active);
      return active;
    }
  })
)(_ButtonDemo);
