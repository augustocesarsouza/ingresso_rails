const description = document.querySelector('.span-description-chose-movie-theater');
const maxLength = 100;

if(description && description.textContent && description.textContent.length > maxLength){
  description.textContent = description.textContent.substring(0, maxLength) + '...';
}