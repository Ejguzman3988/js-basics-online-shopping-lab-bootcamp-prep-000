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
 
 //creates the item to add into the cart
 var addedItem = { itemName: [item], itemPrice: Math.floor( (Math.random() * (100 - 1) + 1) )}
 
 //adds the item into the cart
 cart.push(addedItem)
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  
  //Initial string to return
  var string = "In your cart, you have";
 
  //When there is only 1 item in the cart
  if(cart.length === 1){
    string += ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
  //When the cart is empty
  else if(cart.length === 0){
    string = "Your shopping cart is empty."
  }
  
  //When there is more than 1 item in the cart
  else{
    
    for(let i = 0; i < cart.length-1; i++){
    
      string += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    
    //This gets the last item correctly
    string += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  
  return string
}


function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++){
    total += parseInt(cart[i].itemPrice)
  }
  
  return total
}

function removeFromCart(item) {
  // write your code here
  
  var newArray = []
  var check = 0;
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      check = 1
      
      newArray = cart.splice(i, 1)
      break;
    }
  }
  if (check === 0){
    return "That item is not in your cart."
  }else{
    return newArray
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
  var total = 0;
  
  if (cardNumber === ""){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    
    total = cart.total()
    cart = []
    
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
