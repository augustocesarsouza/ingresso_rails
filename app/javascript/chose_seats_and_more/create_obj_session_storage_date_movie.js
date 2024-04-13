import { parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";

document.addEventListener("DOMContentLoaded", () => {
  const containerSvgTicketHourBuy = document.querySelectorAll(".container-svg-ticket");
  let parentContainerLocationMovieTheater = null;
  if(containerSvgTicketHourBuy){
    containerSvgTicketHourBuy.forEach((elementHourBuy, index) => {
      elementHourBuy.addEventListener('click', () => {
        const route = elementHourBuy.getAttribute('data-route');

        parentContainerLocationMovieTheater = elementHourBuy.parentElement.parentElement.parentElement.parentElement;
        let firstChild = parentContainerLocationMovieTheater.firstChild;
        let paragraphNameLocation = firstChild.nextSibling.querySelector(".p-name-cinema");

        let spanHour = elementHourBuy.querySelector(".span-movie-times");
        
        const objDataClick = {
          nameCinema: paragraphNameLocation.textContent,
          hourChose: spanHour.textContent
        };

        const containerDate = document.querySelectorAll(".container-date-chose-movie-theater");
        const containerDateToday = document.querySelector(".container-date-chose-movie-theater-today");
        
        const computedStyleDateToday = window.getComputedStyle(containerDateToday);
        
        if(computedStyleDateToday.color === "rgb(255, 255, 255)"){
          const spanDay = containerDateToday.firstChild;

          objDataClick["day"] = spanDay.textContent;
          
        }else {
          for (let i = 0; i < containerDate.length; i++) {
            const elementDate = containerDate[i];
            
            const computedStyle = window.getComputedStyle(elementDate);
      
            if(computedStyle.color === "rgb(255, 255, 255)"){
              const spanDay = elementDate.firstChild;
              const spanWeek = elementDate.lastChild;

              objDataClick["day"] = spanDay.textContent;
              objDataClick["week"] = spanWeek.textContent;
              break;
            }
          }
        }
    
        sessionStorage.setItem('parentContainerLocationMovieTheater', JSON.stringify(objDataClick));

        window.location.href = route;
      });
    });
  }

  if(window.location.pathname == "/chose_seats_and_more"){
    const containerDashboardMain = document.querySelector(".dashboard-main");
    const containerNav = document.querySelector(".nav-custom");
    const containerFooter = document.querySelector(".bg-dark");
    
    containerDashboardMain.style.display = 'none';
    containerNav.style.display = 'none';
    containerFooter.style.display = 'none';

    const storedValue = sessionStorage.getItem('parentContainerLocationMovieTheater');
    const spanLocationChoseSeats = document.querySelector(".span-location-chose-seats-and-more");
    const spanCalendarChoseSeats = document.querySelector(".span-calendar-chose-seats-and-more");
    const spanTimeChoseSeats = document.querySelector(".span-time-chose-seats-and-more");
        
    if (storedValue) {
      parentContainerLocationMovieTheater = JSON.parse(storedValue);
      
      if(parentContainerLocationMovieTheater.week === undefined){
        const date = parse(parentContainerLocationMovieTheater.day, 'dd/MM', new Date());

        const diaDaSemana = format(date, 'EEE', { locale: ptBR });
        let week = diaDaSemana.slice(0, 3);

        let nameCinemaHalf = parentContainerLocationMovieTheater.nameCinema.split(' ');
        let nameCinemaJoin = `${nameCinemaHalf[0]} ${nameCinemaHalf[1]} ${nameCinemaHalf[2]}`;

        spanLocationChoseSeats.textContent = nameCinemaJoin;
        spanCalendarChoseSeats.textContent = `${week} ${parentContainerLocationMovieTheater.day}`;
        spanTimeChoseSeats.textContent = parentContainerLocationMovieTheater.hourChose;
      }else {
        let nameCinemaHalf2 = parentContainerLocationMovieTheater.nameCinema.split(' ');
        let nameCinemaJoin2 = `${nameCinemaHalf2[0]} ${nameCinemaHalf2[1]} ${nameCinemaHalf2[2]}`;
        
        spanLocationChoseSeats.textContent = nameCinemaJoin2;
        spanCalendarChoseSeats.textContent = `${parentContainerLocationMovieTheater.week} ${parentContainerLocationMovieTheater.day}`;
        spanTimeChoseSeats.textContent = parentContainerLocationMovieTheater.hourChose;
      }
    }
  }
});