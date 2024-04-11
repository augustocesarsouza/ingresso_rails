import { parse, format } from "date-fns";
import { ptBR } from "date-fns/locale";


document.addEventListener("DOMContentLoaded", () => {
  const containerSvgTicketHourBuy = document.querySelectorAll(".container-svg-ticket");
  let parentContainerLocationMovieTheater = null;
  if(containerSvgTicketHourBuy){
    containerSvgTicketHourBuy.forEach((elementHourBuy, index) => {
      elementHourBuy.addEventListener('click', () => {
        const route = elementHourBuy.getAttribute('data-route');
        // Faça o que for necessário com o índice e a rota aqui

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
          
          // console.log(objDataClick);
          
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
    const storedValue = sessionStorage.getItem('parentContainerLocationMovieTheater');
        
    if (storedValue) {
      parentContainerLocationMovieTheater = JSON.parse(storedValue);

      console.log(parentContainerLocationMovieTheater);
      
      if(parentContainerLocationMovieTheater.week === undefined){
        // Analisa a data e converte para um objeto Date
        const date = parse(parentContainerLocationMovieTheater.day, 'dd/MM', new Date());

        // Formata a data para obter o dia da semana
        // O 'EEEE' formata a data para o dia da semana em português
        const diaDaSemana = format(date, 'EEEE', { locale: ptBR });
        console.log(diaDaSemana);
      }
      
      
    }

    const containerDashboardMain = document.querySelector(".dashboard-main");
    const containerNav = document.querySelector(".nav-custom");
    const containerFooter = document.querySelector(".bg-dark");
    
    containerDashboardMain.style.display = 'none';
    containerNav.style.display = 'none';
    containerFooter.style.display = 'none';
  }
});

