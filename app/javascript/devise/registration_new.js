import { parseISO, lastDayOfMonth, eachDayOfInterval, format } from "date-fns";

const inputPassword = document.querySelector('.password');
const spanMinimumOneLowerCase = document.querySelector('.span-2');
const spanMinimumOneUpperCase = document.querySelector('.span-3');
const spanMinimumOneNumber = document.querySelector('.span-4');
const spanMinimumEightCharacter = document.querySelector('.span-5');
const regUppercase = /[A-Z]/
const regLowercase = /[a-z]/
const regNumber = /\d/

const functionGetClickKeyboard = (event) => {
  
  setTimeout(() => {
    const textInputPassword = event.target.value;
    
    if(regUppercase.test(textInputPassword)){
      spanMinimumOneLowerCase.style.color = '#00c300';
    }else{
      spanMinimumOneLowerCase.style.color = '#00000054';
    }

    if(regLowercase.test(textInputPassword)){
      spanMinimumOneUpperCase.style.color = '#00c300';
    }else{
      spanMinimumOneUpperCase.style.color = '#00000054';
    }

    if(regNumber.test(textInputPassword)){
      spanMinimumOneNumber.style.color = '#00c300';
    }else{
      spanMinimumOneNumber.style.color = '#00000054';
    }

    if(textInputPassword.length >= 8){
      spanMinimumEightCharacter.style.color = '#00c300';
    }else{
      spanMinimumEightCharacter.style.color = '#00000054';
    }
  }, 10);
}

inputPassword.addEventListener('keydown', functionGetClickKeyboard);

const selectBirthdayMonth = document.querySelector('.select-birthday-month');
const selectBirthday = document.querySelector('.select-birthday');

const changeSelectedBirthday = (e) => {
  const selectedMonth = e.target.value;
  console.log(selectedMonth);
  

   // Obtenha o ano atual
  const currentYear = new Date().getFullYear();
   
  // Crie uma string no formato "YYYY-MM" para representar o mês selecionado
  const selectedMonthYear = `${currentYear}-${selectedMonth.padStart(2, '0')}`;
  // esse 'padStart' vai colocar a esquerda da string 0 se a string for menor que 2, se for "1" vai ficar "01"
  
  // Parse a string do formato "YYYY-MM" para um objeto de data
  const firstDayOfMonth = parseISO(`${selectedMonthYear}-01`);

  // Obter o último dia do mês
  const lastDay = lastDayOfMonth(firstDayOfMonth);
   
  // Obter todos os dias do intervalo entre o primeiro e o último dia do mês
  const allDays = eachDayOfInterval({ start: firstDayOfMonth, end: lastDay });
 
  // Formatar os dias se necessário (opcional)
  const formattedDays = allDays.map(day => format(day, 'dd'));

  formattedDays.forEach((day) => {
    const optionDay = document.createElement("option");
    optionDay.text = day
    selectBirthday.appendChild(optionDay);
  });
}

selectBirthdayMonth.addEventListener('change', changeSelectedBirthday);
