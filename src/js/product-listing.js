import ProductData from "./productdata";
import ProductList from "./productList";
import { loadHeaderFooter, getParams } from "./utils";

loadHeaderFooter();

const category = getParams('category');
console.log(category);

const productData = new ProductData();

const ListElement = document.querySelector('.product-list');

const productList = new ProductList(ListElement, productData, category);

productList.init();