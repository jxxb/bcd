// wrapper for querySelector...returns matching element
export function qs(selector) {
  return document.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
export function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('product');
}

export function renderListWithTemplate(template, parent, productList, callback) {
  productList.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}