import { parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";

document.addEventListener("DOMContentLoaded", () => {
  if(window.location.pathname == "/chose_seats_and_more"){
    const toggleCheckbox = document.querySelector('.toggle-checkbox');

    toggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
          // console.log('Ligado');
      } else {
          // console.log('Desligado');
      }
    });

    const storedValue = sessionStorage.getItem('parentContainerLocationMovieTheater');
    const containerInfoMovieOrderSumarry = document.querySelector(".container-info-movie-order-sumarry");

    if (storedValue) {
      parentContainerLocationMovieTheater = JSON.parse(storedValue);

      const spanNameCinema = document.querySelector(".span-name-cinema");

      const maxLength = 22;

      spanNameCinema.textContent = parentContainerLocationMovieTheater.nameCinema.substring(0, maxLength) + '...';;
    }

    const paragraphRegionChose = document.querySelector(".paragraph-region-chose");

    if(containerInfoMovieOrderSumarry){
      const spanRegionName = document.createElement("span");
      spanRegionName.classList.add("span-region-name-order-summary");
      spanRegionName.textContent = paragraphRegionChose.textContent;

      containerInfoMovieOrderSumarry.appendChild(spanRegionName);

      // console.log(parentContainerLocationMovieTheater);

      const date = parse(parentContainerLocationMovieTheater.day, 'dd/MM', new Date());

      const diaDaSemana = format(date, 'EEE', { locale: ptBR });
      let week = diaDaSemana.slice(0, 3).toUpperCase();

      let conjuntoStringData = `${week}-${parentContainerLocationMovieTheater.day}`;

      const containerDayWeekHourMovie = document.createElement("div");
      containerDayWeekHourMovie.classList.add("container-day-week-hour-order-summary");

      const spanDayWeekData = document.createElement("span");
      spanDayWeekData.classList.add("span-day-week-hour-order-summary");
      spanDayWeekData.textContent = conjuntoStringData;

      containerDayWeekHourMovie.appendChild(spanDayWeekData);

      const spanHourMovie = document.createElement("span");
      spanHourMovie.classList.add("span-hour-movie-order-summary");
      spanHourMovie.textContent = parentContainerLocationMovieTheater.hourChose;

      containerDayWeekHourMovie.appendChild(spanHourMovie);

      containerInfoMovieOrderSumarry.appendChild(containerDayWeekHourMovie);
    }
    
  }
});
