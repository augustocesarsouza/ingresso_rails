const description = document.querySelector('.span-description-chose-movie-theater');
const maxLength = 100;

if(description && description.textContent && description.textContent.length > maxLength){
  description.textContent = description.textContent.substring(0, maxLength) + '...';
}

import { addDays, format, eachDayOfInterval } from "date-fns";

const getDayName = (date) => {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return days[date.getDay()];
}

const formatDate = (date) => {
  return format(date, "dd/MM");
}

const today = new Date();

const futureDates = eachDayOfInterval({ start: today, end: addDays(today, 5) });

const functionClickDateChoseToday = (containerDateElement) => {
  functionCleanDays();

  containerDateElement.style.fontSize = "17px";
  containerDateElement.style.color = "#fff";
  containerDateElement.style.fontWeight = "700";
}

const functionClickDateChose = (containerDateElement) => {
  functionCleanDays();

  containerDateElement.style.fontSize = "17px";
  containerDateElement.style.color = "#fff";
  containerDateElement.style.fontWeight = "700";
}

const container = document.querySelector(".container-date-for-watch-film");

futureDates.forEach((date) => {
  const dayMonthElement = document.createElement("span");
  dayMonthElement.textContent = formatDate(date);
  const dayNameElement = document.createElement("span");
  dayNameElement.textContent = getDayName(date);

  if(today.getDay() === date.getDay()){
    const containerDateElement = document.createElement("div");
    containerDateElement.classList.add("container-date-chose-movie-theater-today");
    containerDateElement.appendChild(dayMonthElement);
    dayNameElement.textContent = "Hoje";
    containerDateElement.appendChild(dayNameElement);

    containerDateElement.addEventListener('click', () => {
      functionClickDateChoseToday(containerDateElement);
    });

    if(container){
      container.appendChild(containerDateElement);
    }
  }else{
    const containerDateElement = document.createElement("div");
    containerDateElement.classList.add("container-date-chose-movie-theater");
    containerDateElement.appendChild(dayMonthElement);
    containerDateElement.appendChild(dayNameElement);

    containerDateElement.addEventListener('click', () => {
      functionClickDateChose(containerDateElement);
    });

    if(container){
      container.appendChild(containerDateElement);
    }
  }
});

const functionCleanDays = () => {
  const allChildren = container.children;

  for (let i = 0; i < allChildren.length; i++) {
    const child = allChildren.item(i);
    child.style.fontSize = "15px";
    child.style.color = "#adb6c2";
    child.style.fontWeight = "600";
  }
}

const containerListCategory = document.querySelector(".container-category-movie-chose-movie-theater");

if(containerListCategory && containerListCategory.children){
  const listCategory = containerListCategory.children;

  for (let i = 0; i < listCategory.length; i++) {
    const element = listCategory.item(i);
    
    element.addEventListener('click', () => {
      funcClickElementCategory(element);
    });
  }
  // Filtro para category movie / START
  let arrayElementClick = [];

  let containerMainHourCategory = document.querySelectorAll(".container-schedule-movie-theater");

  let elementContainerMainDelete = [];
  let elementContainerMainChilgrenDelete = [];

  let arrayAllTextSpan = [];

  const funcClickElementCategory = (element) => {
    if(arrayElementClick.includes(element.textContent)){
      arrayElementClick = arrayElementClick.filter((arrayEl) => arrayEl !== element.textContent);

    }else {
      arrayElementClick.push(element.textContent);
    }

    elementContainerMainChilgrenDelete.forEach((elDelete) => {
      elDelete.style.display = "flex";
    });

    elementContainerMainDelete.forEach((elMainDelete) => {
      elMainDelete.style.display = "block";
    });

    elementContainerMainDelete = [];
    elementContainerMainChilgrenDelete = [];
    
    let inicioForCheckDisplay = 0;

    if(arrayElementClick.length > 0) {
      containerMainHourCategory.forEach((containerMain) => {
        for (let i = 0; i < containerMain.children.length; i++) {
          const element = containerMain.children[i];
          
          let containerSpan = element.querySelector(".container-span-telasgigantesplf-dublado");
          
          for (let j = 0; j < containerSpan.children.length; j++) {
            let elementSpan = containerSpan.children[j];

            arrayAllTextSpan.push(elementSpan.textContent);

            // essa parte é para deixar display none se os elementos escolhidos aqui 'arrayElementClick' nao corresponder com os spans 'arrayAllTextSpan'
            if(j === containerSpan.children.length - 1){
              let countIfInclude = 0;
              valueForDeleteParentSpan = false;

              arrayAllTextSpan.forEach(textSpan => {
                if(arrayElementClick.includes(textSpan)){
                  countIfInclude++;
                  
                  if(countIfInclude >= arrayElementClick.length){
                    valueForDeleteParentSpan = true;
                    countIfInclude = 0;
                  }
                }
              })

              arrayAllTextSpan = [];

              if (!valueForDeleteParentSpan) {
                elementContainerMainChilgrenDelete.push(element);
          
                element.style.display = 'none';

                valueForDeleteParentSpan = true;
              }
            }
          }

          // essa parte é para colocar display = none; nó container main se nenhum dos filhos dele estiver 'none'
          if(element.style.display === 'none') {
            inicioForCheckDisplay++;
          }

          if(containerMain.children.length === inicioForCheckDisplay){
            elementContainerMainDelete.push(containerMain.parentElement);

            containerMain.parentElement.style.display = 'none';
          }
        }
        inicioForCheckDisplay = 0;
      });
    }

    if(element.style.borderColor === "transparent"){
      element.style.color = "#98aaec";
      element.style.borderColor = "#98aaec";
      element.style.background = "transparent";
      
    }else{
      element.style.color = "#FFF";
      element.style.borderColor = "transparent";
      element.style.background = "rgb(50 85 226)";
    }
  }
}
// END

const containerSvgTickets = document.querySelectorAll('.container-svg-ticket');

containerSvgTickets.forEach(containerSvgTicket => {
  const spanMovieTime = containerSvgTicket.querySelector('.span-movie-times');
  const spanComprar = containerSvgTicket.querySelector('.span-comprar');
  
  let timeoutEnter;
  let timeoutLeave;

  if(spanMovieTime){
    const mouseEnterContainerSvgTicket = () => {
      clearTimeout(timeoutEnter);
      clearTimeout(timeoutLeave);
      
      timeoutEnter = setTimeout(() => {
        spanMovieTime.style.top = "18px";
        // spanComprar.style.top = "5px";
      }, 10);
      
      timeoutLeave = setTimeout(() => {
        spanComprar.style.top = "5px";
        spanMovieTime.style.display = "none";
      }, 30);

      spanComprar.style.display = "block";
    }

    const mouseLeaveContainerSvgTicket = () => {
      clearTimeout(timeoutEnter);
      clearTimeout(timeoutLeave);
      
      timeoutEnter = setTimeout(() => {
        spanComprar.style.top = "-8px";
      }, 10);

      timeoutLeave = setTimeout(() => {
        spanMovieTime.style.top = "5px";
        spanComprar.style.display = "none";
      }, 30);

      spanMovieTime.style.display = "block";
    }
    containerSvgTicket.addEventListener('mouseenter', mouseEnterContainerSvgTicket);
    containerSvgTicket.addEventListener('mouseleave', mouseLeaveContainerSvgTicket);
  }

  // containerSvgTicket.removeEventListener('mouseenter', mouseEnterContainerSvgTicket);
  // containerSvgTicket.removeEventListener('mouseleave', mouseLeaveContainerSvgTicket);
});

const containerTelasGigantesDublado = document.querySelectorAll('.container-telasgigantesplg-dublado');

if(containerTelasGigantesDublado){
  containerTelasGigantesDublado.forEach((el) => {
    if(el.clientHeight == 0){
      el.remove();
    }
  });
}

