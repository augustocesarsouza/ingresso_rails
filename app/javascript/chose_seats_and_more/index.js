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

    const containerInfoMovieOrderSumarry2 = document.createElement("div");
    containerInfoMovieOrderSumarry2.classList.add("container-info-movie-order-sumarry");

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

      const spanRegionName2 = document.createElement("span");
      spanRegionName2.classList.add("span-region-name-order-summary");
      spanRegionName2.textContent = paragraphRegionChose.textContent;

      containerInfoMovieOrderSumarry.appendChild(spanRegionName);

      const date = parse(parentContainerLocationMovieTheater.day, 'dd/MM', new Date());

      const diaDaSemana = format(date, 'EEE', { locale: ptBR });
      let week = diaDaSemana.slice(0, 3).toUpperCase();

      let conjuntoStringData = `${week}-${parentContainerLocationMovieTheater.day}`;

      const containerDayWeekHourMovie = document.createElement("div");
      containerDayWeekHourMovie.classList.add("container-day-week-hour-order-summary");

      const containerDayWeekHourMovie2 = document.createElement("div");
      containerDayWeekHourMovie2.classList.add("container-day-week-hour-order-summary");

      const spanDayWeekData = document.createElement("span");
      spanDayWeekData.classList.add("span-day-week-hour-order-summary");
      spanDayWeekData.textContent = conjuntoStringData;

      const spanDayWeekData2 = document.createElement("span");
      spanDayWeekData2.classList.add("span-day-week-hour-order-summary");
      spanDayWeekData2.textContent = conjuntoStringData;

      containerDayWeekHourMovie.appendChild(spanDayWeekData);
      containerDayWeekHourMovie2.appendChild(spanDayWeekData2);

      const spanHourMovie = document.createElement("span");
      spanHourMovie.classList.add("span-hour-movie-order-summary");
      spanHourMovie.textContent = parentContainerLocationMovieTheater.hourChose;

      const spanHourMovie2 = document.createElement("span");
      spanHourMovie2.classList.add("span-hour-movie-order-summary");
      spanHourMovie2.textContent = parentContainerLocationMovieTheater.hourChose;

      containerDayWeekHourMovie.appendChild(spanHourMovie);
      containerDayWeekHourMovie2.appendChild(spanHourMovie2);

      containerInfoMovieOrderSumarry.appendChild(containerDayWeekHourMovie);

      // parte para quando for menor que 1400
      const containerNameMovieLocationHourDate = document.querySelector(".container-name-movie-location-hour-date");
      let containerMovieTitleMovieReating = document.querySelector(".container-movie-title-movierating");
      
      const containerMovieTitleMovieRating2 = document.createElement("div");
      containerMovieTitleMovieRating2.classList.add("container-movie-title-movierating");

      const spanTitleOrderSummary = document.createElement("span");
      spanTitleOrderSummary.classList.add("span-title-order-sumarry");
      spanTitleOrderSummary.textContent = containerMovieTitleMovieReating.firstChild.nextSibling.textContent;
      
      const containerMovieRating2 = document.createElement("div");
      containerMovieRating2.classList.add("container-movierating");
      
      const spanRating = document.createElement("span");
      spanRating.textContent = containerMovieTitleMovieReating.firstChild.parentElement.lastElementChild.firstChild.nextSibling.textContent;

      const spanNameCinema = document.querySelector(".span-name-cinema");
      const spanRoom = document.querySelector(".span-room");

      const containerRegionRoom2 = document.createElement("div");
      containerRegionRoom2.classList.add("container-region-room");

      const spanNameCinema2 = document.createElement("span");
      spanNameCinema2.classList.add("span-name-cinema");
      spanNameCinema2.textContent = parentContainerLocationMovieTheater.nameCinema;

      const spanRoom2 = document.createElement("span");
      spanRoom2.classList.add("span-room");
      spanRoom2.textContent = spanRoom.textContent;

      containerRegionRoom2.appendChild(spanNameCinema2);
      containerRegionRoom2.appendChild(spanRoom2);

      containerMovieRating2.appendChild(spanRating);

      containerMovieTitleMovieRating2.appendChild(spanTitleOrderSummary);
      containerMovieTitleMovieRating2.appendChild(containerMovieRating2);

      containerInfoMovieOrderSumarry2.appendChild(containerMovieTitleMovieRating2);
      containerInfoMovieOrderSumarry2.appendChild(containerRegionRoom2);
      containerInfoMovieOrderSumarry2.appendChild(spanRegionName2);
      containerInfoMovieOrderSumarry2.appendChild(containerDayWeekHourMovie2);

      containerNameMovieLocationHourDate.appendChild(containerInfoMovieOrderSumarry2);
    }
    
    //click in chose seats / tickets / bomboniere / payment

    const containerSvgTickets = document.querySelector('.div-svg-tickets');
    const spanItensValuesSeats = document.querySelector(".span-itens-values-seats");
    const containerLineWhite1 = document.querySelector(".line-white-1");

    const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats'); 

    containerSvgTickets.addEventListener("click", () => {
      if(containerSvgTickets.style.borderColor === "rgb(152, 170, 236)" && Number(spanItensValuesSeats.textContent) > 0){
        containerLineWhite1.style.background =  "rgb(152, 170, 236)";
        containerSvgTickets.style.borderColor = "transparent";
        containerSvgTickets.style.background = "rgb(49, 85, 232)";
        containerSvgTickets.firstChild.nextSibling.style.fill = "#fff";

        containerSvgChoseOfSeats.style.background = "transparent";
        containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
        containerSvgChoseOfSeats.style.borderColor = "rgb(152, 170, 236)";
      }

      // rgb(152, 170, 236)
    });

    // const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats');

    containerSvgChoseOfSeats.addEventListener("click", () => {
      if(containerSvgTickets.style.background === "rgb(49, 85, 232)" && Number(spanItensValuesSeats.textContent) > 0){
        containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
        containerSvgTickets.style.background = "transparent";
        containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";

        containerSvgChoseOfSeats.style.borderColor = "transparent";
        containerSvgChoseOfSeats.style.background = "rgb(49, 85, 232)";
        containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "#fff";
        containerLineWhite1.style.background =  "rgb(52, 60, 70)";
      }
    })

  }
});

// document.addEventListener("");