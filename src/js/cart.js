import { loadHeaderFooter } from './utils';
import shoppingList from './shoppingCart.js';

loadHeaderFooter();

const cart = new shoppingList('so-cart', document.querySelector('.product-list'));
cart.init();
