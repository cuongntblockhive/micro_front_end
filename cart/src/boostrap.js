import { faker } from '@faker-js/faker';

function mount(el) {
		el.innerHTML = `You have ${faker.random.numeric()} products in your cart`
}

if (process.env.NODE_ENV == "development") {
    const cartE = document.querySelector("#cart")
    if(cartE){
        mount(cartE)
    }
    
}

export default mount
