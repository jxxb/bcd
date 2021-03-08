import ExternalServices from './ExternalServices';
import { alertMessage } from './utils.js';

export default class Admin {
   constructor(outputSelector) {
      this.mainElement = document.querySelector(outputSelector);
      this.token = null;
      this.services = new ExternalServices();
   }

   async login(creds, next) {
     
      try {
         this.token = await this.services.loginRequest(creds);
         next();
      } catch(err) {
         alertMessage(err.message.message);
      }
      
   }

   async showOrders() {
      try {
         const orders = await this.services.getOrders(this.token);
         this.mainElement.innerHTML = orderHTML();
         const parent = document.querySelector('#orders tbody');
         parent.innerHTML = orders.map(order=> `<tr><td>${order.id}</td><td>${new Date(order.orderDate).toLocaleDateString('en-US')}</td><td>${order.items ? order.items.length : 0 }</td><td>${order.orderTotal}</td></tr>`).join('');
         console.log(order.items.length);
      } catch(err) {
         console.log(err);
      }
   }

   showLogin() {
      const form = `<form><div><br>Email<input type='text' class='email' value='user1@email.com'></input><br>Password<input type='text' class='password' value='user1'></input><br></div><button type='submit' id='button'>Submit</button></form>`;
      document.querySelector('.login').innerHTML = form;
   }

   createUser(){
      const email = document.querySelector('.email').value;
      const password = document.querySelector('.password').value;
      this.login({email,password},this.showOrders.bind(this));
   }
}

function orderHTML() {
   return `<h2>Current Orders</h2><table id='orders'><thead><tr><th>ID</th><th>Date</th><th>#Items</th><th>Total</th></tr></thead><tbody class='order-body'></tbody></table>`;
}