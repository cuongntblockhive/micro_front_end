import productMount from 'products/ProductsIndex'
import cartMount from 'cart/CartIndex'

const productListE = document.querySelector("#products")
const cartE = document.querySelector("#cart")
productMount(productListE)
cartMount(cartE)