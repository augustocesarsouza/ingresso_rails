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
import "./chose_seats_and_more/index.js"
import "./chose_seats_and_more/create_obj_session_storage_date_movie.js"
import "./chose_seats_and_more/edit_seats_hide_or_show.js"
import "./chose_seats_and_more/create_scroll_feature_for_chose_seats.js"
import "./chose_seats_and_more/more_and_less_functionality.js"

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