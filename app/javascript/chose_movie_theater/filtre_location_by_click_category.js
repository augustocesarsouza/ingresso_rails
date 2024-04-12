// para excluir divs que estão apagadas que nao tem tamanho se não quando for filtrar vai dar error
const containerTelasGigantesDublado = document.querySelectorAll('.container-telasgigantesplg-dublado');

if(containerTelasGigantesDublado){
  containerTelasGigantesDublado.forEach((el) => {
    if(el.clientHeight == 0){
      el.remove();
    }
  });
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