import React from "react";
import ReactDOM from "react-dom";

function mount(el) {
  ReactDOM.render(<h1>Hi everything</h1>, el);
}

if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#root-marketing");
  console.log("el",el)
  if (el) mount(el);
}

export default mount
