import ExternalServices from "./ExternalServices";
import {getParams} from "./utils.js";
import ProductDetails from "./productdetails.js"

const productId = getParams('product');
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();

//document.querySelector('#addToCart').addEventListener('click',product.addToCart(productId));


/*let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}*/



