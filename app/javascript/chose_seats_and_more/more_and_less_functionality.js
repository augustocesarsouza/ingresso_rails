//click in chose seats / tickets / bomboniere / payment

const containerSvgTickets = document.querySelector('.div-svg-tickets');
const spanItensValuesSeats = document.querySelector(".span-itens-values-seats");
const containerLineWhite1 = document.querySelector(".line-white-1");

const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats'); 
const buttonBack = document.querySelector('.button-back'); 
const containerChoseSeatNumber = document.querySelector('.container-chose-seat-number');
const containerChoseSeatNumberResumeOrderMain = document.querySelector('.container-chose-seat-number-resume-order-main');
const containerSeatsTypeTicketsBombonierePayment = document.querySelector(".container-seats-type-tickets-bomboniere-payment");

const spanTypesTickets = document.querySelector(".span-types-tickets");
const spanChoseOfSeats = document.querySelector('.span-chose-ofseats');

if(spanTypesTickets){
  spanTypesTickets.remove();
}

const containerTypesTickets = document.querySelector('.container-types-tickets');

if(containerTypesTickets){
  containerTypesTickets.remove();
}

let isReleasedForHoverMouseButtonBack = false;

if(containerSvgTickets){
  containerSvgTickets.addEventListener("click", () => {
    let allContainerMore = [];
   
    if(containerSvgTickets.style.borderColor === "rgb(152, 170, 236)" && Number(spanItensValuesSeats.textContent) > 0){
      containerLineWhite1.style.background =  "rgb(152, 170, 236)";
      containerSvgTickets.style.borderColor = "transparent";
      containerSvgTickets.style.background = "rgb(49, 85, 232)";
      containerSvgTickets.firstChild.nextSibling.style.fill = "#fff";

      containerSvgChoseOfSeats.style.background = "transparent";
      containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      containerSvgChoseOfSeats.style.borderColor = "rgb(152, 170, 236)";

      containerSeatsTypeTicketsBombonierePayment.appendChild(spanTypesTickets);
      spanChoseOfSeats.remove();
    }

    if(containerSvgTickets.style.background === "rgb(49, 85, 232)"){
      buttonBack.style.border = "2px solid rgb(152, 170, 236)";
      buttonBack.style.color = "rgb(152, 170, 236)";
      isReleasedForHoverMouseButtonBack = true;
    }else {
      isReleasedForHoverMouseButtonBack = false;
    }

    if(isReleasedForHoverMouseButtonBack){
      containerChoseSeatNumber.remove();

      containerChoseSeatNumberResumeOrderMain.insertBefore(containerTypesTickets, containerChoseSeatNumberResumeOrderMain.firstChild);
    }

    let varivelHelpForSumIfAlreadyTicketChose = 0;

    let allContainerLess = [];

    let containerMoreAll = document.querySelectorAll(".container-more-svg");
    let containerLessAll = document.querySelectorAll(".container-less-svg");

    const functionClickMoreInteiro = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");
      
      if(spanNumberTickets && varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent)){
        spanNumberTickets.textContent = Number(spanNumberTickets.textContent) + 1;

        varivelHelpForSumIfAlreadyTicketChose += 1;
      }

      allContainerLess.forEach((el) => {
        const containerMoreLessInner = el.parentElement;
        const spanNumberTicketsLess = containerMoreLessInner.querySelector(".count-number-tickets");

        if(spanNumberTicketsLess && Number(spanNumberTicketsLess.textContent) <= 0){
          el.style.background = "rgb(63 71 93)";
          el.style.cursor = "auto";
        }
      });

      
      if(spanNumberTickets && Number(spanNumberTickets.textContent) > 0){
        const containerLess = containerMoreLess.querySelector(".container-less-svg");
        containerLess.style.background = "rgb(152, 170, 236)";
        containerLess.style.cursor = "pointer";
      }

      if(spanItensValuesSeats && varivelHelpForSumIfAlreadyTicketChose >= Number(spanItensValuesSeats.textContent)){
        allContainerMore.forEach((el) => {
          el.style.background = "rgb(63 71 93)";
          el.style.cursor = "auto";
        });
      }
    }

    const functionClickLessInteiro = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

      if(spanNumberTickets && Number(spanNumberTickets.textContent) > 0){
        spanNumberTickets.textContent = Number(spanNumberTickets.textContent) - 1;

        varivelHelpForSumIfAlreadyTicketChose -= 1;
      }

      if(spanItensValuesSeats && varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent)){
        allContainerMore.forEach((el) => {
          el.style.background = "rgb(152, 170, 236)";
          el.style.cursor = "pointer";
        });
      }

      allContainerLess.forEach((el) => {
        const containerMoreLess = el.parentElement;
        const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

        if(spanNumberTickets && Number(spanNumberTickets.textContent) <= 0){
          el.style.background = "rgb(63 71 93)";
          el.style.cursor = "auto";
        }
      });
    }

    const functionMouseOverLess = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const containerLess = containerMoreLess.querySelector(".container-less-svg");
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

      if(spanNumberTickets && spanNumberTickets.textContent > 0){
        if(containerLess){
          containerLess.style.background = "rgb(117 131 182)";
        }
      }
    }

    const functionMouseOutLess = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const containerLess = containerMoreLess.querySelector(".container-less-svg");
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

      if(spanNumberTickets && spanNumberTickets.textContent > 0){
        if(containerLess){
          containerLess.style.background = "rgb(152, 170, 236)";
        }
      }
    }

    const functionMouseOverMore = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const containerMoreOver = containerMoreLess.querySelector(".container-more-svg");
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

      if(spanNumberTickets && varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent) && Number(spanNumberTickets.textContent) >= 0){
        if(containerMoreOver){
          containerMoreOver.style.background = "rgb(117 131 182)";
        }
      }
    }

    const functionMouseOutMore = (e) => {
      const containerMoreLess = e.srcElement.parentElement.parentElement;
      const containerMoreOver = containerMoreLess.querySelector(".container-more-svg");
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

      if(spanNumberTickets && varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent) && Number(spanNumberTickets.textContent) >= 0){
        if(containerMoreOver){
          containerMoreOver.style.background = "rgb(152, 170, 236)";
        }
      }
    }

    if(containerSvgTickets.style.background === "rgb(49, 85, 232)"){
      containerMoreAll.forEach((containerMore) => {
        allContainerMore.push(containerMore);

        containerMore.addEventListener("click", functionClickMoreInteiro);
        containerMore.addEventListener("mouseover", functionMouseOverMore);
        containerMore.addEventListener("mouseout", functionMouseOutMore);
      });

      containerLessAll.forEach((containerLess) => {
        allContainerLess.push(containerLess);
        
        containerLess.addEventListener("click", functionClickLessInteiro);
        containerLess.addEventListener("mouseover", functionMouseOverLess);
        containerLess.addEventListener("mouseout", functionMouseOutLess);
      });
    }

    containerSvgChoseOfSeats.addEventListener("click", () => {
      containerMoreAll.forEach((containerMore) => {
        const containerMoreLess = containerMore.parentElement;
        const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");
        spanNumberTickets.textContent = 0;
      });

      containerMoreAll.forEach((containerMoreEach) => {
        const containerMoreLess = containerMoreEach.parentElement;
        const containerMore = containerMoreLess.querySelector(".container-more-svg");

        containerMore.style.background = "rgb(152, 170, 236)";
        containerMore.style.cursor = "pointer";

        containerMoreEach.removeEventListener("click", functionClickMoreInteiro);
        containerMoreEach.removeEventListener("mouseover", functionMouseOverMore);
        containerMoreEach.removeEventListener("mouseout", functionMouseOutMore);
      });

      containerLessAll.forEach((containerLessEach) => {
        const containerMoreLess = containerLessEach.parentElement;
        const containerLess = containerMoreLess.querySelector(".container-less-svg");

        containerLess.style.background = "rgb(63 71 93)";
        containerLess.style.cursor = "auto";

        containerLess.removeEventListener("click", functionClickLessInteiro);
        containerLess.removeEventListener("mouseover", functionMouseOverLess);
        containerLess.removeEventListener("mouseout", functionMouseOutLess);
      });
      
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

      containerSeatsTypeTicketsBombonierePayment.appendChild(spanChoseOfSeats);
      spanTypesTickets.remove();

      if(containerTypesTickets){
        containerTypesTickets.remove();
      }
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
}