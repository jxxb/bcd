import { ExternalServices } from './ExternalServices';

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

   showLogin() {
      const form = `<form>Email<input type='text' class='email'></input>Password<input type='text' class='password'></input><button type='submit' onclick='login()'>Submit</button></form>`;
      document.querySelector('.login').innerHTML = form;
   }
}