import { renderListWithTemplate, getLocalStorage, alertMessage, removeAllAlerts, setLocalStorage } from "./utils";
import ExternalServices from './ExternalServices';

const services = new ExternalServices();
function formDataToJSON(formElement) {
   let formData = new FormData(formElement);
   const convertedJSON = Object.fromEntries(formData.entries());
   return convertedJSON;
}

function packageItems(items){
   const simplifiedItems = items.map((item)=>{
      console.log(item);
      return {
         id: item.Id,
         price: item.FinalPrice,
         name: item.Name,
         quantity: 1,
      };
   });
   return simplifiedItems;
}

export default class CheckoutProcess {

   constructor (key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;

      this.list = [];

      this.subtotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.order = 0;
   }

   init() {
      this.list = getLocalStorage(this.key);
      this.calcItemSummary();
   }

   calcOrderTotal() {
      this.shipping = 10 + (this.list.length - 1) *2;
      this.tax = (this.subtotal *.06).toFixed(2);
      //Why do we have to use parseFloat?  Aren't these numbers already?
      this.order = (parseFloat(this.subtotal) + parseFloat(this.shipping) + parseFloat(this.tax)).toFixed(2);
      this.renderTotal();
   }

   renderTotal() {
      //why output Selector?
      const shipping = document.querySelector(this.outputSelector + ' #shipping');
      const tax = document.querySelector(this.outputSelector + ' #tax');
      const order = document.querySelector(this.outputSelector + ' #order');

      shipping.innerText = '$' + this.shipping;
      tax.innerText = '$' + this.tax;
      order.innerText = '$' + this.order;
   }

  calcItemSummary() {
      //why call this an element when it's just a subtotal? why space between ' #subtotal?
      const subtotalElement = document.querySelector(this.outputSelector + ' #subtotal');
      const numItemsElement = document.querySelector(this.outputSelector + ' #numItems');

      numItemsElement.innerText = this.list.length;

      const amounts = this.list.map((item) => item.FinalPrice);
      this.subtotal = amounts.reduce((sum, item) => sum + item);
      subtotalElement.innerText = '$' + this.subtotal;
   }

   async checkout() {
      //why var vs let?
      var formElement = document.forms['checkout'];

      const json = formDataToJSON(formElement);

      json.orderDate = new Date();

      json.orderTotal = this.orderTotal;
      json.tax = this.tax;
      json.shipping = this. shipping;
      json.items = packageItems(this.list);
      console.log(json);
     try {
         const res = await services.checkout(json);
         console.log(res);
         setLocalStorage('so-cart',[]);
         location.assign("/checkout/checkedout.html");
      } 
      catch(err) {
         removeAllAlerts();
         for(let messge in err.message){
             alertMessage(err.message[message]);
            }
         console.log(err);
      }
   }
}