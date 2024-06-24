let button = document.getElementById('Changecolor')
let originalColor = button.style.backgroundColor
let isOriginalColor = true
function toggleButtonColor() {
  if (isOriginalColor) {
    button.style.backgroundColor = '#1db954'
  } else {
    button.style.backgroundColor = originalColor
  }

  isOriginalColor = !isOriginalColor
}
button.addEventListener('click', toggleButtonColor)

// Products
let products = {
  WhiteCoffee: {
    stock: 4,
  },
}
// Displaying Products
function displayProducts() {
  document.getElementById('WhiteCoffee').innerHTML =
    'White Coffee: ' + products.WhiteCoffee.stock
}
displayProducts()
//Add stock by increasing it by 1 but if its above 10 alert them
function addStock() {
  if (products.WhiteCoffee.stock < 10) {
    products.WhiteCoffee.stock++
    displayProducts()
  } else {
    alert('Who needs more than 10 coffees ;-;')
  }
}
//reduce the stock but if its bellow 0 alert them
function reduceStock() {
  if (products.WhiteCoffee.stock > 0) {
    products.WhiteCoffee.stock--
    displayProducts()
  } else {
    alert('Well.... We ran out, thanks ig?')
  }
}
document.getElementById('addStock').addEventListener('click', addStock)
document.getElementById('reduceStock').addEventListener('click', reduceStock)
