document.addEventListener("DOMContentLoaded", () => {
  if(window.location.pathname == "/chose_seats_and_more"){
    const containerSeatsChoseAndMore1 = document.querySelector(".container-seats-chose-seats-and-more-1");
    const containerSeatsChoseAndMore2 = document.querySelector(".container-seats-chose-seats-and-more-2");
    
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let seatsMoveX = 0;
    let seatsMoveY = 0;
    let valueForScale = 0;
    let valueForXandY = 100;
    const valueToSumAndSubtractXRef = 0.7;
    const valueToSumAndSubtractYRef = 0.7;

    containerSeatsChoseAndMore1.addEventListener("mousedown", (e) => {
      lastX = e.clientX;
      
      isDragging = true;
    });

    containerSeatsChoseAndMore1.addEventListener("mouseup", (e) => {
      isDragging = false;

      if(valueForScale === 0){
        seatsMoveX = 0;
        seatsMoveY = 0;
      }
      
      containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, ${seatsMoveY}px) scale(1.${valueForScale})`;
    });

    containerSeatsChoseAndMore1.addEventListener("mousemove", (e) => {
      if(isDragging){
        if(e.clientX < lastX){
          if(seatsMoveX <= -valueForXandY){
            seatsMoveX = seatsMoveX;
          }else {
            seatsMoveX = seatsMoveX - valueToSumAndSubtractXRef;
          }

          lastX = e.clientX;
        }else if(e.clientX > lastX){
          if(seatsMoveX <= valueForXandY){
            seatsMoveX = seatsMoveX + valueToSumAndSubtractXRef;
          }else {
            seatsMoveX = seatsMoveX;
          }

          lastX = e.clientX;
        }

        if(e.clientY < lastY){
          if(seatsMoveY <= -valueForXandY){
            seatsMoveY = seatsMoveY;
          }else {
            seatsMoveY = seatsMoveY - valueToSumAndSubtractYRef;
          }

          lastY = e.clientY;
        }else if(e.clientY > lastY){
          if(seatsMoveY >= valueForXandY){
            seatsMoveY = seatsMoveY;
          }else {
            seatsMoveY = seatsMoveY + valueToSumAndSubtractYRef;
          }

          lastY = e.clientY;
        }

        containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, ${seatsMoveY}px) scale(1.${valueForScale})`;
      }
    });
    
    containerSeatsChoseAndMore1.addEventListener("wheel", (e) => {
      e.preventDefault();

      if(e.deltaY > 0){
        // Scroll down
        if(valueForScale >= 1){
          valueForScale -= 16;
        }
        containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, ${seatsMoveY}px) scale(1.${valueForScale})`;
      }else if(e.deltaY < 0) {
        // Scroll up
        if(valueForScale < 96){
          valueForScale += 16;
        }
        containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, ${seatsMoveY}px) scale(1.${valueForScale})`;
      }

      if(valueForScale == 0){
        valueForXandY = 100;
      } else if(valueForScale === 32){
        valueForXandY = 150;
      }else if(valueForScale === 48){
        valueForXandY = 220;
      }else if(valueForScale === 64){
        valueForXandY = 300;
      }else if(valueForScale === 80){
        valueForXandY = 350;
      }else if(valueForScale === 96){
        valueForXandY = 410;
      }

      const rect = containerSeatsChoseAndMore1.getBoundingClientRect();
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const offsetX = (rect.left + centerX) - e.clientX;
      const offsetY = (rect.top + centerY) - e.clientY;

      if(valueForScale === 0){
        seatsMoveX = 0;
        seatsMoveY = 0;
      }else {
        seatsMoveX = offsetX * (valueForScale / 100);
        seatsMoveY = offsetY * (valueForScale / 100);
      }

      containerSeatsChoseAndMore2.style.transform = `translate(${seatsMoveX}px, ${seatsMoveY}px) scale(1.${valueForScale})`;
    });
  }
});
