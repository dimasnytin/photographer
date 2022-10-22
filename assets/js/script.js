'use strict';



// добавить событие на несколько элементов
const addEventOnElements = function(elements, evenType, callback) {
  for(let i = 0; i < elements.lenght; i++){
    elements[i].addEventListener(evenType, callback);
  }
}

// PREOLOADING ЗАГРУЗЧИК
const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});