const containerChoseRegion = document.querySelector(".container-chose-region");
const containerChoseRegionAfterClicked = document.querySelector(".container-chose-region-after-clicked");
const svgSortUpChoseRegion = document.querySelector(".svg-sort-up-chose-region");
const containerNavUlLiMain = document.querySelector(".nav-ul-li-main");

const containerSelectState = document.querySelector(".container-select-state");
const selectStateChoseRegion = document.querySelector(".select-state-chose-region");

const selectCityChoseRegion = document.querySelector(".select-city-chose-region");
const buttonChangeCityButton = document.querySelector(".change-city-button"); 

const containerLastPlacesAll = document.querySelector(".container-last-places-all");
const paragraphRegionChose = document.querySelector(".paragraph-region-chose");

let arrayCity = []; // arrayCity.push("Campinas");

if(containerChoseRegionAfterClicked){
  containerChoseRegionAfterClicked.remove();
}

if(svgSortUpChoseRegion){
  svgSortUpChoseRegion.remove();
}

let alreadyClickedContainerChoseRegion = false;

const clickContainerChoseRegion = () => {
  if(alreadyClickedContainerChoseRegion){
    if(containerChoseRegionAfterClicked){
      containerChoseRegionAfterClicked.remove();
    }

    if(svgSortUpChoseRegion){
      svgSortUpChoseRegion.remove();
    }

    alreadyClickedContainerChoseRegion = false;
  }else {
    containerNavUlLiMain.appendChild(containerChoseRegionAfterClicked);
    containerNavUlLiMain.appendChild(svgSortUpChoseRegion);
    alreadyClickedContainerChoseRegion = true;
  }
}

const clickContainerLastPlace = (e) => {
  paragraphRegionChose.textContent = e.target.textContent;
}

const clickButtonChangeCity = () => {
  const getSelectCityChose = document.querySelector(".select-city-chose-region");
  const svgCircleForLastPlace = document.querySelector(".svg-circle-for-last-place");
  const containerRightChoseRegionAfterClocked = document.querySelector(".container-right-chose-region-after-clicked");

  if(getSelectCityChose){
    if(!arrayCity.includes(getSelectCityChose.value)){
      arrayCity.push(getSelectCityChose.value);
    }
    
    arrayCity.forEach((city) => {
      const containerLastPlaces = document.createElement("div");
      containerLastPlaces.classList.add("container-last-places");
      
      const svgCircleForLastPlaceClone = svgCircleForLastPlace.cloneNode(true);
      containerLastPlaces.appendChild(svgCircleForLastPlaceClone);

      const spanCityName = document.createElement("span");
      spanCityName.textContent = city;
      containerLastPlaces.appendChild(spanCityName);

      containerRightChoseRegionAfterClocked.appendChild(containerLastPlaces);
    });
  }

  const containerLastPlaces = document.querySelectorAll(".container-last-places");

  containerLastPlaces.forEach((el) => {
    el.addEventListener("click", clickContainerLastPlace);
  });
}

const clickContainerState = () => {
  let stateValue = selectStateChoseRegion.value;

  const getAllOptionAll = selectCityChoseRegion.querySelectorAll(".option-city");
  
  if(getAllOptionAll !== null && getAllOptionAll.length > 0) {
    getAllOptionAll.forEach((opt) => {
      opt.remove();
    });
  }

  const insertOption = (name, selectCityChoseRegion) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    option.classList.add("option-city");
    selectCityChoseRegion.appendChild(option);
  }

  if(stateValue === "Acre"){
    insertOption("Rio Branco",selectCityChoseRegion);
  }

  if(stateValue === "Mato Grosso do Sul"){
    insertOption("Campo Grande", selectCityChoseRegion);
    insertOption("Dourados", selectCityChoseRegion);
    insertOption("Três Lagoas", selectCityChoseRegion);
  }

  if(stateValue === "Mato Grosso"){
    insertOption("Cuiabá", selectCityChoseRegion);
    insertOption("SINOP", selectCityChoseRegion);
    insertOption("Varzea Grande", selectCityChoseRegion);
  }

  if(stateValue === "São Paulo"){
    insertOption("Campinas", selectCityChoseRegion);
    insertOption("Bauru", selectCityChoseRegion);
    insertOption("Araraquara", selectCityChoseRegion);
    insertOption("Franca", selectCityChoseRegion);
    insertOption("Cotia", selectCityChoseRegion);
  }

  if(stateValue === "Alagoas"){
    insertOption("Arapiraca", selectCityChoseRegion);
    insertOption("Maceió", selectCityChoseRegion);
  }

  if(stateValue === "Amazonas"){
    insertOption("Manaus", selectCityChoseRegion);
  }
}

containerChoseRegion.addEventListener("click", clickContainerChoseRegion);
containerSelectState.addEventListener("click", clickContainerState);
buttonChangeCityButton.addEventListener("click", clickButtonChangeCity);

if(window.location.pathname === "/chose_seats_and_more"){
  containerChoseRegion.removeAttribute("click", clickContainerChoseRegion);
  containerSelectState.removeAttribute("click", clickContainerState);
  buttonChangeCityButton.removeAttribute("click", clickButtonChangeCity);
}

