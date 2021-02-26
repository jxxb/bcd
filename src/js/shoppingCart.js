import { renderListWithTemplate, getLocalStorage } from "./utils";

let totalPrice = 0;

export default class shoppingList {
    constructor(key,listElement) {
        this.key = key;
        this.listElement = listElement;
    }

    async init() {

      //shouldn't we need an await?!
        const list = getLocalStorage(this.key);
        await this.renderList(list);
        document.querySelector('.totalPrice').innerHTML += totalPrice;
        return totalPrice;
    }

    prepareTemplate(template, product) {
        //template.querySelector('a').href += product.Id;
        template.querySelector('.cart-card__image img').src = product.Images.PrimarySmall;
        template.querySelector('.cart-card__image img').alt += product.Name;
        template.querySelector('.cart__name').textContent = product.Name;
        template.querySelector('.cart__color').textContent = product.Colors[0].ColorName;
        template.querySelector('.cart-card__price').textContent += product.FinalPrice;
        totalPrice += product.FinalPrice;
        return template;
    }

    renderList(list) {
        
        this.listElement.innerHTML = "";

        const template = document.querySelector("#cart-card-template");
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }
}