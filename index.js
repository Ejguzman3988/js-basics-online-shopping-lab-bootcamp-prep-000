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
 
 //crea
 var addedItem = { itemName: [item], itemPrice: Math.floor(Math.random(1,100)*10)}
 cart.push(addedItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have";
  if(cart.length === 1){
    string += ` ${cart[0].itemName} at ${cart[0].itemPrice}.`
  }else if(cart.length === 0){
    string = "Your shopping cart is empty."
  }
  else{
    for(let i = 0; i < cart.length; i++){
    string += ` ${cart[i].itemName} at ${cart[i].itemPrice},`
  }
  string += `and ${cart[cart.length].itemName} at ${cart[cart.length].itemPrice}.`
  }
  return string
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
