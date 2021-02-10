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
  return urlParams.get(param);
}

export function renderListWithTemplate(template, parent, productList, callback) {
  productList.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}

export function renderWithTemplate(template, parent, data, callback) {

  let clone = template.content.cloneNode(true);
  if (callback) {
    clone = callback(clone,data);
  }

  parent.appendChild(clone);

  // productList.forEach(item => {
  //   const clone = template.content.cloneNode(true);
  //   const templateWithData = callback(clone, item);
  //   parent.appendChild(templateWithData);
  // })
}

export async function loadTemplate(path) {
  let response = await fetch(path);
  let text = await response.text();

  let template = document.createElement('template');
  template.innerHTML = text;
  return template;
}

export async function loadHeaderFooter() {
  let headerT = await loadTemplate('../partials/header.html');
  let footerT = await loadTemplate('../partials/footer.html');
  let headerD = document.getElementById('main-header');
  let footerD = document.getElementById('main-footer');
  renderWithTemplate(headerT,headerD);
  renderWithTemplate(footerT,footerD);
}