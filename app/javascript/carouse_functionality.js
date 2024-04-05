
document.addEventListener("DOMContentLoaded", () => {
  const scrollElement = document.querySelector(".carousel-custom");

  const containerLeft = document.querySelector('.container-arrow-left'); 
  const containerRight = document.querySelector('.container-arrow-right'); 
  
  const buttonLeft = document.querySelector('.i-arrow-custom-left'); 
  const buttonRight = document.querySelector('.i-arrow-custom-right'); 
  
  const description = document.getElementById('description');
  const maxLength = 195;
  
  if(description && description.textContent && description.textContent.length > maxLength){
    description.textContent = description.textContent.substring(0, maxLength) + '...';
  }
  
  function scrollLeft(){
    scrollElement.scrollLeft -= 600;
  }
  
  function scrollRight(){
    scrollElement.scrollLeft += 600;
  }
  
  function checkScrollAddOrSubtract(params) {
    setTimeout(() => {
      verificIfScrollGreaterThan400();
    }, 600);
  }

  if(buttonLeft){
    buttonLeft.addEventListener("click", () => {
      scrollLeft();
      
      checkScrollAddOrSubtract();
    });  
  }

  if(buttonRight){
    buttonRight.addEventListener("click", () => {
      scrollRight();
      
      checkScrollAddOrSubtract();
    });
  }
  
  function verificIfScrollGreaterThan400() {
    
    if(scrollElement.scrollLeft > 0){ 
      containerLeft.style.display = 'flex';
    } else {
      containerLeft.style.display = 'none';
    }
  }

  if(scrollElement){
    scrollElement.addEventListener('scroll', () => {
      if(scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth){
        if(containerRight){
          containerRight.style.display = 'none';
        }
      }else{
        if(containerRight){
          containerRight.style.display = 'flex';
        }
      }
    });
  }
  
  window.addEventListener('resize', () => {
    //Cuidado isso aqui consome memoria ram, e usa muita CPU
    if(scrollElement && scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth){
      if(containerRight){
        containerRight.style.display = 'none';
      }
    }else{
      if(containerRight){
        containerRight.style.display = 'flex';
      }
    }
  });
});
