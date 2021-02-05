import ProductData from "./productdata";
import ProductList from "./productList";
import { loadHeaderFooter } from "./utils";

loadHeaderFooter();

const productData = new ProductData('tents');

const ListElement = document.querySelector('.product-list');

const productList = new ProductList(ListElement, productData, 'tents');

productList.init();
