import { faker } from '@faker-js/faker';

function mount(el) {
    let productString = ""

    for (let index = 0; index < 10; index++) {
        productString += `<div>${faker.commerce.productName()}</div>`
    }
    el.innerHTML = productString

}
if (process.env.NODE_ENV == "development") {
    const productListE = document.querySelector("#product-list")
    if(productListE){
        mount(productListE)
    }
    
}

export default mount

