import React from "react"
import ReactDOM from "react-dom"

function mount(el) {
    ReactDOM.render(<h1>Hi there</h1>, el)
}

if(process.env.NODE_ENV == "development") {
    const marketingRoot = document.querySelector("#marketingRoot")
    console.log("marketingRoot",marketingRoot)
    if(marketingRoot){
        mount(marketingRoot)
    }
}

export default mount