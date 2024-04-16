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
    const containerSeatsChosen = document.createElement('div');
    containerSeatsChosen.classList.add('container-seats-chosen-summary-order');

    const spanSeatsName = document.createElement('span');
    spanSeatsName.textContent = "Assentos";

    containerSeatsChosen.appendChild(spanSeatsName);
    containerOrderSummaryAndDetailMovie.appendChild(containerSeatsChosen);

    let arrayAllSeats = [];
    let arrayAlreadySet = [];
    let stringSeats = "";
    let seatsItems = document.querySelector(".span-itens-values-seats");
    let containerSvgTickets = document.querySelector(".div-svg-tickets");
    const spanSeatsAll = document.createElement('span');

    if(arrayAllSeats.length === 0){
      containerSeatsChosen.style.display = "none";
    }

    let containerLineWhite1 = document.querySelector(".line-white-1");
    let buttonBack = document.querySelector('.button-back'); 
    
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
      }else {
        arrayAllSeats.push(containerSpanNumber.firstChild.textContent);
      }

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
        containerSeatsChosen.style.display = "none";
        containerSvgTickets.style.borderColor = "rgb(52, 60, 70)";
        containerSvgTickets.style.background =  "transparent";
        containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
        containerLineWhite1.style.background =  "rgb(52, 60, 70)";
        stringSeats = "";

       
        buttonBack.style.borderColor = "rgb(102, 102, 102)";
        buttonBack.style.color = "rgb(102, 102, 102)";
      }else {
        containerSeatsChosen.style.display = "flex";
        containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
        containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      }
      
      spanSeatsAll.textContent = stringSeats;

      containerSeatsChosen.appendChild(spanSeatsAll);

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
          functionClickContainerSpanNumber(containerSpanNumber);
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