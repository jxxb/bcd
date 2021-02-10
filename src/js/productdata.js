  const baseURL="http://157.201.228.93:2992/";

  function convertToJson(t) {
    if (t.ok) return t.json();
    throw new Error("Bad Response");
  }

  export default class ProductData {
    constructor(){}
     getData (category){
          return fetch(baseURL+`products/search/${category}`).then(convertToJson).then((data)=>data.Result);
      }
    async findProductById(id){
        return await fetch(baseURL+`product/${id}`).then(convertToJson).then((data)=>data.Result);
    }

    }
