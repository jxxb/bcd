import {setLocalStorage, getLocalStorage} from './utils.js';

export default class ProductDetails {
    constructor(productId, datasource){
        this.productId = productId;
        this.product = {};
        this.datasource = datasource;
     }
    async init(){
        this.product = await this.datasource.findProductById(this.productId);
        document.querySelector('main').innerHTML = this.renderProductDetails();
        document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
    }
    addToCart(t) {
        //const product = products.find((n) => n.Id === t.target.dataset.id);
        
        let cart  = getLocalStorage('so-cart');
        if (cart === null) {
            cart = [];
        }
        cart.push(this.product);
        setLocalStorage("so-cart", cart);
        
        console.log(this.product);
      }
    renderProductDetails(){
        console.log(this.product);
        return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
            class='divider'
            src='${this.product.Image}'
            alt='${this.product.NameWithoutBrand}'
            />
            <p class="product-card__price">$${this.product.FinalPrice}</p>
            <p class="product__color">${this.product.Colors[0].ColorName}</p>
            <p class="product__description"> 
            ${this.product.DescriptionHtmlSimple} 
            </p>
            <div class="product-detail__add">
                <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
            </div>
            </section> `;
    }

    }