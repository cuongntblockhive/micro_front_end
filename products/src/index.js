import { faker } from '@faker-js/faker';

let productString = ""

for (let index = 0; index < 10; index++) {
    productString += `<div>${faker.commerce.productName()}</div>`
}
console.log(productString)