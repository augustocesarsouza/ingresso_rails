const containerSvgHeadUserChose = document.querySelector(".div-svg-head-user-chose");

let alreadyClickedDivUser = false;
let mouseOverContainerLoginRegisteredAndHeadUser = false;

const mouseOverContainerLoginRegister = () => {
  mouseOverContainerLoginRegisteredAndHeadUser = true;
}

const mouseOutContainerLoginRegister = () => {
  mouseOverContainerLoginRegisteredAndHeadUser = false;
}

const clickDocument = () => {
  if(!mouseOverContainerLoginRegisteredAndHeadUser){
    const containerLoginLogoutAlreadyCreated = document.querySelector(".container-login-logout-floating");

    if(containerLoginLogoutAlreadyCreated){
      containerLoginLogoutAlreadyCreated.remove();

      alreadyClickedDivUser = false;
    }
  }
}

const clickEventContainerSvgHeadUserChose = (e) => {
  const containerSvgUserLoginLogout = e.srcElement.parentElement.parentElement;

  if(alreadyClickedDivUser){
    const containerLoginLogoutAlreadyCreated = document.querySelector(".container-login-logout-floating");
    containerLoginLogoutAlreadyCreated.remove();

    alreadyClickedDivUser = false;
  }else {
    const containerLoginLogout = document.createElement("div");
    containerLoginLogout.classList.add("container-login-logout-floating");

    const spanNameUser = document.querySelector(".span-name-user-logged-chose-seats");
  
    const spanHelloGuest = document.createElement("span");
    spanHelloGuest.classList.add("span-hello-guest");
    spanHelloGuest.textContent = spanNameUser.textContent;
  
    const spanLoginRegister = document.createElement("span");
    spanLoginRegister.classList.add("span-login-register");
    spanLoginRegister.textContent = "Sair";
  
    containerLoginLogout.appendChild(spanHelloGuest);
    containerLoginLogout.appendChild(spanLoginRegister);
    containerSvgUserLoginLogout.appendChild(containerLoginLogout);

    containerLoginLogout.addEventListener("mouseover", mouseOverContainerLoginRegister);
    containerLoginLogout.addEventListener("mouseout", mouseOutContainerLoginRegister);

    alreadyClickedDivUser = true;
  }
}

if(window.location.pathname === "/chose_seats_and_more"){
  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.addEventListener("click", clickEventContainerSvgHeadUserChose);
  }

  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.addEventListener("mouseover", mouseOverContainerLoginRegister);
  }

  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.addEventListener("mouseout", mouseOutContainerLoginRegister);
  }

  document.addEventListener("click", clickDocument);
};

if(window.location.pathname !== "/chose_seats_and_more"){
  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.removeEventListener("click", clickEventContainerSvgHeadUserChose);
  }

  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.removeEventListener("mouseover", mouseOverContainerLoginRegister);
  }
  
  if(containerSvgHeadUserChose){
    containerSvgHeadUserChose.removeEventListener("mouseout", mouseOutContainerLoginRegister);
  }

  document.removeEventListener("click", clickDocument);
};