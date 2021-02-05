import { loadHeaderFooter } from './utils';

loadHeaderFooter();

let itemNum = 0;
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getCartContents() {
  let markup = "";
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => renderCartItem(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  const removeButtons = document.querySelectorAll(".product-list button");
  removeButtons.forEach(button => {
    button.addEventListener("click", removeCartItem);
  })
  //document.querySelector(".product-list").innerHTML = renderCartItem(cartItems);
}

function renderCartItem(item) { 
  const newItem = `<li class="cart-card divider item${itemNum}">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="remove${item.Id} " data-Id="${itemNum}" value="Remove">Remove</button>
</li>`;
  itemNum++;
  console.log(newItem);
  return newItem;
}
/*
add button to remove item
add event listener that calls removeCartItem function
use array methoods to remove the correct cart item
delete now unused html
*/
function removeCartItem(ev){
  const index = ev.target.dataset.id;
  let cart  = getLocalStorage('so-cart');
  cart.splice(index, 1);
  setLocalStorage("so-cart", cart); 
  document.querySelector(".item"+index).remove(); 
  console.log("I work");
}

getCartContents();
