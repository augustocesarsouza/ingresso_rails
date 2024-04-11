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
import "./chose_movie_theater/date_movie_theater.js"
import "./chose_movie_theater/filtre_location_by_click_category.js"
import "./chose_movie_theater/event_mouse_enter_leave_for_hour_buy.js"

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