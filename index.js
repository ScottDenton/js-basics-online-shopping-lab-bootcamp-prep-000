

var cart = [];

function addToCart (item) {
  var price = Math.floor(100*(Math.random()));
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() {
  
}

function total() {
  
}

function removeFromCart(item) {

}
  
function placeOrder() {
 

}




