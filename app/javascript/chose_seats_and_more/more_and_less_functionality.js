//click in chose seats / tickets / bomboniere / payment

    const containerSvgTickets = document.querySelector('.div-svg-tickets');
    const spanItensValuesSeats = document.querySelector(".span-itens-values-seats");
    const containerLineWhite1 = document.querySelector(".line-white-1");

    const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats'); 
    const buttonBack = document.querySelector('.button-back'); 
    const containerChoseSeatNumber = document.querySelector('.container-chose-seat-number');
    const containerChoseSeatNumberResumeOrderMain = document.querySelector('.container-chose-seat-number-resume-order-main');

    const containerTypesTickets = document.querySelector('.container-types-tickets');
    containerTypesTickets.remove();

    let isReleasedForHoverMouseButtonBack = false;

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

      if(containerSvgTickets.style.background === "rgb(49, 85, 232)"){
        buttonBack.style.border = "2px solid rgb(152, 170, 236)";
        buttonBack.style.color = "rgb(152, 170, 236)";
        isReleasedForHoverMouseButtonBack = true;
      }else {
        isReleasedForHoverMouseButtonBack = false;
      }

      if(isReleasedForHoverMouseButtonBack){
        // containerChoseSeatNumber.style.display = "none";
        containerChoseSeatNumber.remove();

        containerChoseSeatNumberResumeOrderMain.insertBefore(containerTypesTickets, containerChoseSeatNumberResumeOrderMain.firstChild);
      }

      let varivelHelpForSumIfAlreadyTicketChose = 0;
      let allContainerMoreLess = [];
      let isTrueAllMoreDesable = false;

      let containerMoreInteira = document.querySelector(".container-more-inteira");
      let containerLessInteira = document.querySelector(".container-less-inteira");
      let spanCountNumberInteira = document.querySelector(".count-number-tickets-inteira");

      allContainerMoreLess.push(containerMoreInteira);


      const functionClickMoreInteiro = () => {
        if(isTrueAllMoreDesable) return;
        if(Number(spanCountNumberInteira.textContent) < Number(spanItensValuesSeats.textContent)){
          spanCountNumberInteira.textContent = Number(spanCountNumberInteira.textContent) + 1;

          varivelHelpForSumIfAlreadyTicketChose += 1;

          if(varivelHelpForSumIfAlreadyTicketChose === Number(spanItensValuesSeats.textContent)){
            isTrueAllMoreDesable = true;
            allContainerMoreLess.forEach((el) => {
              el.style.background = "rgb(63 71 93)";
              el.style.cursor = "auto";
            });
          }
        }

        if(spanCountNumberInteira.textContent === spanItensValuesSeats.textContent){
          containerMoreInteira.style.background = "rgb(63 71 93)";
          containerMoreInteira.style.cursor = "auto";
        }

        if(spanCountNumberInteira.textContent > 0){
          containerLessInteira.style.background = "rgb(152, 170, 236)";
          containerLessInteira.style.cursor = "pointer";
        }
      }

      const functionClickLessInteiro = () => {
        if(spanCountNumberInteira.textContent > 0){
          spanCountNumberInteira.textContent = Number(spanCountNumberInteira.textContent) - 1;
          varivelHelpForSumIfAlreadyTicketChose -= 1;

          if(varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent)){
            isTrueAllMoreDesable = false;

            allContainerMoreLess.forEach((el) => {
              el.style.background = "rgb(152, 170, 236)";
              el.style.cursor = "pointer";
            });
          }
        }
        
        if(Number(spanCountNumberInteira.textContent) === 0){
          containerLessInteira.style.background = "rgb(63, 71, 93)";
          containerLessInteira.style.cursor = "auto";
        }

        if(Number(spanCountNumberInteira.textContent) < Number(spanItensValuesSeats.textContent)){
          containerMoreInteira.style.background = "rgb(152, 170, 236)";
          containerMoreInteira.style.cursor = "pointer";
        }
      }

      const functionMouseOverLess = () => {
        if(spanCountNumberInteira.textContent > 0){
          containerLessInteira.style.background = "rgb(117 131 182)";
        }
      }

      const functionMouseOutLess = () => {
        if(spanCountNumberInteira.textContent > 0){
          containerLessInteira.style.background = "rgb(152, 170, 236)";
        }
      }

      const functionMouseOverMore = () => {
        if(Number(spanCountNumberInteira.textContent) !== Number(spanItensValuesSeats.textContent) && isTrueAllMoreDesable !== true){
          containerMoreInteira.style.background = "rgb(117 131 182)";
        }
      }

      const functionMouseOutMore = () => {
        if(Number(spanCountNumberInteira.textContent) !== Number(spanItensValuesSeats.textContent) && isTrueAllMoreDesable !== true){
          containerMoreInteira.style.background = "rgb(152, 170, 236)";
        }
      }

      if(containerSvgTickets.style.background === "rgb(49, 85, 232)"){
        containerMoreInteira.addEventListener("click", functionClickMoreInteiro);
        containerLessInteira.addEventListener("click", functionClickLessInteiro);

        containerLessInteira.addEventListener("mouseover", functionMouseOverLess);
        containerLessInteira.addEventListener("mouseout", functionMouseOutLess);

        containerMoreInteira.addEventListener("mouseover", functionMouseOverMore);
        containerMoreInteira.addEventListener("mouseout", functionMouseOutMore);
      }

      containerSvgChoseOfSeats.addEventListener("click", () => {
        containerMoreInteira.removeEventListener("click", functionClickMoreInteiro);
        containerLessInteira.removeEventListener("click", functionClickLessInteiro);

        containerLessInteira.removeEventListener("mouseover", functionMouseOverLess);
        containerLessInteira.removeEventListener("mouseout", functionMouseOutLess);

        containerMoreInteira.removeEventListener("mouseover", functionMouseOverMore);
        containerMoreInteira.removeEventListener("mouseout", functionMouseOutMore);

        spanCountNumberInteira.textContent = 0;

        containerMoreInteira.style.background = "rgb(152, 170, 236)";
        containerMoreInteira.style.cursor = "pointer";

        containerLessInteira.style.background = "rgb(63, 71, 93)";
        containerLessInteira.style.cursor = "auto";
        
        if(containerSvgTickets.style.background === "rgb(49, 85, 232)" && Number(spanItensValuesSeats.textContent) > 0){
          containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
          containerSvgTickets.style.background = "transparent";
          containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
  
          containerSvgChoseOfSeats.style.borderColor = "transparent";
          containerSvgChoseOfSeats.style.background = "rgb(49, 85, 232)";
          containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "#fff";
          containerLineWhite1.style.background =  "rgb(52, 60, 70)";
        }
  
        containerChoseSeatNumberResumeOrderMain.insertBefore(containerChoseSeatNumber, containerChoseSeatNumberResumeOrderMain.firstChild);
        containerTypesTickets.remove();
      });

      let containerMoreMeiaElo = document.querySelector(".container-more-meia-elo");
      let containerLessMeiaElo = document.querySelector(".container-less-meia-elo");
      let spanCountNumberMeiaElo = document.querySelector(".count-number-tickets-meia-elo");
      allContainerMoreLess.push(containerMoreMeiaElo);

      const functionClickMoreMeiaElo = () => {
        if(isTrueAllMoreDesable) return;

        if(Number(spanCountNumberMeiaElo.textContent) < Number(spanItensValuesSeats.textContent)){
          spanCountNumberMeiaElo.textContent = Number(spanCountNumberMeiaElo.textContent) + 1;
          varivelHelpForSumIfAlreadyTicketChose += 1;

          if(varivelHelpForSumIfAlreadyTicketChose === Number(spanItensValuesSeats.textContent)){
            isTrueAllMoreDesable = true;
            allContainerMoreLess.forEach((el) => {
              el.style.background = "rgb(63 71 93)";
              el.style.cursor = "auto";
            })
          }
        }

        if(spanCountNumberMeiaElo.textContent === spanItensValuesSeats.textContent){
          containerMoreMeiaElo.style.background = "rgb(63 71 93)";
          containerMoreMeiaElo.style.cursor = "auto";
        }

        if(spanCountNumberMeiaElo.textContent > 0){
          containerLessMeiaElo.style.background = "rgb(152, 170, 236)";
          containerLessMeiaElo.style.cursor = "pointer";
        }
      }

      const functionClickLessMeiaElo = () => {
        if(spanCountNumberMeiaElo.textContent > 0){
          spanCountNumberMeiaElo.textContent = Number(spanCountNumberMeiaElo.textContent) - 1;
          varivelHelpForSumIfAlreadyTicketChose -= 1;

          if(varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent)){
            isTrueAllMoreDesable = false;

            allContainerMoreLess.forEach((el) => {
              el.style.background = "rgb(152, 170, 236)";
              el.style.cursor = "pointer";
            });
          }
        }
        
        if(Number(spanCountNumberMeiaElo.textContent) === 0){
          containerLessMeiaElo.style.background = "rgb(63, 71, 93)";
          containerLessMeiaElo.style.cursor = "auto";
        }

        if(Number(spanCountNumberMeiaElo.textContent) < Number(spanItensValuesSeats.textContent)){
          containerMoreMeiaElo.style.background = "rgb(152, 170, 236)";
          containerMoreMeiaElo.style.cursor = "pointer";
        }
      }

      const functionMouseOverLessMeiaElo = () => {
        if(spanCountNumberMeiaElo.textContent > 0){
          containerLessMeiaElo.style.background = "rgb(117 131 182)";
        }
      }

      const functionMouseOutLessMeiaElo = () => {
        if(spanCountNumberMeiaElo.textContent > 0){
          containerLessMeiaElo.style.background = "rgb(152, 170, 236)";
        }
      }

      const functionMouseOverMoreMeiaElo = () => {
        if(Number(spanCountNumberMeiaElo.textContent) !== Number(spanItensValuesSeats.textContent) && isTrueAllMoreDesable !== true){
          containerMoreMeiaElo.style.background = "rgb(117 131 182)";
        }
      }

      const functionMouseOutMoreMeiaElo = () => {
        if(Number(spanCountNumberMeiaElo.textContent) !== Number(spanItensValuesSeats.textContent) && isTrueAllMoreDesable !== true){
          containerMoreMeiaElo.style.background = "rgb(152, 170, 236)";
        }
      }

      if(containerSvgTickets.style.background === "rgb(49, 85, 232)"){
        containerMoreMeiaElo.addEventListener("click", functionClickMoreMeiaElo);
        containerLessMeiaElo.addEventListener("click", functionClickLessMeiaElo);

        containerLessMeiaElo.addEventListener("mouseover", functionMouseOverLessMeiaElo);
        containerLessMeiaElo.addEventListener("mouseout", functionMouseOutLessMeiaElo);

        containerMoreMeiaElo.addEventListener("mouseover", functionMouseOverMoreMeiaElo);
        containerMoreMeiaElo.addEventListener("mouseout", functionMouseOutMoreMeiaElo);
      }

      containerSvgChoseOfSeats.addEventListener("click", () => {
        containerMoreMeiaElo.removeEventListener("click", functionClickMoreMeiaElo);
        containerLessMeiaElo.removeEventListener("click", functionClickLessMeiaElo);

        containerLessMeiaElo.removeEventListener("mouseover", functionMouseOverLessMeiaElo);
        containerLessMeiaElo.removeEventListener("mouseout", functionMouseOutLessMeiaElo);

        containerMoreMeiaElo.removeEventListener("mouseover", functionMouseOverMoreMeiaElo);
        containerMoreMeiaElo.removeEventListener("mouseout", functionMouseOutMoreMeiaElo);

        spanCountNumberMeiaElo.textContent = 0;

        containerMoreMeiaElo.style.background = "rgb(152, 170, 236)";
        containerMoreMeiaElo.style.cursor = "pointer";

        containerLessMeiaElo.style.background = "rgb(63, 71, 93)";
        containerLessMeiaElo.style.cursor = "auto";
        
        // if(containerSvgTickets.style.background === "rgb(49, 85, 232)" && Number(spanItensValuesSeats.textContent) > 0){
        //   containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
        //   containerSvgTickets.style.background = "transparent";
        //   containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
  
        //   containerSvgChoseOfSeats.style.borderColor = "transparent";
        //   containerSvgChoseOfSeats.style.background = "rgb(49, 85, 232)";
        //   containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "#fff";
        //   containerLineWhite1.style.background =  "rgb(52, 60, 70)";
        // }
  
        // containerChoseSeatNumberResumeOrderMain.insertBefore(containerChoseSeatNumber, containerChoseSeatNumberResumeOrderMain.firstChild);
        // containerTypesTickets.remove();
      });
    });
    
    buttonBack.addEventListener("mouseover", () => {
      if(buttonBack.style.color === "rgb(102, 102, 102)"){
        isReleasedForHoverMouseButtonBack = false;
      }

      if(isReleasedForHoverMouseButtonBack){
        buttonBack.style.borderColor = "rgb(164, 179, 235)";
        buttonBack.style.color = "rgb(164, 179, 235)";
      }
    });

    buttonBack.addEventListener("mouseout", () => {
      if(isReleasedForHoverMouseButtonBack){
        buttonBack.style.borderColor = "rgb(152, 170, 236)";
        buttonBack.style.color = "rgb(152, 170, 236)";
      }
    });

    buttonBack.addEventListener("click", () => {
      if(isReleasedForHoverMouseButtonBack){
        // console.log("click");
      }
    });