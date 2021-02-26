import { alertMessage, loadHeaderFooter } from './utils';
import CheckoutProcess from './checkoutProcess.js';

loadHeaderFooter();

const checkout = new CheckoutProcess('so-cart','.orderSummary');
checkout.init();

document.querySelector('#zip').addEventListener('blur', checkout.calcOrderTotal.bind(checkout));
document.querySelector('#orderSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    var myForm = document.forms[0];
    var chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if (chk_status){
        checkout.checkout();
    }
    else{
        alertMessage('you are wrong?');
    }
});

