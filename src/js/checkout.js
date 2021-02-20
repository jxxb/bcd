import { loadHeaderFooter } from './utils';
import shoppingList from './shoppingCart.js';
import CheckoutProcess from './checkoutProcess.js';

loadHeaderFooter();

const checkout = new CheckoutProcess('so-cart','.orderSummary');
checkout.init();

