document.addEventListener("DOMContentLoaded", () => {
  if(window.location.pathname == "/chose_seats_and_more"){
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
        containerSpanNumber.style.color = "transparent";
      }

      if(numberJ > 1 && numberI === 5 || numberJ > 1 && numberI === 6){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
        containerSpanNumber.style.color = "transparent";
      }

      if(numberJ > 1 && numberI === 23 || numberJ > 1 && numberI === 24){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
        containerSpanNumber.style.color = "transparent";

      }

      if(numberJ === 1 && numberI === 13 || numberJ === 1 && numberI === 14){
        containerSpanNumber.style.background = "transparent";
        containerSpanNumber.style.cursor = "auto";
        containerSpanNumber.style.color = "transparent";

      }

      if(numberJ >= 8 && numberJ <= 11){
        if(numberI === 25 || numberI === 26){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
          containerSpanNumber.style.color = "transparent";
        }
      }

      if(numberJ > 7 && numberJ <= 13){
        if(numberI >= 1 && numberI <= 4){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
          containerSpanNumber.style.color = "transparent";
        }
      }

      if(numberJ === 13){
        if(numberI === 7 || numberI === 8 || numberI === 21 || numberI === 22){
          containerSpanNumber.style.background = "transparent";
          containerSpanNumber.style.cursor = "auto";
          containerSpanNumber.style.color = "transparent";
        }
      }
    }

    const functionLetterNow = (j) => {
      let letterNow = "";

      if(j === 1){
        letterNow = 'O';
      }else if(j === 2){
        letterNow = 'N';
      }else if(j === 3){
        letterNow = 'M';
      }else if(j === 4){
        letterNow = 'L';
      }else if(j === 5){
        letterNow = 'K';
      }else if(j === 6){
        letterNow = 'J';
      }else if(j === 7){
        letterNow = 'I';
      }else if(j === 8){
        letterNow = 'H';
      }else if(j === 9){
        letterNow = 'G';
      }else if(j === 10){
        letterNow = 'F';
      }else if(j === 11){
        letterNow = 'E';
      }else if(j === 12){
        letterNow = 'D';
      }else if(j === 13){
        letterNow = 'C';
      }else if(j === 16){
        letterNow = 'B';
      }else if(j === 17){
        letterNow = 'A';
      }

      return letterNow;
    }

    let containerOrderSummaryAndDetailMovie = document.querySelector(".container-order-summary-and-detail-movie");

    const containerSeatsChosenAndTickets = document.createElement('div');
    containerSeatsChosenAndTickets.classList.add("container-seats-chosen-and-tickets");;

    const containerSeatsChosen = document.createElement('div');
    containerSeatsChosen.classList.add('container-seats-chosen-summary-order');

    const spanSeatsName = document.createElement('span');
    spanSeatsName.classList.add('span1-seats-name-summary-order');
    spanSeatsName.textContent = "Assentos";

    containerSeatsChosen.appendChild(spanSeatsName);
    containerOrderSummaryAndDetailMovie.appendChild(containerSeatsChosenAndTickets);

    let arrayAllSeats = [];
    let arrayAlreadySet = [];
    let stringSeats = "";
    let seatsItems = document.querySelector(".span-itens-values-seats");
    let containerSvgTickets = document.querySelector(".div-svg-tickets");

    const spanSeatsAll = document.createElement('span');
    spanSeatsAll.classList.add('span-seats-name-summary-order');

    if(arrayAllSeats.length === 0){
      containerSeatsChosenAndTickets.style.display = "none";
    }

    let containerLineWhite1 = document.querySelector(".line-white-1");
    let buttonBack = document.querySelector('.button-back'); 

    let containerAllTicketsSvg = document.querySelector(".container-all-tickets-svg-1");

    const functionDeleteSpanNumberAlreadyClick = (containerSpanNumber) => {
      if(arrayAllSeats.includes(containerSpanNumber.firstChild.textContent)){
        arrayAllSeats = arrayAllSeats.filter((el) => el !== containerSpanNumber.firstChild.textContent);

        let positionDelete2 = stringSeats.indexOf(containerSpanNumber.firstChild.textContent);
  
        let indexOfFirstCommaAfterPositionDelete2 = stringSeats.indexOf(',', positionDelete2 + 1);
  
        if(indexOfFirstCommaAfterPositionDelete2 !== -1){
          let firstPart = stringSeats.slice(0, positionDelete2);
          let secondPart = stringSeats.slice(indexOfFirstCommaAfterPositionDelete2 + 1);
  
          stringSeats = firstPart + secondPart;
        }else {
          stringSeats = stringSeats.slice(0, positionDelete2 - 1);
        }
        
        arrayAlreadySet = arrayAlreadySet.filter((el) => el !== containerSpanNumber.firstChild.textContent);
        containerAllTicketsSvg.firstChild.remove();
  
        arrayAllSeats.forEach((elSeats, index) => {
          if(!arrayAlreadySet.includes(elSeats)){
            arrayAlreadySet.push(elSeats);
            if(index > 0){
              stringSeats += ",";
            }
  
            stringSeats += elSeats;
          }
        });

        seatsItems.textContent = arrayAllSeats.length;

        if(arrayAllSeats.length === 0){
          containerSeatsChosenAndTickets.style.display = "none";
          containerSvgTickets.style.borderColor = "rgb(52, 60, 70)";
          containerSvgTickets.style.background =  "transparent";
          containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
          containerLineWhite1.style.background =  "rgb(52, 60, 70)";
          stringSeats = "";
  
         
          buttonBack.style.borderColor = "rgb(102, 102, 102)";
          buttonBack.style.color = "rgb(102, 102, 102)";
        }else {
          containerSeatsChosenAndTickets.style.display = "flex";
          containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
          containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
        }
  
        spanSeatsAll.textContent = stringSeats;

        containerSeatsChosen.appendChild(spanSeatsAll);
        containerSeatsChosenAndTickets.appendChild(containerSeatsChosen);

        if(containerSpanNumber.style.color === "black"){
          containerSpanNumber.style.color = "transparent";
          containerSpanNumber.style.background = "rgb(152 170 236)";
        }else {
          containerSpanNumber.style.transform = "scale(1.7)";
          containerSpanNumber.style.color = "black";
          containerSpanNumber.style.background = "rgb(255 214 51)";
          
          setTimeout(() => {
            containerSpanNumber.style.transform = "scale(1.0)";
          }, 100);
        }
      }
    }
    
    const functionClickContainerSpanNumber = (containerSpanNumber) => {
      if(arrayAllSeats.includes(containerSpanNumber.firstChild.textContent)){
        arrayAllSeats = arrayAllSeats.filter((el) => el !== containerSpanNumber.firstChild.textContent);

        let positionDelete2 = stringSeats.indexOf(containerSpanNumber.firstChild.textContent);

        let indexOfFirstCommaAfterPositionDelete2 = stringSeats.indexOf(',', positionDelete2 + 1);

        if(indexOfFirstCommaAfterPositionDelete2 !== -1){
          let firstPart = stringSeats.slice(0, positionDelete2);
          let secondPart = stringSeats.slice(indexOfFirstCommaAfterPositionDelete2 + 1);

          stringSeats = firstPart + secondPart;
        }else {
          stringSeats = stringSeats.slice(0, positionDelete2 - 1);
        }
        
        arrayAlreadySet = arrayAlreadySet.filter((el) => el !== containerSpanNumber.firstChild.textContent);
        containerAllTicketsSvg.firstChild.remove();
      }else {
        arrayAllSeats.push(containerSpanNumber.firstChild.textContent);
      }

      arrayAllSeats.forEach((elSeats, index) => {
        if(!arrayAlreadySet.includes(elSeats)){
          arrayAlreadySet.push(elSeats);
          if(index > 0){
            stringSeats += ",";
          }

          let containerTicketSvg = document.createElement('div');
          containerTicketSvg.classList.add('container-ticket-svg');

          let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          svgElement.setAttribute('viewBox', '0 0 21 21');
          svgElement.setAttribute('fill', 'inherit');
          svgElement.setAttribute('class', 'injected-svg');
          svgElement.setAttribute('data-src', '/static/images/icons/ticket.svg');

          let pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          pathElement.setAttribute('d', 'M7.24163 3.75258C7.0443 3.94992 7.0593 4.30525 7.21263 4.53958C7.70497 5.29158 7.60797 6.29425 6.96597 6.93658C6.32363 7.57892 5.3203 7.67592 4.56863 7.18358C4.33463 7.03025 3.9933 7.00092 3.7963 7.19792L2.79263 8.20158C2.17897 8.81558 2.23897 9.96325 2.8553 10.5796L11.5323 19.2566C12.1486 19.8729 13.3353 19.9719 13.9493 19.3582L14.914 18.3542C15.1176 18.1509 15.031 17.7332 14.863 17.4982C14.3246 16.7429 14.405 15.6999 15.067 15.0379C15.729 14.3756 16.772 14.2952 17.5273 14.8342C17.7623 15.0019 18.1753 15.0932 18.3786 14.8899L19.3526 13.9549C19.9663 13.3409 19.8676 12.1929 19.2513 11.5769L10.574 2.89958C10.241 2.56658 9.75263 2.38458 9.2773 2.38458C8.87297 2.38458 8.47797 2.51625 8.19563 2.79858L7.24163 3.75258ZM8.59597 4.59825L9.1903 4.00358C9.33797 3.85625 9.5263 3.89425 9.67497 4.04325L18.0813 12.4496C18.2303 12.5982 18.2946 12.8126 18.147 12.9602L17.553 13.5546C16.4283 13.0019 15.0106 13.1612 14.0996 14.0726C13.188 14.9836 13.0243 16.4059 13.5773 17.5302L12.9536 18.1532C12.8066 18.3009 12.5733 18.2552 12.4246 18.1062L4.03697 9.71892C3.88797 9.56958 3.84963 9.34425 3.9973 9.19692L4.66497 8.52892C5.0903 8.72058 5.54497 8.82025 5.99363 8.82025C6.71497 8.82025 7.4213 8.56292 7.96697 8.01758C8.85163 7.13292 9.09597 5.70725 8.59597 4.59825ZM6.7413 10.4422C6.60897 10.5699 6.6053 10.7809 6.73297 10.9136L11.369 15.7212C11.4966 15.8536 11.7076 15.8576 11.8403 15.7296C11.973 15.6019 11.9763 15.3909 11.849 15.2582L7.21263 10.4506C7.1473 10.3829 7.05997 10.3489 6.97263 10.3489C6.8893 10.3489 6.80597 10.3799 6.7413 10.4422Z');

          svgElement.appendChild(pathElement);

          containerTicketSvg.appendChild(svgElement);

          containerAllTicketsSvg.appendChild(containerTicketSvg);

          stringSeats += elSeats;
        }
      });

      seatsItems.textContent = arrayAllSeats.length;

      if(arrayAllSeats.length === 0){
        containerSeatsChosenAndTickets.style.display = "none";
        containerSvgTickets.style.borderColor = "rgb(52, 60, 70)";
        containerSvgTickets.style.background =  "transparent";
        containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
        containerLineWhite1.style.background =  "rgb(52, 60, 70)";
        stringSeats = "";

       
        buttonBack.style.borderColor = "rgb(102, 102, 102)";
        buttonBack.style.color = "rgb(102, 102, 102)";
      }else {
        containerSeatsChosenAndTickets.style.display = "flex";
        containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
        containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      }
      
      spanSeatsAll.textContent = stringSeats;

      containerSeatsChosen.appendChild(spanSeatsAll);
      containerSeatsChosenAndTickets.appendChild(containerSeatsChosen);

      if(containerSpanNumber.style.color === "black"){
        containerSpanNumber.style.color = "transparent";
        containerSpanNumber.style.background = "rgb(152 170 236)";
      }else {
        containerSpanNumber.style.transform = "scale(1.7)";
        containerSpanNumber.style.color = "black";
        containerSpanNumber.style.background = "rgb(255 214 51)";
        
        setTimeout(() => {
          containerSpanNumber.style.transform = "scale(1.0)";
        }, 100);
      }
    }

    for (let j = 1; j <= 17; j++) {
      const containerSpanNumberMain = document.createElement('div');
      containerSpanNumberMain.classList.add('container-span-number-chose-seats-and-more-main');

      for (let i = 1; i <= 26; i++) {
        const containerSpanNumber = document.createElement('div');
        containerSpanNumber.classList.add('container-span-number-chose-seats-and-more');

        functionDefineWetherSpanAppearsOrNot(containerSpanNumber, j, i);

        let letterNow = functionLetterNow(j);

        const spanNumber = document.createElement('span');
        spanNumber.textContent = `${letterNow}${String(i)}`;
        containerSpanNumber.appendChild(spanNumber);
        containerSpanNumber.style.color = "transparent";

        containerSpanNumber.addEventListener("click", () => {
          if(arrayAllSeats.length < 8){
            functionClickContainerSpanNumber(containerSpanNumber);
          }else if(arrayAllSeats.length === 8) {
            functionDeleteSpanNumberAlreadyClick(containerSpanNumber);
          }
        });

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
  }
});