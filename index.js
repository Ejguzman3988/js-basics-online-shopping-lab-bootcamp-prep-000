var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var addedItem = { itemName: [item], itemPrice: Math.floor(Math.random(1,100)*10)}
 cart.push(addedItem)
 return `${item} has been added to your cart.`
}
function viewCart() {
  // write your code here
  var string = "In your cart, you have";
  for(let i = 0; i < cart.length(); i++){
    string += ` ${cart[i].addedItem.itemName} at ${cart[i].addedItem.itemPrice},`
  }
  string += `and ${cart[cart.length()].addedItem.itemName} at ${cart[cart.length()].addedItem.itemPrice}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
