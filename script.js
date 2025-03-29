
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cart=[];
// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})" class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
const cartlist=document.getElementById("cart-list");

// Render cart list
function renderCart() {
	cartlist.innerHTML="";
	cart.forEach((product,index)=>{
		const li=document.createElement("li");
		li.innerHTML=`${product.name} - $${product.price}
		<button onclick="removeFromCart(${index})" class="remove-to-cart-btn" data-id="${product.id}">remove from Cart</button>`
	    cartlist.appendChild(li);
	});
	savecart();
}

// Add item to cart
function addToCart(productId) {
	const product=products.find((p)=>p.id===productId);
	if(product){cart.push(product);
	renderCart();}
}

// Remove item from cart
function removeFromCart(index) {
	cart.splice(index,1);
	renderCart();
}

function loadcart()
{
	const savedcart=sessionStorage.getItem("cart");
	cart=savedcart?JSON.parse(savedcart):[];
}
function savecart()
{
	sessionStorage.setItem("cart",JSON.stringify(cart))
}
// Clear cart
function clearCart() {
cart.length=0;
renderCart();
	
}

// Initial render
loadcart();
renderProducts();
renderCart();