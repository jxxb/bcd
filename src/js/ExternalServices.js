  const baseURL="http://157.201.228.93:2992/";


  function convertToJson(t) {
    if (t.ok) return t.json();
    throw new Error("Bad Response");
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

     async loginRequest(creds) {
       //creds = {email: '', password:''};
       const options = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
     };
     return await fetch(baseURL + 'login/', options).then(convertToJson);
    }

    async checkout(order){
      const options = {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          //token
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(order),
      };
      return await fetch(baseURL + 'order/', options).then(convertToJson);
       }

  }
