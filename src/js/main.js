import ProductData from "./productdata";
import ProductList from "./productList";

const productData = new ProductData('tents');

const ListElement = document.querySelector('.product-list');

const productList = new ProductList(ListElement, productData, 'tents');

productList.init();
