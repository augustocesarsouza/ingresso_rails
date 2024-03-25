// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
import "./controllers"
import "./jquery"

import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

import "./mask"

document.getElementById('carouselExampleControls').addEventListener('slid.bs.carousel', function (event) {
  const carousel = event.target;
  
  const nextButton = carousel.querySelector('.carousel-control-next');
  if (carousel.querySelector('.carousel-inner .carousel-item:last-of-type').classList.contains('active')) {
    // nesse caso a class '.carousel-item' vai ter 3 e posso pegar apartir desse ':last-of-type' se é o ultimo e 'first-of-type' se for o primeiro
    //consigo acessar 'active' do ultimo e do primeiro com e  posso esconder os botões 'nextButton' e 'prevButton'
    nextButton.classList.add('hide-next');
  } else {
    nextButton.classList.remove('hide-next');
  }
});

document.getElementById('carouselExampleControls').addEventListener('slid.bs.carousel', function (event) {
  const carousel = event.target;
  const prevButton = carousel.querySelector('.carousel-control-prev');
  if (carousel.querySelector('.carousel-inner .carousel-item:first-of-type').classList.contains('active')) {
    prevButton.classList.add('hide-prev');
  } else {
    prevButton.classList.remove('hide-prev');
  }
});

// Explicação do Funcionamento Evento
// No contexto do Bootstrap Carousel, 'slid.bs.carousel' é um evento que é acionado quando a transição entre slides é concluída.

// Portanto, quando você usa addEventListener('slid.bs.carousel', function(event) {...}), você está instruindo o navegador a executar a função especificada sempre que o evento 
// 'slid.bs.carousel' for acionado em um elemento específico. Neste caso, estamos escutando esse evento no elemento com o ID carouselExampleControls, que é o próprio carrossel Bootstrap.