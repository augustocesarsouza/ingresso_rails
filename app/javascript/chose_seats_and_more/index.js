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

    const containerSeats = document.querySelector(".container-seats-chose-seats-and-more-2");

    const functionCreateSpanLetter = (containerSpan, letter) => {
      const spanLetter = document.createElement('span');
      spanLetter.classList.add('span-letter-right');
      spanLetter.textContent = letter;
      containerSpan.appendChild(spanLetter);
    }

    const functionCreateSpanLetterInsertBefore = (containerSpan, letter) => {
      const spanLetter = document.createElement('span');
      spanLetter.classList.add('span-letter');
      spanLetter.textContent = letter;

      const firstSpanChild = containerSpan.firstChild;
      containerSpan.insertBefore(spanLetter, firstSpanChild);
    }

    const fuctionInsertLetterAppender = (containerSpanNumberMain, numberFor) => {
      if(numberFor === 1){
        functionCreateSpanLetter(containerSpanNumberMain, 'O');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'O');
      }else if(numberFor === 2){
        functionCreateSpanLetter(containerSpanNumberMain, 'N');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'N');
      }else if(numberFor === 3){
        functionCreateSpanLetter(containerSpanNumberMain, 'M');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'M');
      }else if(numberFor === 4){
        functionCreateSpanLetter(containerSpanNumberMain, 'L');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'L');
      }else if(numberFor === 5){
        functionCreateSpanLetter(containerSpanNumberMain, 'K');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'K');
      }else if(numberFor === 6){
        functionCreateSpanLetter(containerSpanNumberMain, 'J');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'J');
      }else if(numberFor === 7){
        functionCreateSpanLetter(containerSpanNumberMain, 'I');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'I');
      }else if(numberFor === 8){
        functionCreateSpanLetter(containerSpanNumberMain, 'H');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'H');
      }else if(numberFor === 9){
        functionCreateSpanLetter(containerSpanNumberMain, 'G');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'G');
      }else if(numberFor === 10){
        functionCreateSpanLetter(containerSpanNumberMain, 'F');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'F');
      }else if(numberFor === 11){
        functionCreateSpanLetter(containerSpanNumberMain, 'E');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'E');
      }else if(numberFor === 12){
        functionCreateSpanLetter(containerSpanNumberMain, 'D');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'D');
      }else if(numberFor === 13){
        functionCreateSpanLetter(containerSpanNumberMain, 'C');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'C');
      }else if(numberFor === 16){
        functionCreateSpanLetter(containerSpanNumberMain, 'B');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'B');
      }else if(numberFor === 17){
        functionCreateSpanLetter(containerSpanNumberMain, 'A');
        functionCreateSpanLetterInsertBefore(containerSpanNumberMain, 'A');
      }
    }

    const functionDefineWetherSpanAppearsOrNot = (containerSpanNumber, numberJ, numberI) => {
      if(numberJ === 14 || numberJ === 15) {
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
      }

      if(numberJ > 1 && numberI === 5 || numberJ > 1 && numberI === 6){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
      }

      if(numberJ > 1 && numberI === 23 || numberJ > 1 && numberI === 24){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
      }

      if(numberJ === 1 && numberI === 13 || numberJ === 1 && numberI === 14){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
      }

      if(numberJ >= 8 && numberJ <= 11){
        if(numberI === 25 || numberI === 26){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
        }
      }

      if(numberJ > 7 && numberJ <= 13){
        if(numberI >= 1 && numberI <= 4){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
        }
      }

      if(numberJ === 13){
        if(numberI === 7 || numberI === 8 || numberI === 21 || numberI === 22){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
        }
      }
    }

    for (let j = 1; j <= 17; j++) {
      const containerSpanNumberMain = document.createElement('div');
      containerSpanNumberMain.classList.add('container-span-number-chose-seats-and-more-main');

      for (let i = 1; i <= 26; i++) {
        const containerSpanNumber = document.createElement('div');
        containerSpanNumber.classList.add('container-span-number-chose-seats-and-more');

        functionDefineWetherSpanAppearsOrNot(containerSpanNumber, j, i);
        
        const spanNumber = document.createElement('span');
        containerSpanNumber.appendChild(spanNumber);

        containerSpanNumberMain.appendChild(containerSpanNumber);
      }

      if(j !== 15){
        fuctionInsertLetterAppender(containerSpanNumberMain, j);
        containerSeats.appendChild(containerSpanNumberMain);
      }
    }

    const containerSpanScreen = document.createElement('div');
    containerSpanScreen.classList.add('container-screen');
    const spanScreen = document.createElement('span');
    spanScreen.classList.add('span-screen');
    spanScreen.textContent = "TELA";

    containerSpanScreen.appendChild(spanScreen);

    containerSeats.appendChild(containerSpanScreen);

    const containerSeatsChoseAndMore1 = document.querySelector(".container-seats-chose-seats-and-more-1");
    const containerSeatsChoseAndMore2 = document.querySelector(".container-seats-chose-seats-and-more-2");
    

    let isDragging = false;
    let lastX = 0;
    let seatsMoveX = 0;
    const valueToSumAndSubtractXRef = 0.3;
    const valueToSumAndSubtractYRef = 0.7;


    containerSeatsChoseAndMore1.addEventListener("mousedown", (e) => {
      lastX = e.clientX;
      console.log(lastX + " CLICK do X");
      
      isDragging = true;
    });

    containerSeatsChoseAndMore1.addEventListener("mouseup", (e) => {
      isDragging = false;
    });

    containerSeatsChoseAndMore1.addEventListener("mousemove", (e) => {
      if(isDragging){
        console.log(e.clientX);
        console.log(lastX + " ultima posição do X");
        
        if(e.clientX < lastX){
          if(seatsMoveX <= -100){
            seatsMoveX = seatsMoveX;
          }else {
            seatsMoveX = seatsMoveX - valueToSumAndSubtractXRef;
          }

          containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, 0px) scale(1)`;

          lastX = e.clientX;
          console.log(lastX + " ultima posição ATT do X");
        }else if(e.clientX > lastX){
          if(seatsMoveX <= 100){
            seatsMoveX = seatsMoveX + valueToSumAndSubtractXRef;
          }else {
            seatsMoveX = seatsMoveX;
          }

          containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, 0px) scale(1)`;

          lastX = e.clientX;
        }

        
        // console.log(e.clientX);
      }
    });

  }
});
