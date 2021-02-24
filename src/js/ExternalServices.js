  const baseURL="http://157.201.228.93:2992/";

  function convertToJson(t) {
    if (t.ok) return t.json();
    
    else {
      const jsonResponse = t.json();
      throw {name: 'servicesError', message: jsonResponse};
    }
   
  }

  export default class ExternalServices {
    constructor(){}
     getData (category){
          return fetch(baseURL+`products/search/${category}`).then(convertToJson).then((data)=>data.Result);
      }
    async findProductById(id){
        return await fetch(baseURL+`product/${id}`).then(convertToJson).then((data)=>data.Result);
    }
    async checkout(order){
    const options = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
     }
    }

    
