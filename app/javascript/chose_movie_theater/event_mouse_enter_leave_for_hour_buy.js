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
});