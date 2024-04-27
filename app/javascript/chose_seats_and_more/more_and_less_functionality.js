//click in chose seats / tickets / bomboniere / payment

const containerSvgTickets = document.querySelector('.div-svg-tickets');
let spanItensValuesSeats = document.querySelector(".span-itens-values-seats");
const containerLineWhite1 = document.querySelector(".line-white-1");
const containerLineWhite2 = document.querySelector(".line-white-2");
const containerLineWhite3 = document.querySelector(".line-white-3");

const buttonBack = document.querySelector('.button-back'); 
const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats'); 
const containerChoseSeatNumber = document.querySelector('.container-chose-seat-number');
const containerChoseSeatNumberResumeOrderMain = document.querySelector('.container-chose-seat-number-resume-order-main');
const containerSeatsTypeTicketsBombonierePayment = document.querySelector(".container-seats-type-tickets-bomboniere-payment");

const containerBackSkipMain = document.querySelector('.container-back-skip');
const containerButtonSkip = document.querySelector(".container-button-skip");

const spanTypesTickets = document.querySelector(".span-types-tickets");
const spanChoseOfSeats = document.querySelector('.span-chose-ofseats');
const spanBomboniere = document.querySelector('.span-bomboniere');

const containerOrderSummary = document.querySelector('.container-order-summary');
const containerSvgBomboniere = document.querySelector('.div-svg-bomboniere');
const containerSvgPayment = document.querySelector('.div-svg-payment');

let containerCreditCardMain = null;
let containerDebitCardMain = null;
let containerPixMain = null;
let containerGooglePayMain = null;

const containerCardCredit = document.querySelector('.container-credit-card');
const containerDebitCard = document.querySelector('.container-debit-card');
const containerPix = document.querySelector('.container-pix');
const containerGooglePay = document.querySelector('.container-google-pay');

let containerTicketsSvgAll = null;

let whatButtonClickedSeatsTickets = "seats";
let typePaymentAll = [];

let containerMoreAll = document.querySelectorAll(".container-more-svg");
let containerLessAll = document.querySelectorAll(".container-less-svg");

let containerSvgPayment2 = document.querySelector(".container-all-tickets-svg-2");

if(containerSvgPayment2){
  containerSvgPayment2.remove();
}

let spanTotalValueOrderSummary = document.querySelector(".span-total-value-order-sumarry");
let allContainerLess = [];
let allContainerMore = [];
let varivelHelpForSumIfAlreadyTicketChose = 0;

if(spanTypesTickets){
  spanTypesTickets.remove();
}

const containerTypesTickets = document.querySelector('.container-types-tickets');

if(containerTypesTickets){
  containerTypesTickets.remove();
}

if(spanBomboniere){
  spanBomboniere.remove();
}

const containerBomboniere = document.querySelector('.container-bomboniere');

if(containerBomboniere){
  containerBomboniere.remove();
}

const containerPayment = document.querySelector('.container-payment');

if(containerPayment){
  containerPayment.remove();
}

let isReleasedForHoverMouseButtonBack = false;
let containerAllTicketsOfTypeTicketsSelected = null;

const functionClickMoreInteiro = (e) => {
  if(containerSvgPayment2 === null){
    varivelHelpForSumIfAlreadyTicketChose = 0;
    let containerTicketSvgNewClick = document.createElement("div");
    containerTicketSvgNewClick.classList.add("container-all-tickets-svg-2");
    containerSvgPayment2 = containerTicketSvgNewClick
  }

  let containerMoreLess = e.srcElement.parentElement.parentElement;

  const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

  if(spanNumberTickets && varivelHelpForSumIfAlreadyTicketChose < Number(spanItensValuesSeats.textContent)){
    spanNumberTickets.textContent = Number(spanNumberTickets.textContent) + 1;

    varivelHelpForSumIfAlreadyTicketChose += 1;

    let containerPaymentMethod = containerMoreLess.querySelector(".container-paragraph-and-price");

    let containerSvgAndTypePaymentPrice = containerPaymentMethod.parentElement;
    let containerTicketSvg = containerSvgAndTypePaymentPrice.querySelector(".container-ticket");
    let ticketSvg = containerTicketSvg.firstChild.nextSibling;

    let clonedTicketSvg = ticketSvg.cloneNode(true);

    let containerTicketSvgNewClick = document.createElement("div");
    containerTicketSvgNewClick.classList.add("container-ticket-svg");
    containerTicketSvgNewClick.appendChild(clonedTicketSvg);

    containerSvgPayment2.appendChild(containerTicketSvgNewClick);

    if(containerBackSkipMain){
      containerBackSkipMain.insertBefore(containerSvgPayment2, containerButtonSkip);
    }

    if(containerPaymentMethod){
      let spanFirstPaymentType = containerPaymentMethod.querySelector(".span-type-payment");

      if(spanFirstPaymentType && typePaymentAll.some((el) => el.payment === spanFirstPaymentType.textContent)){
        for (let i = 0; i < typePaymentAll.length; i++) {
          const elementPayment = typePaymentAll[i];
          
          if(elementPayment.payment === spanFirstPaymentType.textContent){
            elementPayment.quantity = elementPayment.quantity + 1;
            typePaymentAll[i] = elementPayment;
            break;
          }
        }
      }else {
        if(spanFirstPaymentType){
          const typePayment = {
            payment: spanFirstPaymentType.textContent,
            quantity: 1,
          }

          typePaymentAll.push(typePayment);
        }
      }
    }
  }

  const containerTicketsPaymentPriceAllIfExists = document.querySelector(".container-tickets-payment-price-all");

  if(containerTicketsPaymentPriceAllIfExists){
    containerTicketsPaymentPriceAllIfExists.remove();
  }

  const spanTicketsName = document.createElement("span");
  spanTicketsName.classList.add("span-tickets-name");
  spanTicketsName.textContent = "Ingressos";

  const containerTicketsPaymentPriceAll = document.createElement("div");
  containerTicketsPaymentPriceAll.classList.add("container-tickets-payment-price-all");
  containerTicketsPaymentPriceAll.appendChild(spanTicketsName);

  typePaymentAll.forEach((elPayment) => {
    let valueTotal = 29.44;
    if(elPayment.payment === "Inteira"){
      valueTotal = elPayment.quantity * 52.44;
    }

    const spanTicketsPayment = document.createElement("span");
    spanTicketsPayment.classList.add("span-tickets-payment");
    spanTicketsPayment.textContent = `${elPayment.quantity}x ${elPayment.payment}`;

    const spanTicketsPrice = document.createElement("span");
    spanTicketsPrice.classList.add("span-tickets-price");
    spanTicketsPrice.textContent = `R$ ${valueTotal}`;

    const containerTicketsPaymentPrice = document.createElement("div");
    containerTicketsPaymentPrice.classList.add("container-tickets-payment-price");
    containerTicketsPaymentPrice.appendChild(spanTicketsPayment);
    containerTicketsPaymentPrice.appendChild(spanTicketsPrice);

    containerTicketsPaymentPriceAll.appendChild(containerTicketsPaymentPrice);

    const containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets"); 
    containerSeatsChosenAndTickets.appendChild(containerTicketsPaymentPriceAll);
  });

  const spanTicketsPriceAll = containerTicketsPaymentPriceAll.querySelectorAll(".span-tickets-price");
  let sumTotallPrice = 0;

  spanTicketsPriceAll.forEach((elSpanPrice) => {
    let spanPriceWithSpaces = elSpanPrice.textContent.slice(2);
    let spanPriceWithoutSpaces = spanPriceWithSpaces.replace(/\s/g, '');
    sumTotallPrice += Number(spanPriceWithoutSpaces);
  });

  spanTotalValueOrderSummary.textContent = `R$ ${sumTotallPrice}`;
  
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

  if(typePaymentAll.length > 0){
    containerSvgBomboniere.style.background = "transparent";
    containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgBomboniere.style.borderColor = "rgb(152, 170, 236)";

    containerSvgPayment.style.background = "transparent";
    containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgPayment.style.borderColor = "rgb(152, 170, 236)";
  }
}

const functionClickLessInteiro = (e) => {
  let containerMoreLess = e.srcElement.parentElement.parentElement;

  const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

  if(spanNumberTickets && Number(spanNumberTickets.textContent) > 0){
    spanNumberTickets.textContent = Number(spanNumberTickets.textContent) - 1;

    varivelHelpForSumIfAlreadyTicketChose -= 1;

    let containerPaymentMethod = containerMoreLess.querySelector(".container-paragraph-and-price");

    let containerSvgAndTypePaymentPrice = containerPaymentMethod.parentElement;
    let spanTypePayment = containerSvgAndTypePaymentPrice.querySelector(".span-type-payment");

    if(spanTypePayment.textContent === "Meia"){
      let svgTicketHalf = containerSvgPayment2.querySelector(".svg-ticket-half");
      svgTicketHalf.parentElement.remove();
    }else {
      let svgTicket = containerSvgPayment2.querySelector(".injected-svg");
      svgTicket.parentElement.remove();
    }

    if(containerPaymentMethod){
      let spanFirstPaymentType = containerPaymentMethod.querySelector(".span-type-payment");

      if(spanFirstPaymentType && typePaymentAll.some((el) => el.payment === spanFirstPaymentType.textContent)){
        for (let i = 0; i < typePaymentAll.length; i++) {
          const elementPayment = typePaymentAll[i];
          
          if(elementPayment.payment === spanFirstPaymentType.textContent){
            
            if(elementPayment.quantity > 0){
              elementPayment.quantity = elementPayment.quantity - 1;

              if(elementPayment.quantity === 0){
                // typePaymentAll[i] = undefined;
                typePaymentAll.splice(i, 1);  
              }else {
                typePaymentAll[i] = elementPayment;
              }
              break;
            }
          }
        }
      }
    }

    const containerTicketsPaymentPriceAllIfExists = document.querySelector(".container-tickets-payment-price-all");

    if(containerTicketsPaymentPriceAllIfExists){
      containerTicketsPaymentPriceAllIfExists.remove();
    }

    const spanTicketsName = document.createElement("span");
    spanTicketsName.classList.add("span-tickets-name");
    spanTicketsName.textContent = "Ingressos";

    const containerTicketsPaymentPriceAll = document.createElement("div");
    containerTicketsPaymentPriceAll.classList.add("container-tickets-payment-price-all");
    containerTicketsPaymentPriceAll.appendChild(spanTicketsName);

    typePaymentAll.forEach((elPayment) => {
      if(elPayment && elPayment.quantity > 0){
        let valueTotal = 29.44;
        if(elPayment.payment === "Inteira"){
          valueTotal = elPayment.quantity * 52.44;
        }

        const spanTicketsPayment = document.createElement("span");
        spanTicketsPayment.classList.add("span-tickets-payment");
        spanTicketsPayment.textContent = `${elPayment.quantity}x ${elPayment.payment}`;
        
        const spanTicketsPrice = document.createElement("span");
        spanTicketsPrice.classList.add("span-tickets-price");
        spanTicketsPrice.textContent = `R$ ${valueTotal}`;

        const containerTicketsPaymentPrice = document.createElement("div");
        containerTicketsPaymentPrice.classList.add("container-tickets-payment-price");
        containerTicketsPaymentPrice.appendChild(spanTicketsPayment);
        containerTicketsPaymentPrice.appendChild(spanTicketsPrice);

        containerTicketsPaymentPriceAll.appendChild(containerTicketsPaymentPrice);

        const containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets"); 
        containerSeatsChosenAndTickets.appendChild(containerTicketsPaymentPriceAll);
      }
    });
    
    const spanTicketsPriceAll = containerTicketsPaymentPriceAll.querySelectorAll(".span-tickets-price");

    if(spanTicketsPriceAll.length > 0){
      let sumTotallPrice = 0;

      spanTicketsPriceAll.forEach((elSpanPrice) => {
        let spanPriceWithSpaces = elSpanPrice.textContent.slice(2);
        let spanPriceWithoutSpaces = spanPriceWithSpaces.replace(/\s/g, '');
        sumTotallPrice += Number(spanPriceWithoutSpaces);
      });

      spanTotalValueOrderSummary.textContent = `R$ ${sumTotallPrice}`;
    }else {
      spanTotalValueOrderSummary.textContent = `R$ 0,00`;
    }
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

  if(typePaymentAll.length === 0){
    containerSvgBomboniere.style.borderColor = "rgb(52, 60, 70)";
    containerSvgBomboniere.style.background = "transparent";
    containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
  
    containerSvgPayment.style.borderColor = "rgb(52, 60, 70)";
    containerSvgPayment.style.background = "transparent";
    containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
  }
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

const functionDefineColorForMoreAndLess = () => {
  allContainerLess.forEach((elLess) => {
    let spanCountTickets = elLess.nextElementSibling;
    let containerMore = elLess.nextElementSibling.nextElementSibling;

    if(Number(spanCountTickets.textContent) > 0){
      elLess.style.background = "rgb(152, 170, 236)";
      elLess.style.cursor = "pointer";
    }else {
      containerMore.style.background = "rgb(152, 170, 236)";
      containerMore.style.cursor = "pointer";
    }

    if(varivelHelpForSumIfAlreadyTicketChose === Number(spanItensValuesSeats.textContent)){
      containerMore.style.background = "rgb(63 71 93)";
      containerMore.style.cursor = "auto";
    }
  });
}

const functionRemoveEventListernerContainerMoreAndLess = () => {
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
}

const functionAddEventListernerContainerMoreAndLess = () => {
  if(whatButtonClickedSeatsTickets === "tickets"){
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
}

let containerTicketsSvg1 = null;

if(containerSvgTickets){
  containerSvgTickets.addEventListener("click", () => {
    containerTicketsSvg1 = document.querySelector(".container-all-tickets-svg-1");
    const spanItensValuesSeatsAtt = document.querySelector(".span-itens-values-seats");

    if(containerTicketsSvg1){
      containerTicketsSvg1.remove();
    }

    if(spanBomboniere){
      spanBomboniere.remove();
    }

    if(containerPayment){
      containerPayment.remove();
    }

    if(whatButtonClickedSeatsTickets === "bomboniere"){
      if(containerBomboniere){
        containerBomboniere.remove();
      }
  
      containerChoseSeatNumberResumeOrderMain.insertBefore(containerTypesTickets, containerChoseSeatNumberResumeOrderMain.firstChild);
    }

    if(whatButtonClickedSeatsTickets === "payment" && varivelHelpForSumIfAlreadyTicketChose > 0){
      containerBomboniere.style.background = "transparent";
      containerBomboniere.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      containerBomboniere.style.borderColor = "rgb(152, 170, 236)";

      containerSvgPayment.style.background = "transparent";
      containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      containerSvgPayment.style.borderColor = "rgb(152, 170, 236)";

      containerLineWhite2.style.background =  "rgb(52, 60, 70)";
      containerLineWhite3.style.background =  "rgb(52, 60, 70)";

      if(spanBomboniere){
        spanBomboniere.remove();
      }
    }

    if(Number(spanItensValuesSeatsAtt.textContent) > 0){
      document.body.style.height = "100vh";
      containerOrderSummary.style.height = "570px";
      containerChoseSeatNumberResumeOrderMain.style.height = "100%";
      whatButtonClickedSeatsTickets = "tickets";
    }

    spanItensValuesSeats = spanItensValuesSeatsAtt;

    if(containerSvgPayment2 && containerBackSkipMain){
      containerBackSkipMain.insertBefore(containerSvgPayment2, containerButtonSkip);
    }else {
      let containerTicketSvgNewClick = document.createElement("div");
      containerTicketSvgNewClick.classList.add("container-all-tickets-svg-2");
      containerSvgPayment2 = containerTicketSvgNewClick;

      setTimeout(() => {
        containerMoreAll.forEach((el) => {
          const containerMoreLess = el.parentElement;
          const containerMore = containerMoreLess.querySelector(".container-more-svg");
        
          containerMore.style.background = "rgb(152, 170, 236)";
          containerMore.style.cursor = "pointer";
        });
      }, 20);
    }

    if(whatButtonClickedSeatsTickets === "tickets" && Number(spanItensValuesSeats.textContent) > 0){
      containerLineWhite1.style.background =  "rgb(152, 170, 236)";
      containerSvgTickets.style.borderColor = "transparent";
      containerSvgTickets.style.background = "rgb(49, 85, 232)";
      containerSvgTickets.firstChild.nextSibling.style.fill = "#fff";

      containerSvgChoseOfSeats.style.background = "transparent";
      containerSvgChoseOfSeats.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      containerSvgChoseOfSeats.style.borderColor = "rgb(152, 170, 236)";

      containerSeatsTypeTicketsBombonierePayment.appendChild(spanTypesTickets);
      spanChoseOfSeats.remove();

      buttonBack.style.border = "2px solid rgb(152, 170, 236)";
      buttonBack.style.color = "rgb(152, 170, 236)";

      containerLineWhite2.style.background =  "rgb(52, 60, 70)";

      if(varivelHelpForSumIfAlreadyTicketChose > 0){
        containerSvgBomboniere.style.background = "transparent";
        containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
        containerSvgBomboniere.style.borderColor = "rgb(152, 170, 236)";
      }

      functionDefineColorForMoreAndLess();
    }

    if(whatButtonClickedSeatsTickets === "tickets"){
      isReleasedForHoverMouseButtonBack = true;
    }else {
      isReleasedForHoverMouseButtonBack = false;
    }

    if(whatButtonClickedSeatsTickets === "tickets"){
      containerChoseSeatNumber.remove();

      containerChoseSeatNumberResumeOrderMain.insertBefore(containerTypesTickets, containerChoseSeatNumberResumeOrderMain.firstChild);
    }

    functionAddEventListernerContainerMoreAndLess();
  });
}

if(containerSvgChoseOfSeats){
  containerSvgChoseOfSeats.addEventListener("click", () => {
    containerSvgPayment2 = null;
    typePaymentAll = [];
    varivelHelpForSumIfAlreadyTicketChose = 0;
    spanTotalValueOrderSummary.textContent = `R$ 0,00`;

    if(whatButtonClickedSeatsTickets === "bomboniere"){
      containerLineWhite2.style.background =  "rgb(52, 60, 70)";
      containerSvgBomboniere.style.background = "transparent";
      containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
      containerSvgBomboniere.style.borderColor = "rgb(52, 60, 70)";

      if(containerBomboniere){
        containerBomboniere.remove();
      }

      if(spanBomboniere){
        spanBomboniere.remove();
      }
    }

    if(containerPayment){
      containerPayment.remove();
    }

    whatButtonClickedSeatsTickets = "seats";
    containerOrderSummary.style.height = "97%";
    document.body.style.height = "100%";
    containerChoseSeatNumberResumeOrderMain.style.height = "64rem";

    containerSvgBomboniere.style.borderColor = "rgb(52, 60, 70)";
    containerSvgBomboniere.style.background = "transparent";
    containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";

    containerSvgPayment.style.borderColor = "rgb(52, 60, 70)";
    containerSvgPayment.style.background = "transparent";
    containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";

    containerLineWhite2.style.background =  "rgb(52, 60, 70)";
    containerLineWhite3.style.background =  "rgb(52, 60, 70)";

    if(containerBomboniere){
      containerBomboniere.remove();
    }
    
    const containerTicketsSvgCurrent2 = document.querySelector(".container-all-tickets-svg-2");

    if(containerTicketsSvgCurrent2){
      containerTicketsSvgCurrent2.remove();
    }

    if(containerBackSkipMain && containerTicketsSvg1){
      containerBackSkipMain.insertBefore(containerTicketsSvg1, containerButtonSkip);  
    }

    containerMoreAll.forEach((containerMore) => {
      const containerMoreLess = containerMore.parentElement;
      const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");
      spanNumberTickets.textContent = 0;
    });

    functionRemoveEventListernerContainerMoreAndLess();
    
    if(whatButtonClickedSeatsTickets === "seats" && Number(spanItensValuesSeats.textContent) > 0){

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

    const containerTicketsPaymentPriceAll = document.querySelector(".container-tickets-payment-price-all");

    if(containerTicketsPaymentPriceAll){
      containerTicketsPaymentPriceAll.remove();
    }
  });
}

let containerBodyChoseSeatsAndMore = document.querySelector(".container-body-chose-seats-and-more");
let svgWarn = document.querySelector(".svg-warning");

if(containerSvgBomboniere){
  containerSvgBomboniere.addEventListener("click", () => {
    let sumQuantityPaymentSelected = 0;

    if(whatButtonClickedSeatsTickets === "payment" && varivelHelpForSumIfAlreadyTicketChose > 0){
      containerSvgPayment.style.background = "transparent";
      containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
      containerSvgPayment.style.borderColor = "rgb(152, 170, 236)";

      containerLineWhite3.style.background =  "rgb(52, 60, 70)";
    }

    if(containerPayment){
      containerPayment.remove();
    }
  
    typePaymentAll.forEach((elPayment) => {
      sumQuantityPaymentSelected += Number(elPayment.quantity);
    });
  
    if(sumQuantityPaymentSelected === 0) return;
  
    if(sumQuantityPaymentSelected < Number(spanItensValuesSeats.textContent)){
      const containerWarnNotAllSeatsWereSelected = document.createElement("div");
      containerWarnNotAllSeatsWereSelected.classList.add("container-warn-not-all-seats-were-selected");
  
      const containerWarn = document.createElement("div");
      containerWarn.classList.add("container-warn");
  
      const containerImgBackgroundDark = document.createElement("div");
      containerImgBackgroundDark.classList.add("container-img-background-dark");
  
      const containerCutImg = document.createElement("div");
      containerCutImg.classList.add("container-cut-img");
  
      const containerSvgWarn = document.createElement("div");
      containerSvgWarn.classList.add("container-svg-warn");
  
      containerSvgWarn.appendChild(svgWarn);
  
      let svgExitWarning = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgExitWarning.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgExitWarning.setAttribute("viewBox", "0 0 24 24");
      svgExitWarning.setAttribute("fill", "none");
      svgExitWarning.setAttribute("class", "svg-exit-warning");
  
      let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute("id", "Icon / Simple / Close");
  
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("fill-rule", "evenodd");
      path.setAttribute("clip-rule", "evenodd");
      path.setAttribute("d", "M6.93848 5.83769C6.2573 5.15677 5.15833 6.26932 5.83952 6.95024L11.133 12.2467L5.91671 17.4402C5.23553 18.1211 6.2573 19.216 6.93848 18.5351L12.2678 13.2078L17.4768 18.4147C18.1579 19.0957 19.2107 18.0297 18.5295 17.3487L13.5114 12.2767L18.5295 7.03493C19.2107 6.35401 18.1579 5.27714 17.4768 5.95806L12.2678 11.165L6.93848 5.83769Z");
      path.setAttribute("fill", "#98AAEC");
  
      group.appendChild(path);
      svgExitWarning.appendChild(group);
  
      const containerSvgExitWarning = document.createElement("div");
      containerSvgExitWarning.classList.add("container-svg-exit-warning");
  
      containerSvgExitWarning.appendChild(svgExitWarning);
  
      containerImgBackgroundDark.appendChild(containerCutImg);
      containerImgBackgroundDark.appendChild(containerSvgWarn);
      containerImgBackgroundDark.appendChild(containerSvgExitWarning);
  
      const containerSpanOpsAndWarnButtonContinue = document.createElement("div");
      containerSpanOpsAndWarnButtonContinue.classList.add("container-spans-and-warn-button-continue");
  
      const containerSpanOpsAndWarn = document.createElement("div");
      containerSpanOpsAndWarn.classList.add("container-span-ops-and-warn");
  
      const spanOps = document.createElement("span");
      spanOps.classList.add("span-ops");
      spanOps.textContent = "Ops!";
  
      const spanWarn = document.createElement("span");
      spanWarn.classList.add("span-warn");
      spanWarn.textContent = "Escolha os Tipos de Ingresso para todos os assentos selecionados no Mapa de Assentos. Caso queria remover assentos, volte ao passo anterior.";
  
      containerSpanOpsAndWarn.appendChild(spanOps);
      containerSpanOpsAndWarn.appendChild(spanWarn);
  
      const buttonContinue = document.createElement("button");
      buttonContinue.classList.add("button-continue");
      buttonContinue.textContent = "Continuar";
  
      containerSpanOpsAndWarnButtonContinue.appendChild(containerSpanOpsAndWarn);
      containerSpanOpsAndWarnButtonContinue.appendChild(buttonContinue);
  
      containerWarn.appendChild(containerImgBackgroundDark);
      containerWarn.appendChild(containerSpanOpsAndWarnButtonContinue);
  
      containerWarnNotAllSeatsWereSelected.appendChild(containerWarn);
      
      containerBodyChoseSeatsAndMore.appendChild(containerWarnNotAllSeatsWereSelected);
  
      functionDefineColorForMoreAndLess();
  
      containerSvgExitWarning.addEventListener("click", () => {
        functionDefineColorForMoreAndLess();
        functionAddEventListernerContainerMoreAndLess();
        containerWarnNotAllSeatsWereSelected.remove();
      });
  
      buttonContinue.addEventListener("click", () => {
        functionDefineColorForMoreAndLess();
        functionAddEventListernerContainerMoreAndLess();
        containerWarnNotAllSeatsWereSelected.remove();
      });
    }else {
      whatButtonClickedSeatsTickets = "bomboniere"

      if(containerTypesTickets){
        containerTypesTickets.remove();
      }

      if(containerSvgPayment2){
        containerSvgPayment2.remove();
      }

      if(spanTypesTickets){
        spanTypesTickets.remove();
      }
      
      containerSeatsTypeTicketsBombonierePayment.appendChild(spanBomboniere);
      containerChoseSeatNumberResumeOrderMain.insertBefore(containerBomboniere, containerChoseSeatNumberResumeOrderMain.firstChild);
      
      containerOrderSummary.style.height = "auto";
      containerOrderSummary.style.marginBottom = "0px";
      
      containerSvgBomboniere.style.borderColor = "transparent";
      containerSvgBomboniere.style.background = "rgb(49, 85, 232)";
      containerSvgBomboniere.firstChild.nextSibling.style.fill = "#fff";
  
      containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
      containerSvgTickets.style.background = "transparent";
      containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
  
      containerLineWhite2.style.background =  "rgb(152, 170, 236)";
      eventosMoreAndLessBomboniere();
    }
  
    functionRemoveEventListernerContainerMoreAndLess();
  });
}

let containerMoreSvgBomboniereAll = null;
let containerLessSvgBomboniereAll = null;
let controllerQuantityProductClickedBomboniere = 0;
let arrayProductBomboniere = [];
let containerLessMoreBomboniere = document.querySelectorAll(".container-less-more-chose-bomboniere");

const deleteItemProductArray = (arrayProductBomboniere, nameProductDelete) => {
  if(arrayProductBomboniere.some((el) => el.name === nameProductDelete)){
    for (let i = 0; i < arrayProductBomboniere.length; i++) {
      const element = arrayProductBomboniere[i];

      if(element.name === nameProductDelete){
        element.quantity =  element.quantity - 1;

        if(element.quantity === 0){
          arrayProductBomboniere.splice(i, 1);  
        }else {
          arrayProductBomboniere[i] = element;
        }
        break;
      }
    }
  }

  const containerProductBomboniereBefore = document.querySelector(".container-product-bomboniere");

  if(containerProductBomboniereBefore){
    containerProductBomboniereBefore.remove();
  }

  if(arrayProductBomboniere.length > 0){
    let containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets");

    const containerProductBomboniere = document.createElement('div');
    containerProductBomboniere.classList.add("container-product-bomboniere");
    const spanProduct = document.createElement('span');
    spanProduct.textContent = "Produtos";
    spanProduct.classList.add("span-product-name");

    containerProductBomboniere.appendChild(spanProduct);

    arrayProductBomboniere.forEach((elProduct) => {
      const valueFinal = String(elProduct.priceTotal * elProduct.quantity);
      let findIndexCommaTotal = valueFinal.indexOf(".");
      let firstPartPriceTotal = valueFinal.slice(0, findIndexCommaTotal);
      let secondPartPriceTotal = valueFinal.slice(findIndexCommaTotal + 1);

      const newStringPriceWithDot = firstPartPriceTotal + "," + secondPartPriceTotal;
      const valueRoundedIfStringForGreaterThan7 = newStringPriceWithDot.slice(0, 6);

      const stringProductNameQuantity = `${elProduct.quantity}x ${elProduct.name}`;
        const stringProductPriceTotal = `R$ ${valueRoundedIfStringForGreaterThan7}`;

        const containerToProductNameAndPriceTotal = document.createElement("div");
        containerToProductNameAndPriceTotal.classList.add("container-to-product-name-and-price-total");

        const spanProducNameQuantity = document.createElement('span');
        spanProducNameQuantity.textContent = stringProductNameQuantity;
        spanProducNameQuantity.classList.add("span-product-name-quantity");

        const spanProducPriceTotal = document.createElement('span');
        spanProducPriceTotal.textContent = stringProductPriceTotal;
        spanProducPriceTotal.classList.add("span-product-price-total");

        containerToProductNameAndPriceTotal.appendChild(spanProducNameQuantity);
        containerToProductNameAndPriceTotal.appendChild(spanProducPriceTotal);
        containerProductBomboniere.appendChild(containerToProductNameAndPriceTotal);
    });

    if(containerSeatsChosenAndTickets && containerProductBomboniere){
      containerSeatsChosenAndTickets.appendChild(containerProductBomboniere);
    }
  }
}

const clickMoreBomboniere = (e) => {
  containerLessMoreBomboniere = document.querySelectorAll(".container-less-more-chose-bomboniere");
  let containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets");

  if(controllerQuantityProductClickedBomboniere < 10){
    controllerQuantityProductClickedBomboniere++;

    const containerMoreLess = e.srcElement.parentElement.parentElement;
    let spanValueBomboniere = containerMoreLess.querySelector(".count-number-chose-bomboniere");
    spanValueBomboniere.textContent = Number(spanValueBomboniere.textContent) + 1;

    const containerItemInfoInner = e.srcElement.parentElement.parentElement.parentElement;
    const spanTitle2 = containerItemInfoInner.querySelector(".span-title-2");
    const spanPrice = containerItemInfoInner.querySelector(".span-price");
    const spanFee = containerItemInfoInner.querySelector(".span-fee");
    
    let spanPriceNumber = spanPrice.textContent.slice(3);
    let findIndexComma = spanPriceNumber.indexOf(",");
    let firstPartPrice = spanPriceNumber.slice(0, findIndexComma);
    let secondPartPrice = spanPriceNumber.slice(findIndexComma + 1);

    const newStringPriceWithDot = firstPartPrice + "." + secondPartPrice;

    let spanFeeSlice = spanFee.textContent.slice(10);
    let findIndexCommaFee = spanFeeSlice.indexOf(",");
    let firstPartFee = spanFeeSlice.slice(0, findIndexCommaFee);
    let secondPartFee = spanFeeSlice.slice(findIndexCommaFee + 1);

    const newStringFeeWithDot = firstPartFee + "." + secondPartFee;

    const totalPriceFee = Number(newStringPriceWithDot) + Number(newStringFeeWithDot);
    
    let titleProduct = spanTitle2.textContent;

    if(arrayProductBomboniere.some((el) => el.name === titleProduct)){
      for (let i = 0; i < arrayProductBomboniere.length; i++) {
        const element = arrayProductBomboniere[i];

        if(element.name === titleProduct){
          element.quantity =  element.quantity + 1;
          arrayProductBomboniere[i] = element;
          break;
        }
      }
    }else {
      const objProduct = {
        name: titleProduct,
        priceTotal: totalPriceFee,
        quantity: 1
      }

      arrayProductBomboniere.push(objProduct);
    }

    const containerProductBomboniereBefore = document.querySelector(".container-product-bomboniere");

    if(containerProductBomboniereBefore){
      containerProductBomboniereBefore.remove();
    }

    const containerProductBomboniere = document.createElement('div');
    containerProductBomboniere.classList.add("container-product-bomboniere");
    const spanProduct = document.createElement('span');
    spanProduct.textContent = "Produtos";
    spanProduct.classList.add("span-product-name");

    containerProductBomboniere.appendChild(spanProduct);
    
    if(arrayProductBomboniere.length > 0){
      arrayProductBomboniere.forEach((elProduct) => {
        const valueFinal = String(elProduct.priceTotal * elProduct.quantity);
        let findIndexCommaTotal = valueFinal.indexOf(".");
        let firstPartPriceTotal = valueFinal.slice(0, findIndexCommaTotal);
        let secondPartPriceTotal = valueFinal.slice(findIndexCommaTotal + 1);

        const newStringPriceWithDot = firstPartPriceTotal + "," + secondPartPriceTotal;
        const valueRoundedIfStringForGreaterThan7 = newStringPriceWithDot.slice(0, 6);

        const stringProductNameQuantity = `${elProduct.quantity}x ${elProduct.name}`;
        const stringProductPriceTotal = `R$ ${valueRoundedIfStringForGreaterThan7}`;

        const containerToProductNameAndPriceTotal = document.createElement("div");
        containerToProductNameAndPriceTotal.classList.add("container-to-product-name-and-price-total");

        const spanProducNameQuantity = document.createElement('span');
        spanProducNameQuantity.textContent = stringProductNameQuantity;
        spanProducNameQuantity.classList.add("span-product-name-quantity");

        const spanProducPriceTotal = document.createElement('span');
        spanProducPriceTotal.textContent = stringProductPriceTotal;
        spanProducPriceTotal.classList.add("span-product-price-total");

        containerToProductNameAndPriceTotal.appendChild(spanProducNameQuantity);
        containerToProductNameAndPriceTotal.appendChild(spanProducPriceTotal);
        containerProductBomboniere.appendChild(containerToProductNameAndPriceTotal);
      });
    }

    if(containerSeatsChosenAndTickets && containerProductBomboniere){
      containerSeatsChosenAndTickets.appendChild(containerProductBomboniere);
    }

    let containerLess = containerMoreLess.querySelector(".container-less-svg-chose-bomboniere");
    containerLess.style.background = "rgb(152, 170, 236)";
    containerLess.style.cursor = "pointer";
  }

  if(controllerQuantityProductClickedBomboniere === 10){
    containerMoreSvgBomboniereAll.forEach((elMore) => {
      elMore.style.background = "rgb(63 71 93)";
      elMore.style.cursor = "auto";
    });
  }
}

const clickLessBomboniere = (e) => {
  containerLessMoreBomboniere = document.querySelectorAll(".container-less-more-chose-bomboniere");

  const containerMoreLess = e.srcElement.parentElement.parentElement;
  let spanValueBomboniere = containerMoreLess.querySelector(".count-number-chose-bomboniere");
  let containerLess = containerMoreLess.querySelector(".container-less-svg-chose-bomboniere"); 

  if(controllerQuantityProductClickedBomboniere > 0){
    const containerItemInfoInner = e.srcElement.parentElement.parentElement.parentElement;
    const spanTitle2 = containerItemInfoInner.querySelector(".span-title-2");
    let titleProduct = spanTitle2.textContent;

    deleteItemProductArray(arrayProductBomboniere, titleProduct);

    if(Number(spanValueBomboniere.textContent) > 0){
      spanValueBomboniere.textContent = Number(spanValueBomboniere.textContent) - 1;
      containerLess.style.background = "rgb(152, 170, 236)";
      containerLess.style.cursor = "pointer";

      controllerQuantityProductClickedBomboniere--;
    }

    if(controllerQuantityProductClickedBomboniere < 10){
      containerMoreSvgBomboniereAll.forEach((elMore) => {
        elMore.style.background = "rgb(152, 170, 236)";
        elMore.style.cursor = "pointer";
      });
    }

    if(controllerQuantityProductClickedBomboniere === 0){
      containerLessSvgBomboniereAll.forEach((elLess) => {
        elLess.style.background = "rgb(63 71 93)";
        elLess.style.cursor = "auto";
      });
    }

    if(Number(spanValueBomboniere.textContent) === 0){
      containerLess.style.background = "rgb(63 71 93)";
      containerLess.style.cursor = "auto";
    }
  }
}

const mouseOverMoreBomboniere = (e) => {
  const containerMoreLess = e.srcElement.parentElement.parentElement;
  const containerMoreOver = containerMoreLess.querySelector(".container-more-svg-chose-bomboniere");

  if(controllerQuantityProductClickedBomboniere < 10){
    if(containerMoreOver){
      containerMoreOver.style.background = "rgb(117 131 182)";
    }
  }
}

const mouseOutMoreBomboniere = (e) => {
  const containerMoreLess = e.srcElement.parentElement.parentElement;
  const containerMoreOver = containerMoreLess.querySelector(".container-more-svg-chose-bomboniere");

  if(controllerQuantityProductClickedBomboniere < 10){
    if(containerMoreOver){
      containerMoreOver.style.background = "rgb(152, 170, 236)";
    }
  }
}

const mouseOverLessBomboniere = (e) => {
  const containerMoreLess = e.srcElement.parentElement.parentElement;
  const containerLess = containerMoreLess.querySelector(".container-less-svg-chose-bomboniere");
  let spanValueBomboniere = containerMoreLess.querySelector(".count-number-chose-bomboniere");

  if(Number(spanValueBomboniere.textContent) > 0){
    if(containerLess){
      containerLess.style.background = "rgb(117 131 182)";
    }
  }
}

const mouseOutLessBomboniere = (e) => {
  const containerMoreLess = e.srcElement.parentElement.parentElement;
  const containerLess = containerMoreLess.querySelector(".container-less-svg-chose-bomboniere");
  let spanValueBomboniere = containerMoreLess.querySelector(".count-number-chose-bomboniere");

  if(Number(spanValueBomboniere.textContent) > 0){
    if(containerLess){
      containerLess.style.background = "rgb(152, 170, 236)";
    }
  }
}

const addEventListenerContainerMoreBomboniere = (containerMoreSvgBomboniereAll) => {
  containerMoreSvgBomboniereAll.forEach((containerMoreBomboniereEach) => {
    containerMoreBomboniereEach.addEventListener("click", clickMoreBomboniere);
    containerMoreBomboniereEach.addEventListener("mouseover", mouseOverMoreBomboniere);
    containerMoreBomboniereEach.addEventListener("mouseout", mouseOutMoreBomboniere);
  });
}

const removeEventListenerContainerMoreBomboniere = (containerMoreSvgBomboniereAll) => {
  containerMoreSvgBomboniereAll.forEach((containerMoreBomboniereEach) => {
    containerMoreBomboniereEach.removeEventListener("click", clickMoreBomboniere);
    containerMoreBomboniereEach.removeEventListener("mouseover", mouseOverMoreBomboniere);
    containerMoreBomboniereEach.removeEventListener("mouseout", mouseOutMoreBomboniere);
  });
}

const addEventListenerContainerLessBomboniere = (containerLessSvgBomboniereAll) => {
  containerLessSvgBomboniereAll.forEach((containerLessBomboniereEach) => {
    containerLessBomboniereEach.addEventListener("click", clickLessBomboniere);
    containerLessBomboniereEach.addEventListener("mouseover", mouseOverLessBomboniere);
    containerLessBomboniereEach.addEventListener("mouseout", mouseOutLessBomboniere);
  });
}

const removeEventListenerContainerLessBomboniere = (containerLessSvgBomboniereAll) => {
  containerLessSvgBomboniereAll.forEach((containerLessBomboniereEach) => {
    containerLessBomboniereEach.removeEventListener("click", clickLessBomboniere);
    containerLessBomboniereEach.removeEventListener("mouseover", mouseOverLessBomboniere);
    containerLessBomboniereEach.removeEventListener("mouseout", mouseOutLessBomboniere);
  });
}

const eventosMoreAndLessBomboniere = () => {
  containerLessMoreBomboniere = document.querySelectorAll(".container-less-more-chose-bomboniere");
  containerMoreSvgBomboniereAll = document.querySelectorAll(".container-more-svg-chose-bomboniere");
  containerLessSvgBomboniereAll = document.querySelectorAll(".container-less-svg-chose-bomboniere");
  
  addEventListenerContainerMoreBomboniere(containerMoreSvgBomboniereAll);
  addEventListenerContainerLessBomboniere(containerLessSvgBomboniereAll);
}

const eventClickTickets = () => {
  if(containerMoreSvgBomboniereAll){
    removeEventListenerContainerMoreBomboniere(containerMoreSvgBomboniereAll);
  }

  if(containerLessSvgBomboniereAll){
    removeEventListenerContainerLessBomboniere(containerLessSvgBomboniereAll);
  }
}

const eventClickSeats = () => {
  controllerQuantityProductClickedBomboniere = 0

  containerLessMoreBomboniere.forEach((elMoreLess) => {
    let containerLessBomboniere = elMoreLess.querySelector(".container-less-svg-chose-bomboniere");
    let containerMoreBomboniere = elMoreLess.querySelector(".container-more-svg-chose-bomboniere");

    let spanNumberBomboniere = elMoreLess.querySelector(".count-number-chose-bomboniere");

    spanNumberBomboniere.textContent = 0;
  
    containerMoreBomboniere.style.background = "rgb(152, 170, 236)";
    containerMoreBomboniere.style.cursor = "pointer";
  
    containerLessBomboniere.style.background = "rgb(63 71 93)";
    containerLessBomboniere.style.cursor = "auto";
  });

  if(containerMoreSvgBomboniereAll){
    removeEventListenerContainerMoreBomboniere(containerMoreSvgBomboniereAll);
  }

  if(containerLessSvgBomboniereAll){
    removeEventListenerContainerLessBomboniere(containerLessSvgBomboniereAll);
  }
}

const clickPayment = () => {
  if(whatButtonClickedSeatsTickets === "tickets" && varivelHelpForSumIfAlreadyTicketChose > 0){
    containerSvgTickets.style.background = "transparent";
    containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
    
    containerSvgBomboniere.style.background = "transparent";
    containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgBomboniere.style.borderColor = "rgb(152, 170, 236)";

    containerLineWhite2.style.background =  "rgb(152, 170, 236)";
    containerLineWhite3.style.background =  "rgb(152, 170, 236)";
    
    containerSvgPayment.style.borderColor = "transparent";
    containerSvgPayment.style.background = "rgb(49, 85, 232)";
    containerSvgPayment.firstChild.nextSibling.style.fill = "#fff";
  }

  if(whatButtonClickedSeatsTickets === "bomboniere"){
    containerSvgBomboniere.style.background = "transparent";
    containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgBomboniere.style.borderColor = "rgb(152, 170, 236)";
    
    containerSvgPayment.style.borderColor = "transparent";
    containerSvgPayment.style.background = "rgb(49, 85, 232)";
    containerSvgPayment.firstChild.nextSibling.style.fill = "#fff";

    containerLineWhite3.style.background =  "rgb(152, 170, 236)";
  }

  whatButtonClickedSeatsTickets = "payment";

  if(whatButtonClickedSeatsTickets === "payment" && varivelHelpForSumIfAlreadyTicketChose > 0){
    if(containerTypesTickets){
      containerTypesTickets.remove();
    }

    if(containerBomboniere){
      containerBomboniere.remove();
    }

    containerChoseSeatNumberResumeOrderMain.insertBefore(containerPayment, containerChoseSeatNumberResumeOrderMain.firstChild);

    containerCreditCardMain = document.querySelector(".container-credit-card-main");
    containerDebitCardMain = document.querySelector(".container-debit-card-main");
    containerPixMain = document.querySelector(".container-pix-main");
    containerGooglePayMain = document.querySelector(".container-google-pay-main");
  }
}

let clickedContainerMethodPayment = "";
let containerInputsInfoCardMain = document.createElement("div");
containerInputsInfoCardMain.classList.add("container-inputs-info-card-main");

let containerNumberCardMain = document.createElement("div");
containerNumberCardMain.classList.add("container-number-card-main");

let spanNameCard = document.createElement("span");
spanNameCard.classList.add("name-card");
spanNameCard.textContent = "Número do cartão";

let inputNumberCard = document.createElement("input");
inputNumberCard.classList.add("input-number-card");
inputNumberCard.placeholder = "1234 5678 9012 3456";

const clickCardCredit = () => {
  clickedContainerMethodPayment = "cardCredit";

  containerCreditCardMain.style.border = "1px solid rgb(152, 170, 236)";
  containerDebitCardMain.style.border = "none";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "none";

  containerCreditCardMain.style.height = "20rem";

  containerNumberCardMain.appendChild(spanNameCard);
  containerNumberCardMain.appendChild(inputNumberCard);
  containerInputsInfoCardMain.appendChild(containerNumberCardMain);
  console.log(containerInputsInfoCardMain);

  containerCreditCardMain.appendChild(containerInputsInfoCardMain);
}

const clickDebitCard = () => {
  clickedContainerMethodPayment = "debitCard";
  
  containerCreditCardMain.style.border = "none";
  containerDebitCardMain.style.border = "1px solid rgb(152, 170, 236)";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "none";

  containerCreditCardMain.style.height = "auto";
  
  containerInputsInfoCardMain.remove();
}

const clickPix = () => {
  clickedContainerMethodPayment = "pix";
  
  containerCreditCardMain.style.border = "none";
  containerDebitCardMain.style.border = "none";
  containerPixMain.style.border = "1px solid rgb(152, 170, 236)";
  containerGooglePayMain.style.border = "none";
}

const clickGooglePay = () => {
  clickedContainerMethodPayment = "googlePay";
  
  containerCreditCardMain.style.border = "none";
  containerDebitCardMain.style.border = "none";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "1px solid rgb(152, 170, 236)";
}

if(window.location.pathname === "/chose_seats_and_more"){
  if(containerSvgTickets){
    containerSvgTickets.addEventListener("click", eventClickTickets);
  }
  
  if(containerSvgChoseOfSeats){
    containerSvgChoseOfSeats.addEventListener("click", eventClickSeats);
  }

  if(containerSvgPayment){
    containerSvgPayment.addEventListener("click", clickPayment);
  }

  if(containerCardCredit){
    containerCardCredit.addEventListener("click", clickCardCredit);
  }

  if(containerDebitCard){
    containerDebitCard.addEventListener("click", clickDebitCard);
  }

  if(containerPix){
    containerPix.addEventListener("click", clickPix);
  }

  if(containerGooglePay){
    containerGooglePay.addEventListener("click", clickGooglePay);
  }
};

if(window.location.pathname !== "/chose_seats_and_more"){
  if(containerSvgTickets){
    containerSvgTickets.removeEventListener("click", eventClickTickets);
  }
  
  if(containerSvgChoseOfSeats){
    containerSvgChoseOfSeats.removeEventListener("click", eventClickSeats);
  }

  if(containerSvgPayment){
    containerSvgPayment.removeEventListener("click", clickPayment);
  }

  if(containerCardCredit){
    containerCardCredit.removeEventListener("click", clickCardCredit);
  }

  if(containerDebitCard){
    containerDebitCard.removeEventListener("click", clickDebitCard);
  }

  if(containerPix){
    containerPix.removeEventListener("click", clickPix);
  }

  if(containerGooglePay){
    containerGooglePay.removeEventListener("click", clickGooglePay);
  }
};

if(buttonBack){
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
    }
  });
}