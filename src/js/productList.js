import { renderListWithTemplate } from "./utils";

export default class productList {
    constructor(listElement,dataSource,catagory) {
        this.catagory = catagory;
        this.listElement = listElement;
        this.dataSource = dataSource;
    }

    async init() {
       // const desiredProductListIds = ["880RR","985RF","985PR","344YJ"];
        const list = await this.dataSource.getData(this.catagory);
        console.log(this.catagory);
        document.querySelector(".titleProducts").innerHTML +=": "+ this.catagory.charAt(0).toUpperCase() + this.catagory.slice(1);
       // this.filterProductList(desiredProductListIds, list);
       this.renderProductList(list);
    }

    prepareTemplate(template, product) {
        template.querySelector('a').href += product.Id;
        template.querySelector('img').src = product.Images.PrimaryMedium;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.ListPrice;
        return template;
    }

    renderProductList(list) {
        
        this.listElement.innerHTML = "";

        const template = document.querySelector("#product-card-template");

        // html = document.querySelector("#product-list");
        // html.innerHTML("");
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    }

    filterProductList(desiredProductListIds, list) {

        //should filer list by desired product list
        //const intersection = list.filter(element.id => desiredProductList.includes(id));
        let filtered = list.filter(item => desiredProductListIds.indexOf(item.Id) != -1);
        this.renderProductList(filtered);
    }
}