// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
import "./controllers"
import "./jquery"

import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

import "./mask"

import "./carouse_functionality"
import "./login_or_register"
import "./chose_movie_theater/index.js"

document.addEventListener("DOMContentLoaded", () => {
  const colCustoms = document.querySelectorAll(".col-custom");
  
  if(colCustoms){
    colCustoms.forEach((colCustom, index) => {
      colCustom.addEventListener('click', () => {
        const route = colCustom.getAttribute('data-route');
        // Faça o que for necessário com o índice e a rota aqui
        window.location.href = route; // Exemplo: Redirecionamento para a rota
      });
    });
  }
});