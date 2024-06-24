// Products//
let products = {
  WhiteCoffee: {
    stock: 4,
    price: 4,
  },
  BlackCoffee: {
    stock: 4,
    price: 3.5,
  },
  Muffin: {
    stock: 5,
    price: 5.5,
  },
  Eggs: {
    stock: 1,
    price: 12.5,
  },
}
// Displaying Products
// here were using the name "displayProducts" to describe what the function is doing//
// The function below has the task of displaying on the webpage the product and how many of that product is in stock//
function displayProducts() {
  document.getElementById('WhiteCoffee').innerHTML =
    'White Coffee: ' + products.WhiteCoffee.stock
  document.getElementById('BlackCoffee').innerHTML =
    'Black Coffee: ' + products.BlackCoffee.stock
  document.getElementById('Muffin').innerHTML =
    'Muffin: ' + products.Muffin.stock
  document.getElementById('Eggs').innerHTML = 'Eggs: ' + products.Eggs.stock
}
// This code here "activates" the function or in programming terms "calls it"//
displayProducts()

function start() {
  three()
}
function three() {
  let three = document.getElementById('three')
  three.classList.add('purple')
}
