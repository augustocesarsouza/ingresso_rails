//click in chose seats / tickets / bomboniere / payment
import Inputmask from "inputmask";
import { cpf, cnpj } from 'cpf-cnpj-validator'; 

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
const spanPayment = document.querySelector('.span-payment');

const containerOrderSummary = document.querySelector('.container-order-summary');
const containerSvgBomboniere = document.querySelector('.div-svg-bomboniere');
const containerSvgPayment = document.querySelector('.div-svg-payment');

const containerCardCredit = document.querySelector('.container-credit-card');
const containerDebitCard = document.querySelector('.container-debit-card');
const containerPix = document.querySelector('.container-pix');
const containerGooglePay = document.querySelector('.container-google-pay');
const containerClubeUol = document.querySelector('.container-img-clube-uol-button-arrow-down-arrow-up');
const containerTicketGiftCard = document.querySelector('.container-tickets-arrow');

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

if(spanPayment){
  spanPayment.remove();
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

const functionClickTickets = () => {
  containerTicketsSvg1 = document.querySelector(".container-all-tickets-svg-1");
  const spanItensValuesSeatsAtt = document.querySelector(".span-itens-values-seats");

  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  if(containerWhatTypePaymentClickAlreadyExist){
    containerWhatTypePaymentClickAlreadyExist.remove();
  }

  if(containerTicketsSvg1){
    containerTicketsSvg1.remove();
  }

  if(spanBomboniere){
    spanBomboniere.remove();
  }

  if(containerPayment){
    containerPayment.remove();
  }

  if(spanPayment){
    spanPayment.remove();
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
}

if(containerSvgTickets){
  containerSvgTickets.addEventListener("click", () => {
    functionClickTickets();
  });
}

const functionClickChoseOfSeats = () => {
  containerSvgPayment2 = null;
  typePaymentAll = [];
  varivelHelpForSumIfAlreadyTicketChose = 0;
  spanTotalValueOrderSummary.textContent = `R$ 0,00`;

  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  if(containerWhatTypePaymentClickAlreadyExist){
    containerWhatTypePaymentClickAlreadyExist.remove();
  }

  if(spanPayment){
    spanPayment.remove();
  }

  const containerProductBomboniereBefore = document.querySelector(".container-product-bomboniere");

  if(containerProductBomboniereBefore){
    containerProductBomboniereBefore.remove();
  }

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
}

if(containerSvgChoseOfSeats){
  containerSvgChoseOfSeats.addEventListener("click", () => {
    functionClickChoseOfSeats();
  });
}

let containerBodyChoseSeatsAndMore = document.querySelector(".container-body-chose-seats-and-more");
let svgWarn = document.querySelector(".svg-warning");

const functionClickBomboniere = () => {
  let sumQuantityPaymentSelected = 0;

  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  if(containerWhatTypePaymentClickAlreadyExist){
    containerWhatTypePaymentClickAlreadyExist.remove();
  }

  if(whatButtonClickedSeatsTickets === "payment" && varivelHelpForSumIfAlreadyTicketChose > 0){
    containerSvgPayment.style.background = "transparent";
    containerSvgPayment.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";
    containerSvgPayment.style.borderColor = "rgb(152, 170, 236)";

    containerLineWhite3.style.background =  "rgb(52, 60, 70)";
  }

  if(containerPayment){
    containerPayment.remove();
  }

  if(spanPayment){
    spanPayment.remove();
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
}

if(containerSvgBomboniere){
  containerSvgBomboniere.addEventListener("click", () => {
    functionClickBomboniere();
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

let containerCreditCardMain = null;
let containerDebitCardMain = null;
let containerPixMain = null;
let containerGooglePayMain = null;
let containerClubeUolPayment = null;
let containerTicketGiftCardForInsert = null;
let containerLestChildSpanSubscriber = null;
let element_cpf_cnpj = null;

let containerNumberCardExpirationDateSecurityCodeNameCard;
let containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard;
let containerInfoPixBottom;
let alreadyClickCardCredit = 0;
let clickedContainerMethodPayment = "";

const containerTypeOfCardForPayment = document.querySelector(".container-type-of-card-for-payment");

if(containerTypeOfCardForPayment){
  containerTypeOfCardForPayment.remove();
}

const containerSvgQuestionMarkBlueForPayment = document.querySelector(".container-svg-question-mark-blue-for-payment");

if(containerSvgQuestionMarkBlueForPayment){
  containerSvgQuestionMarkBlueForPayment.remove();
}

const containerSvgExclamationMarkForPayment = document.querySelector(".container-svg-exclamation-mark-for-payment");

if(containerSvgExclamationMarkForPayment){
  containerSvgExclamationMarkForPayment.remove();
}

let containerInfoBottomGooglePayForPayment = document.querySelector(".container-info-bottom-google-pay-for-payment");

if(containerInfoBottomGooglePayForPayment){
  containerInfoBottomGooglePayForPayment.remove();
}

let containerClubeUolToPayment = document.querySelector(".container-clube-uol-to-payment");

if(containerClubeUolToPayment){
  containerClubeUolToPayment.remove();
}

let containerTicketGiftCardInfoInner = document.querySelector(".ticket-gift-card-info-inner");

if(containerTicketGiftCardInfoInner){
  containerTicketGiftCardInfoInner.remove();
}

const functionClickPayment = () => {
  alreadyClickCardCredit = 0
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

  if(containerSvgPayment2){
    containerSvgPayment2.remove();
  }

  if(whatButtonClickedSeatsTickets === "payment" && varivelHelpForSumIfAlreadyTicketChose > 0){
    if(containerTypesTickets){
      containerTypesTickets.remove();
    }

    if(containerBomboniere){
      containerBomboniere.remove();
    }

    containerSeatsTypeTicketsBombonierePayment.appendChild(spanPayment);

    if(spanBomboniere){
      spanBomboniere.remove();
    }

    if(spanTypesTickets){
      spanTypesTickets.remove();
    }
    

    containerChoseSeatNumberResumeOrderMain.insertBefore(containerPayment, containerChoseSeatNumberResumeOrderMain.firstChild);

    containerCreditCardMain = document.querySelector(".container-credit-card-main");
    containerDebitCardMain = document.querySelector(".container-debit-card-main");
    containerPixMain = document.querySelector(".container-pix-main");
    containerGooglePayMain = document.querySelector(".container-google-pay-main");
    containerClubeUolPayment = document.querySelector(".container-clube-uol-payment");
    containerTicketGiftCardForInsert = document.querySelector(".container-ticket-gift-card-and-arrow");

    // ESSA PARTE DO CARTÃO DE CREDITO CRIAÇÃO DA DIV QUE DESCE PARA A PESSOA COLOCAR AS INFORMAÇÃO \\

    containerNumberCardExpirationDateSecurityCodeNameCard = document.querySelector(".container-number-card-expiration-date-security-code");

    if(containerNumberCardExpirationDateSecurityCodeNameCard){
      containerNumberCardExpirationDateSecurityCodeNameCard.remove();
    }

    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard = document.querySelector(".container-number-card-expiration-date-security-code-for-debit-card");

    if(containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard){
      containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.remove();
    }

    containerInfoPixBottom = document.querySelector(".container-info-pix-bottom");

    if(containerInfoPixBottom){
      containerInfoPixBottom.remove();
    }

    containerNumberCardExpirationDateSecurityCodeNameCard = document.createElement("div");
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard = document.createElement("div");
    containerInfoPixBottom = document.createElement("div")

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

    containerNumberCardMain.appendChild(spanNameCard);
    containerNumberCardMain.appendChild(inputNumberCard);

    let containerExpirationDate = document.createElement("div");
    containerExpirationDate.classList.add("container-expiration-date");

    let spanExpirationDate = document.createElement("span");
    spanExpirationDate.classList.add("span-expiration-date");
    spanExpirationDate.textContent = "Data de validade";

    let inputExpirationDate = document.createElement("input");
    inputExpirationDate.classList.add("input-expiration-date");
    inputExpirationDate.placeholder = "MM/AA";

    containerExpirationDate.appendChild(spanExpirationDate);
    containerExpirationDate.appendChild(inputExpirationDate);

    let containerSecurityCode = document.createElement("div");
    containerSecurityCode.classList.add("container-security-code");

    let spanSecurityCode = document.createElement("span");
    spanSecurityCode.classList.add("span-security-code");
    spanSecurityCode.textContent = "Código de segurança";

    let inputSecurityCode = document.createElement("input");
    inputSecurityCode.classList.add("input-security-code");
    inputSecurityCode.placeholder = "3 dígitos";

    let containerSpanSecurityCodeAndSvgQuestionMark = document.createElement("div");
    containerSpanSecurityCodeAndSvgQuestionMark.classList.add("container-span-security-code-and-svg-question-mask");

    containerSpanSecurityCodeAndSvgQuestionMark.appendChild(spanSecurityCode);
    containerSpanSecurityCodeAndSvgQuestionMark.appendChild(containerSvgQuestionMarkBlueForPayment);

    containerSecurityCode.appendChild(containerSpanSecurityCodeAndSvgQuestionMark);
    containerSecurityCode.appendChild(inputSecurityCode);

    let containerExpirationDateAndSecurityCode = document.createElement("div");
    containerExpirationDateAndSecurityCode.classList.add("container-expiration-date-and-security-code");

    containerExpirationDateAndSecurityCode.appendChild(containerExpirationDate);
    containerExpirationDateAndSecurityCode.appendChild(containerSecurityCode);

    let containerNameCard = document.createElement("div");
    containerNameCard.classList.add("container-name-card");

    let spanNameCardPayment = document.createElement("span");
    spanNameCardPayment.classList.add("span-name-card");
    spanNameCardPayment.textContent = "Nome do cartão";

    let inputNameCardPayment = document.createElement("input");
    inputNameCardPayment.classList.add("input-name-card");
    inputNameCardPayment.placeholder = "Nome como está no cartão";

    containerNameCard.appendChild(spanNameCardPayment);
    containerNameCard.appendChild(inputNameCardPayment);

    let containerSpanCheckbox = document.createElement("div");
    containerSpanCheckbox.classList.add("container-span-checkbox");

    let inputCheckout = document.createElement("input");
    inputCheckout.setAttribute("type", "checkbox");
    inputCheckout.classList.add("input-checkout");

    let spanSaveForTheNextPayment = document.createElement("span");
    spanSaveForTheNextPayment.classList.add("span-save-for-the-next-payment");
    spanSaveForTheNextPayment.textContent = "Salvar para meu próximo pagamento";

    containerSpanCheckbox.appendChild(inputCheckout);
    containerSpanCheckbox.appendChild(spanSaveForTheNextPayment);

    containerInputsInfoCardMain.appendChild(containerNumberCardMain);
    containerInputsInfoCardMain.appendChild(containerTypeOfCardForPayment);

    containerNumberCardExpirationDateSecurityCodeNameCard.classList.add("container-number-card-expiration-date-security-code");

    containerNumberCardExpirationDateSecurityCodeNameCard.appendChild(containerInputsInfoCardMain);
    containerNumberCardExpirationDateSecurityCodeNameCard.appendChild(containerExpirationDateAndSecurityCode);
    containerNumberCardExpirationDateSecurityCodeNameCard.appendChild(containerNameCard);
    containerNumberCardExpirationDateSecurityCodeNameCard.appendChild(containerSpanCheckbox);

    containerCreditCardMain.appendChild(containerNumberCardExpirationDateSecurityCodeNameCard);

    // END \\

    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.classList.add("container-number-card-expiration-date-security-code-for-debit-card");

    let containerInputsInfoCardMainClone = containerInputsInfoCardMain.cloneNode(true);
    let containerExpirationDateAndSecurityCodeClone = containerExpirationDateAndSecurityCode.cloneNode(true);
    let containerNameCardClone = containerNameCard.cloneNode(true);
    // let containerSpanCheckboxClone = containerSpanCheckbox.cloneNode(true);

    let containerSpanTwoTopPart = document.createElement("div");
    containerSpanTwoTopPart.classList.add("container-span-two-top-part");

    let spanFirstTop = document.createElement("span");
    spanFirstTop.classList.add("span-first-top");

    let link = document.createElement("a");
    link.href = "#";
    link.textContent = "Clique aqui ";

    spanFirstTop.innerHTML = `${link.outerHTML} e descubra se o seu banco é aceito.`;

    let containerSvgExclamationMarkAndSpanSecond = document.createElement("div");
    containerSvgExclamationMarkAndSpanSecond.classList.add("container-svg-exclamation-mark-and-span-second");

    let spanSecondTop = document.createElement("span");
    spanSecondTop.classList.add("span-second-top");
    spanSecondTop.textContent = "Alguns bancos requerem um cartão de Débito virtual. Verifique se o seu é um deles.";

    containerSvgExclamationMarkAndSpanSecond.appendChild(containerSvgExclamationMarkForPayment);
    containerSvgExclamationMarkAndSpanSecond.appendChild(spanSecondTop);

    containerSpanTwoTopPart.appendChild(spanFirstTop);
    containerSpanTwoTopPart.appendChild(containerSvgExclamationMarkAndSpanSecond);

    let link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "Políticas de Pagamento.";

    let spanPaymentPolicies = document.createElement("span");
    spanPaymentPolicies.classList.add("span-payment-policies");

    spanPaymentPolicies.innerHTML = `Saiba mais sobre ${link2.outerHTML}`;

    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.appendChild(containerSpanTwoTopPart);
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.appendChild(containerInputsInfoCardMainClone);
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.appendChild(containerExpirationDateAndSecurityCodeClone);
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.appendChild(containerNameCardClone);
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.appendChild(spanPaymentPolicies);
    
    containerDebitCardMain.appendChild(containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard);
    // \\

    containerInfoPixBottom.classList.add("container-info-pix-bottom");

    let spanInfoPixBottom = document.createElement("span");
    spanInfoPixBottom.classList.add("span-info-pix-bottom");
    spanInfoPixBottom.textContent = "Antes de realizar o pagamento, confira se o CNPJ é 00860640*******.";

    let spanInfoPixBottom2 = document.createElement("span");
    spanInfoPixBottom2.classList.add("span-info-pix-bottom-2");
    spanInfoPixBottom2.textContent = "Quando o pagamento for validado, você será automaticamente redirecionado para a tela com as informações de sua compra.";

    containerInfoPixBottom.appendChild(spanInfoPixBottom);
    containerInfoPixBottom.appendChild(spanInfoPixBottom2);

    containerPixMain.appendChild(containerInfoPixBottom);
    
    // \\
    containerInfoBottomGooglePayForPayment.style.maxHeight = "0px";
    containerGooglePayMain.appendChild(containerInfoBottomGooglePayForPayment);

    // \\
    if(containerLestChildSpanSubscriber === null){
      containerLestChildSpanSubscriber = containerClubeUolPayment.querySelector(".span-subscriber-uol");
      containerClubeUolPayment.insertBefore(containerClubeUolToPayment, containerLestChildSpanSubscriber);
    }

    containerTicketGiftCardForInsert.appendChild(containerTicketGiftCardInfoInner);

    element_cpf_cnpj = document.getElementsByClassName("input-cpf-cnpj");
    const im_cnpj = new Inputmask({
      mask: ["999.999.999-99", "99.999.999/9999-99"],
      greedy: false,
      clearIncomplete: true,
    });

    im_cnpj.mask(element_cpf_cnpj);

    containerOrderSummary.style.marginBottom = "0px";
    containerOrderSummary.style.height = "auto";
    containerPayment.style.justifyContent = "space-between";
  }
}

const clickPayment = () => {
  functionClickPayment();
}

const clickCardCredit = (e) => {
  let spanNameCard = e.target;
  const containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets"); 

  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  let containerWhatTypePaymentClick = document.createElement("div");
  containerWhatTypePaymentClick.classList.add("container-what-type-payment-click");

  let spanPaymentTitle = document.createElement("span");
  spanPaymentTitle.classList.add("span-payment-title");
  spanPaymentTitle.textContent = "Pagamento";

  let spanPaymentClicked = document.createElement("span");
  spanPaymentClicked.classList.add("span-payment-clicked");
  spanPaymentClicked.textContent = spanNameCard.textContent;

  containerWhatTypePaymentClick.appendChild(spanPaymentTitle);
  containerWhatTypePaymentClick.appendChild(spanPaymentClicked);

  if(containerWhatTypePaymentClickAlreadyExist === null){
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }else {
    containerWhatTypePaymentClickAlreadyExist.remove();
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }

  if(clickedContainerMethodPayment !== "cardCredit") {
    alreadyClickCardCredit = 0;
    containerInfoBottomGooglePayForPayment.style.maxHeight = "0px";

    let timeoutId = setTimeout(() => {
      containerInfoBottomGooglePayForPayment.style.paddingBottom = "0px";
      containerInfoPixBottom.style.paddingBottom = "0px";
    }, 400);
  }

  clickedContainerMethodPayment = "cardCredit";
  containerDebitCardMain.style.border = "none";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "none";
  containerCreditCardMain.style.border = "1px solid rgb(152, 170, 236)";

  if(alreadyClickCardCredit === 0 && clickedContainerMethodPayment === "cardCredit"){
    alreadyClickCardCredit = 1;
    
    containerCreditCardMain.style.height = "auto";
    containerNumberCardExpirationDateSecurityCodeNameCard.style.maxHeight = "100vh";
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.maxHeight = "0px";
    containerInfoPixBottom.style.maxHeight = "0px";

  }else if(alreadyClickCardCredit === 1 && clickedContainerMethodPayment === "cardCredit") {
    alreadyClickCardCredit = 0;

    containerNumberCardExpirationDateSecurityCodeNameCard.style.maxHeight = "0px";
  }
}

const clickDebitCard = (e) => {
  let spanNameCard = e.target;
  const containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets"); 
  
  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  let containerWhatTypePaymentClick = document.createElement("div");
  containerWhatTypePaymentClick.classList.add("container-what-type-payment-click");

  let spanPaymentTitle = document.createElement("span");
  spanPaymentTitle.classList.add("span-payment-title");
  spanPaymentTitle.textContent = "Pagamento";

  let spanPaymentClicked = document.createElement("span");
  spanPaymentClicked.classList.add("span-payment-clicked");
  spanPaymentClicked.textContent = spanNameCard.textContent;

  containerWhatTypePaymentClick.appendChild(spanPaymentTitle);
  containerWhatTypePaymentClick.appendChild(spanPaymentClicked);

  if(containerWhatTypePaymentClickAlreadyExist === null){
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }else {
    containerWhatTypePaymentClickAlreadyExist.remove();
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }

  if(clickedContainerMethodPayment !== "debitCard") {
    alreadyClickCardCredit = 0;
    containerInfoBottomGooglePayForPayment.style.maxHeight = "0px";
    
    let timeoutId = setTimeout(() => {
      containerInfoBottomGooglePayForPayment.style.paddingBottom = "0px";
      containerInfoPixBottom.style.paddingBottom = "0px";
    }, 400);
  }

  clickedContainerMethodPayment = "debitCard";
  containerCreditCardMain.style.border = "none";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "none";
  containerDebitCardMain.style.border = "1px solid rgb(152, 170, 236)";

  if(alreadyClickCardCredit === 0 && clickedContainerMethodPayment === "debitCard"){
    alreadyClickCardCredit = 1;
    
    containerDebitCardMain.style.height = "auto";
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.maxHeight = "100vh";
    containerNumberCardExpirationDateSecurityCodeNameCard.style.maxHeight = "0px";
    containerInfoPixBottom.style.maxHeight = "0px";
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.paddingBottom = "10px";
  }else if(alreadyClickCardCredit === 1 && clickedContainerMethodPayment === "debitCard") {
    alreadyClickCardCredit = 0;

    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.maxHeight = "0px";

    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.paddingBottom = "0px";
  }
}

const clickPix = (e) => {
  let spanNameCard = e.target;
  const containerSeatsChosenAndTickets = document.querySelector(".container-seats-chosen-and-tickets");

  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  let containerWhatTypePaymentClick = document.createElement("div");
  containerWhatTypePaymentClick.classList.add("container-what-type-payment-click");

  let spanPaymentTitle = document.createElement("span");
  spanPaymentTitle.classList.add("span-payment-title");
  spanPaymentTitle.textContent = "Pagamento";

  let spanPaymentClicked = document.createElement("span");
  spanPaymentClicked.classList.add("span-payment-clicked");
  spanPaymentClicked.textContent = spanNameCard.textContent;

  containerWhatTypePaymentClick.appendChild(spanPaymentTitle);
  containerWhatTypePaymentClick.appendChild(spanPaymentClicked);

  if(containerWhatTypePaymentClickAlreadyExist === null){
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }else {
    containerWhatTypePaymentClickAlreadyExist.remove();
    containerSeatsChosenAndTickets.appendChild(containerWhatTypePaymentClick);
  }

  if(clickedContainerMethodPayment !== "pix"){
    alreadyClickCardCredit = 0;
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.maxHeight = "0px";
    containerNumberCardExpirationDateSecurityCodeNameCard.style.maxHeight = "0px";
    containerInfoBottomGooglePayForPayment.style.maxHeight = "0px";

    let timeoutId = setTimeout(() => {
      containerInfoBottomGooglePayForPayment.style.paddingBottom = "0px";
      containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.paddingBottom = "0px";
      containerNumberCardExpirationDateSecurityCodeNameCard.style.paddingBottom = "0px";
    }, 400);
  }

  clickedContainerMethodPayment = "pix";
  containerCreditCardMain.style.border = "none";
  containerDebitCardMain.style.border = "none";
  containerGooglePayMain.style.border = "none";
  containerPixMain.style.border = "1px solid rgb(152, 170, 236)";

  if(alreadyClickCardCredit === 0 && clickedContainerMethodPayment === "pix"){
    alreadyClickCardCredit = 1;
    
    containerPixMain.style.height = "auto";
    containerInfoPixBottom.style.maxHeight = "100vh";
    containerInfoPixBottom.style.paddingBottom = "10px";
  }else if(alreadyClickCardCredit === 1 && clickedContainerMethodPayment === "pix") {
    alreadyClickCardCredit = 0;

    containerInfoPixBottom.style.maxHeight = "0px";

    setTimeout(() => {
      containerInfoPixBottom.style.paddingBottom = "0px";
    }, 400);
  }
}

const putGooglePayForRun = () => {
  const paymentDataRequest = {
    // Informações do pagamento
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
        // Informações do comerciante
        merchantName: 'Deo merchant',
        // Informações do ambiente do Google Merchant Center
        merchantId: '12345679533',
    },
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exapleGateMerchantID',
          },
        },
      },
    ],
    transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '10',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    // Opções adicionais
    shippingAddressRequired: true,
    shippingAddressParameters: {
        allowedCountryCodes: ['BR'],
        phoneNumberRequired: true,
    },
  };
  
  const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
  
  paymentsClient.isReadyToPay({ allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'] })
  .then(function(response) {
      if (response.result) {
          const button = document.getElementById('google-pay-button');
          button.addEventListener('click', () => {
              paymentsClient.loadPaymentData(paymentDataRequest)
                  .then(function(paymentData) {
                      // Processar o pagamento
                  })
                  .catch(function(error) {
                    // Error
                  });
          });
      } else {
        console.error('Google Pay não está disponível para o usuário');
      }
  })
  .catch(function(error) {
    console.error('Erro ao verificar a disponibilidade do Google Pay', error);
  });
}

const clickGooglePay = () => {
  let containerWhatTypePaymentClickAlreadyExist = document.querySelector(".container-what-type-payment-click");

  if(containerWhatTypePaymentClickAlreadyExist){
    containerWhatTypePaymentClickAlreadyExist.remove();
  }
  
  if(clickedContainerMethodPayment !== "googlePay"){
    alreadyClickCardCredit = 0;
    containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.maxHeight = "0px";
    containerNumberCardExpirationDateSecurityCodeNameCard.style.maxHeight = "0px";
    containerInfoPixBottom.style.maxHeight = "0px";

    let timeoutId = setTimeout(() => {
      containerInfoPixBottom.style.paddingBottom = "0px";
      containerNumberCardExpirationDateSecurityCodeNameCardForDebitCard.style.paddingBottom = "0px";
      containerNumberCardExpirationDateSecurityCodeNameCard.style.paddingBottom = "0px";
    }, 400);
  }

  clickedContainerMethodPayment = "googlePay";
  containerCreditCardMain.style.border = "none";
  containerDebitCardMain.style.border = "none";
  containerPixMain.style.border = "none";
  containerGooglePayMain.style.border = "1px solid rgb(152, 170, 236)";

  if(alreadyClickCardCredit === 0 && clickedContainerMethodPayment === "googlePay"){
    alreadyClickCardCredit = 1;
    
    containerGooglePayMain.style.height = "auto";
    containerInfoBottomGooglePayForPayment.style.maxHeight = "100vh";
    containerInfoBottomGooglePayForPayment.style.paddingBottom = "10px";
  }else if(alreadyClickCardCredit === 1 && clickedContainerMethodPayment === "googlePay") {
    alreadyClickCardCredit = 0;

    containerInfoBottomGooglePayForPayment.style.maxHeight = "0px";

    let timeoutId = setTimeout(() => {
      containerInfoBottomGooglePayForPayment.style.paddingBottom = "0px";
    }, 400);

    // clearTimeout(timeoutId);
  }

  putGooglePayForRun();
}

let alreadyClickClubeUolAndTicketsGiftCard = 0;
let alreadyClickTicketGiftCard = 0;

// containerChoseSeatNumberResumeOrderMain.marginBottom = "60px";

const clickClubeUol = (e) => {
  const containerSvgArrowDownUp = e.srcElement.querySelector(".container-svg-arrow-down-up");
  let svgArrowDownUp = containerSvgArrowDownUp.firstChild.nextSibling;
  let containerSvgWarningSpanCpfOrCnpjClubeUol = document.querySelector(".container-svg-warning-span-cpf-or-cnpj-clube-uol");

  if(containerSvgWarningSpanCpfOrCnpjClubeUol){
    containerSvgWarningSpanCpfOrCnpjClubeUol.remove();
  }
  // pointer-events: none;
  let buttonApplyClubeUol = document.querySelector(".button-apply-clube-uol");

  if(alreadyClickClubeUolAndTicketsGiftCard === 0){
    alreadyClickClubeUolAndTicketsGiftCard = 1;
    svgArrowDownUp.style = "transform: rotate(0deg)";

    element_cpf_cnpj[0].addEventListener("keydown", (e) => {
      if(cpf.isValid(e.srcElement.value) || cnpj.isValid(e.srcElement.value)){
        e.srcElement.style.borderLeft = "3px solid #4CAF50";
        e.srcElement.style.borderBottom = "1px solid #4CAF50";
        e.srcElement.style.borderTop = "1px solid #4CAF50";
        e.srcElement.style.borderRight = "1px solid #4CAF50";

        buttonApplyClubeUol.style.cursor = "pointer";
        buttonApplyClubeUol.style.borderColor = "rgb(107 132 219)";
        buttonApplyClubeUol.style.color = "rgb(107 132 219)";

        if(containerSvgWarningSpanCpfOrCnpjClubeUol){
          containerSvgWarningSpanCpfOrCnpjClubeUol.remove();
        }
      }else {
        e.srcElement.style.borderLeft = "3px solid #F44336";
        e.srcElement.style.borderBottom = "1px solid #F44336";
        e.srcElement.style.borderTop = "1px solid #F44336";
        e.srcElement.style.borderRight = "1px solid #F44336";
        
        buttonApplyClubeUol.style.cursor = "no-drop";
        buttonApplyClubeUol.style.borderColor = "rgb(102 103 109)";
        buttonApplyClubeUol.style.color = "rgb(102 103 109)";
  
        containerClubeUolToPayment.appendChild(containerSvgWarningSpanCpfOrCnpjClubeUol);
      }
    });
      
    containerClubeUolPayment.style.height = "auto";
    containerClubeUolToPayment.style.maxHeight = "100vh"; 
    containerClubeUolToPayment.style.paddingBottom = "15px";
    containerLestChildSpanSubscriber.remove();
  }else if(alreadyClickClubeUolAndTicketsGiftCard === 1){
    alreadyClickClubeUolAndTicketsGiftCard = 0;
    svgArrowDownUp.style = "transform: rotate(180deg)";

    containerClubeUolPayment.appendChild(containerLestChildSpanSubscriber);

    containerClubeUolToPayment.style.maxHeight = "0px";
    containerClubeUolToPayment.style.paddingBottom = "0px";
    containerClubeUolPayment.style.paddingBottom = "15px";
  }

  if(alreadyClickClubeUolAndTicketsGiftCard === 1 && alreadyClickTicketGiftCard === 1){
    containerChoseSeatNumberResumeOrderMain.style.marginBottom = "60px";
  }else {
    containerChoseSeatNumberResumeOrderMain.style.marginBottom = "0px";
  }
}

const clickTicketGiftCard = (e) => {
  const containerSvgArrowDownUp = e.target.querySelector(".container-svg-arrow-down-up-tickets-gift-card");
  let svgArrowDownUp = containerSvgArrowDownUp.firstChild.nextSibling;

  if(alreadyClickTicketGiftCard === 0){
    svgArrowDownUp.style = "transform: rotate(0deg)";
    alreadyClickTicketGiftCard = 1;

    containerTicketGiftCardForInsert.style.height = "auto";
    containerTicketGiftCardInfoInner.style.maxHeight = "100vh"; 
    containerTicketGiftCardInfoInner.style.paddingTop = "8px";

  }else if(alreadyClickTicketGiftCard === 1){
    svgArrowDownUp.style = "transform: rotate(180deg)";
    alreadyClickTicketGiftCard = 0;

    containerTicketGiftCardInfoInner.style.maxHeight = "0px";
    containerTicketGiftCardInfoInner.style.paddingTop = "0px";
  }

  if(alreadyClickClubeUolAndTicketsGiftCard === 1 && alreadyClickTicketGiftCard === 1){
    containerChoseSeatNumberResumeOrderMain.style.marginBottom = "60px";
  }else {
    containerChoseSeatNumberResumeOrderMain.style.marginBottom = "0px";
  }
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

  if(containerClubeUol){
    containerClubeUol.addEventListener("click", clickClubeUol);
  }

  if(containerTicketGiftCard){
    containerTicketGiftCard.addEventListener("click", clickTicketGiftCard);
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

  if(containerClubeUol){
    containerClubeUol.removeEventListener("click", clickClubeUol);
  }

  if(containerTicketGiftCard){
    containerTicketGiftCard.removeEventListener("click", clickTicketGiftCard);
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
    if(whatButtonClickedSeatsTickets === "payment"){
      functionClickBomboniere();
    }else if(whatButtonClickedSeatsTickets === "bomboniere"){
      functionClickTickets();
    }else if(whatButtonClickedSeatsTickets === "tickets"){
      functionClickChoseOfSeats();
    }
  });
}

if(containerButtonSkip){
  containerButtonSkip.addEventListener("click", () => {
    if(whatButtonClickedSeatsTickets === "seats"){
      functionClickTickets();
    }else if(whatButtonClickedSeatsTickets === "tickets"){
      functionClickBomboniere();
    }else if(whatButtonClickedSeatsTickets === "bomboniere"){
      functionClickPayment();
    }
  });
}
