import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
function mount(el) {
    ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV == "development") {
    const marketingRoot = document.querySelector("#marketingRoot")
    if (marketingRoot) {
        mount(marketingRoot)
    }
}

export { mount }