import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

function mount() {
    ReactDOM.render(<App />, document.querySelector("#root"))
}

mount()