
document.addEventListener("DOMContentLoaded", () => {
  const containerSvgTicketHourBuy = document.querySelectorAll(".container-svg-ticket");
  
  if(containerSvgTicketHourBuy){
    containerSvgTicketHourBuy.forEach((elementHourBuy, index) => {
      elementHourBuy.addEventListener('click', () => {
        const route = elementHourBuy.getAttribute('data-route');
        // Faça o que for necessário com o índice e a rota aqui

        window.location.href = route; // Exemplo: Redirecionamento para a rota
      });
    });
  }
  if(window.location.pathname == "/chose_seats_and_more"){
    const containerDashboardMain = document.querySelector(".dashboard-main");
    const containerNav = document.querySelector(".nav-custom");
    const containerFooter = document.querySelector(".bg-dark");
    

    containerDashboardMain.style.display = 'none';
    containerNav.style.display = 'none';
    containerFooter.style.display = 'none';
  }
});

