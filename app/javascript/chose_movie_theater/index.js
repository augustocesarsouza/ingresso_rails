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