// Create variables and assign their values
var stock = true;
var shipping = false;

// Get the element that has an id of stock
var stockAvailable = document.getElementById('stock');
// Set class name with value of inStock variable
stockAvailable.className = stock;

// Get the element that has an id of shipping
var shippingAvailable = document.getElementById('shipping');
// Set class name with value of shipping variable
shippingAvailable.className = shipping;
