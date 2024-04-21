//click in chose seats / tickets / bomboniere / payment

const containerSvgTickets = document.querySelector('.div-svg-tickets');
const spanItensValuesSeats = document.querySelector(".span-itens-values-seats");
const containerLineWhite1 = document.querySelector(".line-white-1");
const containerLineWhite2 = document.querySelector(".line-white-2");

const buttonBack = document.querySelector('.button-back'); 
const containerSvgChoseOfSeats = document.querySelector('.div-svg-chose-of-seats'); 
const containerChoseSeatNumber = document.querySelector('.container-chose-seat-number');
const containerChoseSeatNumberResumeOrderMain = document.querySelector('.container-chose-seat-number-resume-order-main');
const containerSeatsTypeTicketsBombonierePayment = document.querySelector(".container-seats-type-tickets-bomboniere-payment");

const containerBackSkipMain = document.querySelector('.container-back-skip');
// const containerTicketsSvg = document.querySelector(".container-all-tickets-svg");
const containerButtonSkip = document.querySelector(".container-button-skip");

const spanTypesTickets = document.querySelector(".span-types-tickets");
const spanChoseOfSeats = document.querySelector('.span-chose-ofseats');

const containerOrderSummary = document.querySelector('.container-order-summary');
const containerSvgBomboniere = document.querySelector('.div-svg-bomboniere');

let containerTicketsSvgAll = null;

let whatButtonClickedSeatsTickets = "seats";
let typePaymentAll = [];

let containerMoreAll = document.querySelectorAll(".container-more-svg");
let containerLessAll = document.querySelectorAll(".container-less-svg");

let containerSvgPayment = document.querySelector(".container-all-tickets-svg-2");

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

let isReleasedForHoverMouseButtonBack = false;
let containerAllTicketsOfTypeTicketsSelected = null;

const functionClickMoreInteiro = (e) => {
  console.log("teste more");
  const containerTicketsSvg = document.querySelector(".container-all-tickets-svg-2");
  containerAllTicketsOfTypeTicketsSelected = containerTicketsSvg;

  if(containerAllTicketsOfTypeTicketsSelected){
    containerSvgPayment = containerAllTicketsOfTypeTicketsSelected;
  }else {
    varivelHelpForSumIfAlreadyTicketChose = 0;
    let containerTicketSvgNewClick = document.createElement("div");
    containerTicketSvgNewClick.classList.add("container-all-tickets-svg-2");
    containerSvgPayment = containerTicketSvgNewClick;
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

    containerSvgPayment.appendChild(containerTicketSvgNewClick);
    containerBackSkipMain.insertBefore(containerSvgPayment, containerButtonSkip);

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
  }
}

const functionClickLessInteiro = (e) => {
  let containerMoreLess = e.srcElement.parentElement.parentElement;
  
  const containerTicketsSvg = document.querySelector(".container-all-tickets-svg-2");
  containerAllTicketsOfTypeTicketsSelected = containerTicketsSvg;

  if(containerAllTicketsOfTypeTicketsSelected){
    containerSvgPayment = containerAllTicketsOfTypeTicketsSelected;
  }

  const spanNumberTickets = containerMoreLess.querySelector(".count-number-tickets");

  if(spanNumberTickets && Number(spanNumberTickets.textContent) > 0){
    spanNumberTickets.textContent = Number(spanNumberTickets.textContent) - 1;

    varivelHelpForSumIfAlreadyTicketChose -= 1;

    let containerPaymentMethod = containerMoreLess.querySelector(".container-paragraph-and-price");

    let containerSvgAndTypePaymentPrice = containerPaymentMethod.parentElement;
    let spanTypePayment = containerSvgAndTypePaymentPrice.querySelector(".span-type-payment");

    if(spanTypePayment.textContent === "Meia"){
      let svgTicketHalf = containerSvgPayment.querySelector(".svg-ticket-half");
      svgTicketHalf.parentElement.remove();
    }else {
      let svgTicket = containerSvgPayment.querySelector(".injected-svg");
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

if(containerSvgTickets){
  containerSvgTickets.addEventListener("click", () => {
    //rgb(152, 170, 236) -> disabled
    //rgb(49, 85, 232) -> actived
    const containerTicketsSvg = document.querySelector(".container-all-tickets-svg-1");

    if(containerAllTicketsOfTypeTicketsSelected){
      containerBackSkipMain.insertBefore(containerAllTicketsOfTypeTicketsSelected, containerButtonSkip);
      whatButtonClickedSeatsTickets = "tickets";

      if(containerTicketsSvg){
        containerTicketsSvg.remove();
      }
    }else {
      if(containerTicketsSvg && containerTicketsSvg.childNodes.length === 0){
        whatButtonClickedSeatsTickets = "seats";
      }else {
        if(containerTicketsSvg){
          containerTicketsSvg.remove();
        }
        document.body.style.height = "100vh";
        containerOrderSummary.style.height = "570px";
        containerChoseSeatNumberResumeOrderMain.style.height = "100%";
        whatButtonClickedSeatsTickets = "tickets";
      }

      setTimeout(() => {
        containerMoreAll.forEach((el) => {
          const containerMoreLess = el.parentElement;
          const containerMore = containerMoreLess.querySelector(".container-more-svg");
        
          containerMore.style.background = "rgb(152, 170, 236)";
          containerMore.style.cursor = "pointer";
        });
      }, 100);
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

    // tem um problema quando eu nao marco todos os campo dos "TIPOS DE INGRESSO"
    // E CLICO NA PIPOCA E FECHO O WARN, ELE NAO RECOLOCA O EVENTO CLICK ESSES DE BAIXO
    // ENTÃO TEM QUE CRIAR UMA FUNÇÃO PARA NAO DUPLICAR ESSA LINHA PORQUE VOCÊ VAI USAR AQUI EM BAIXO
    // E NO BOTÃO CLICK LÁ EM BAIXO AMBOS OS "containerSvgExitWarning" "buttonContinue" COLOCAR ESSA FUNÇÃO PARA REATIVAR OS EVENTOS

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

    containerSvgChoseOfSeats.addEventListener("click", () => {
      containerAllTicketsOfTypeTicketsSelected = null;
      typePaymentAll = [];
      whatButtonClickedSeatsTickets = "seats";
      containerOrderSummary.style.height = "97%";
      document.body.style.height = "100%";
      containerChoseSeatNumberResumeOrderMain.style.height = "64rem";

      containerSvgBomboniere.style.borderColor = "rgb(52, 60, 70)";
      containerSvgBomboniere.style.background = "transparent";
      containerSvgBomboniere.firstChild.nextSibling.style.fill = "rgb(52, 60, 70)";
      
      const containerTicketsSvgCurrent = document.querySelector(".container-all-tickets-svg-2");

      spanTotalValueOrderSummary.textContent = `R$ 0,00`;

      if(containerTicketsSvgCurrent){
        containerTicketsSvgCurrent.remove();
      }

      if(containerBackSkipMain){
        containerBackSkipMain.insertBefore(containerTicketsSvg, containerButtonSkip);  
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
  });

  let containerBodyChoseSeatsAndMore = document.querySelector(".container-body-chose-seats-and-more");
  let svgWarn = document.querySelector(".svg-warning");

  containerSvgBomboniere.addEventListener("click", () => {
    let sumQuantityPaymentSelected = 0;
    // let containerTicketsSvg = document.querySelector(".container-all-tickets-svg");
    // containerTicketsSvgAll = containerTicketsSvg;

    // if(containerTicketsSvg){
    //   containerTicketsSvg.remove();
    // }

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

      // let containerSvgExitWarning = document.querySelector(".container-svg-exit-warning");

      containerSvgExitWarning.addEventListener("click", () => {
        containerWarnNotAllSeatsWereSelected.remove();
      });

      buttonContinue.addEventListener("click", () => {
        containerWarnNotAllSeatsWereSelected.remove();
      });

      // functionDefineColorForMoreAndLess();
    }else {
      console.log("foi tudo seleciondado para passar para pipocas");
      // let containerTicketsSvg = document.querySelector(".container-all-tickets-svg");
      // containerTicketsSvgAll = containerTicketsSvg;

      // if(containerTicketsSvg){
      //   containerTicketsSvg.remove();
      // }
      
      containerSvgBomboniere.style.borderColor = "transparent";
      containerSvgBomboniere.style.background = "rgb(49, 85, 232)";
      containerSvgBomboniere.firstChild.nextSibling.style.fill = "#fff";

      containerSvgTickets.style.borderColor = "rgb(152, 170, 236)";
      containerSvgTickets.style.background = "transparent";
      containerSvgTickets.firstChild.nextSibling.style.fill = "rgb(152, 170, 236)";

      containerLineWhite2.style.background =  "rgb(152, 170, 236)";
    }

    functionRemoveEventListernerContainerMoreAndLess();
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
    }
  });
}