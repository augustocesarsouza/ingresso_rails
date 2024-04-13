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
  }
});