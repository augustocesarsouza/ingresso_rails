const description = document.querySelector('.span-description-chose-movie-theater');
const maxLength = 100;

if(description && description.textContent && description.textContent.length > maxLength){
  description.textContent = description.textContent.substring(0, maxLength) + '...';
}

const liChoseSessions = document.querySelector(".li-chose-sessions");
const liChoseAbountTheFilm = document.querySelector(".li-chose-aboutthefilm");

const clickFirstLi = () => {
  liChoseSessions.style.color = "#fff";
  liChoseSessions.style.borderBottom = "3px solid rgb(50 85 226)";
  liChoseSessions.style.fontWeight = "500";
  liChoseSessions.style.fontSize = "21px";

  liChoseAbountTheFilm.style.color = "rgb(173 182 194)";
  liChoseAbountTheFilm.style.borderBottom = "2px solid rgb(80 98 122)";
  liChoseAbountTheFilm.style.fontWeight = "400";
  liChoseAbountTheFilm.style.fontSize = "19px";
}

const clickSecondLi = () => {
  liChoseSessions.style.color = "rgb(173 182 194)";
  liChoseSessions.style.borderBottom = "2px solid rgb(80 98 122)";
  liChoseSessions.style.fontWeight = "400";
  liChoseSessions.style.fontSize = "19px";

  liChoseAbountTheFilm.style.color = "#fff";
  liChoseAbountTheFilm.style.borderBottom = "3px solid rgb(50 85 226)";
  liChoseAbountTheFilm.style.fontWeight = "500";
  liChoseAbountTheFilm.style.fontSize = "21px";
}

if(window.location.pathname === "/chose_movie_theater"){
  liChoseSessions.addEventListener("click", clickFirstLi);
  liChoseAbountTheFilm.addEventListener("click", clickSecondLi);
}else if(window.location.pathname !== "/chose_movie_theater"){
  liChoseSessions.removeEventListener("click", clickFirstLi);
  liChoseAbountTheFilm.removeEventListener("click", clickSecondLi);
}