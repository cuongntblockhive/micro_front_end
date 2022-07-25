import productMount from 'products/ProductsIndex'
import 'cart/CartIndex'

const productListE = document.querySelector("#products")
console.log("proidcurtListE", productListE)
productMount(productListE)