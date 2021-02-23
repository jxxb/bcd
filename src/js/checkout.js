import { loadHeaderFooter } from './utils';
import CheckoutProcess from './checkoutProcess.js';

loadHeaderFooter();

const checkout = new CheckoutProcess('so-cart','.orderSummary');
checkout.init();

document.querySelector('#zip').addEventListener('blur', checkout.calcOrderTotal.bind(checkout));
document.querySelector('#orderSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    checkout.checkout();
})

