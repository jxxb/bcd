import ExternalServices from "./ExternalServices";
import ProductList from "./productList";
import { loadHeaderFooter, getParams } from "./utils";

loadHeaderFooter();

const category = getParams('category');
console.log(category);

const externalServices = new ExternalServices();

const ListElement = document.querySelector('.product-list');

const productList = new ProductList(ListElement, externalServices, category);

productList.init();