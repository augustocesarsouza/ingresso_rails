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

if(inputPassword){
  inputPassword.addEventListener('keydown', functionGetClickKeyboard);
}

document.addEventListener('DOMContentLoaded', function() {
  const birthYear = document.getElementById("user_additional_info_user_attributes_birth_date_1i");
  const birthMonth = document.getElementById("user_additional_info_user_attributes_birth_date_2i");
  const birthDay = document.getElementById("user_additional_info_user_attributes_birth_date_3i");

  if(birthYear == null || birthMonth == null || birthDay == null) return;

  createOptionYearCustom(birthYear);

  createOptionMonthCustom(birthMonth);

  createOptionDayCustom(birthDay);

  birthMonth.addEventListener("change", function() {
    updateDays();
  });

  function updateDays() {
    var year = parseInt(birthYear.value);
    var month = parseInt(birthMonth.value);

    birthDay.innerHTML = '';

    var lastDayOfMonth = new Date(year, month, 0).getDate();
    
    for (var day = 1; day <= lastDayOfMonth; day++) {
      var option = document.createElement("option");
      option.text = day;
      option.value = day;
      birthDay.appendChild(option);
    }
  }
});

const createOptionYearCustom = (birthYear) => {
  const optionYear = document.createElement("option");
  optionYear.text = 'Year of Birth';
  optionYear.value = 0;
  optionYear.selected = true;

  birthYear.insertBefore(optionYear, birthYear.firstChild);
}

const createOptionMonthCustom = (birthMonth) => {
  const optionMonth = document.createElement("option");
  optionMonth.text = 'Month the of Birth';
  optionMonth.value = 0;
  optionMonth.selected = true;

  birthMonth.insertBefore(optionMonth, birthMonth.firstChild);
}

const createOptionDayCustom = (birthDay) => {
  const optionDay = document.createElement("option");
  optionDay.text = 'Day the of Birth';
  optionDay.value = 0;
  optionDay.selected = true;

  birthDay.insertBefore(optionDay, birthDay.firstChild);
}