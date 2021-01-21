import ProductData from "./productdata";
import {getParams} from "./utils.js";
import ProductDetails from "./productdetails.js"

const productId = getParams('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();

/*let products = [];

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}*/



