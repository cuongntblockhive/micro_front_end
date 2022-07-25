import { faker } from '@faker-js/faker';

const cart = document.querySelector("#cart")
cart.innerHTML = `You have ${faker.random.numeric()} products in your cart`