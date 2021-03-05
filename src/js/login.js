import { loadHeaderFooter } from './utils.js';
import Admin from './Admin.js';

loadHeaderFooter();

const admin = new Admin('.login');
admin.showLogin();

document.querySelector('#button').addEventListener('click', (e) => {
e.preventDefault();
admin.createUser();
})