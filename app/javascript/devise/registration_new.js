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

import cep from 'cep-promise'

document.addEventListener('DOMContentLoaded', function() {
  const buttonRedirect = document.getElementById('redirectButton');
  const inputCep = document.getElementById('user_additional_info_user_attributes_cep');

  const inputLogradouro = document.querySelector('.input-logradouro');

  const spanCepError = document.querySelector('.span-error-cep');
  const svgSortUp = document.querySelector('.svg-sort-up-new-user');

  let cepInvalid = false;
  let onlyGray = false;

  const updateInputField = (inputElement, value) => {
    inputElement.value = value;
    inputElement.style.cursor = 'not-allowed';
    inputElement.readOnly = true;
    inputElement.style.border = "none";
    inputElement.style.borderLeft = "none";
  }

  buttonRedirect.addEventListener('click', () => {
    cep(inputCep.value)
    .then((resp) => {
      const inputBairro = document.querySelector('.input-bairro');
      const inputCidade = document.querySelector('.input-cidade');
      const inputEstado = document.querySelector('.input-estado');
      cepInvalid = false;
      onlyGray = true;

      updateInputField(inputLogradouro, resp.street);
      updateInputField(inputBairro, resp.neighborhood);
      updateInputField(inputCidade, resp.city);
      updateInputField(inputEstado, resp.state);
    })  
    .catch(() => {
      const containerMainCep = document.querySelector('.container-cep-custom');
      containerMainCep.style.marginBottom = "25px";

      cepInvalid = true;
      spanCepError.style.display = "flex";
      svgSortUp.style.display = "flex";
      inputCep.style.border = "1px solid rgb(217, 83, 79)";
      inputCep.style.borderLeft = "4px solid rgb(217 83 79)";
    })
  });

  inputCep.addEventListener('blur', () => {
    inputCep.style.border = "1px solid #bdbdbd";
    inputCep.style.borderLeft = "4px solid #bdbdbd";
    cepInvalid = false;
  });

  inputCep.addEventListener('focus', () => {
    if(cepInvalid){
      inputCep.style.border = "1px solid rgb(217, 83, 79)";
      inputCep.style.borderLeft = "4px solid rgb(217 83 79)";
    }else{
      inputCep.style.border = "1px solid rgb(5 118 202)";
      inputCep.style.borderLeft = "4px solid rgb(5 118 202)";
    }
  });

  const containerButtonContinue = document.querySelector('.container-button');

  const recaptchaCallbackChangePassword = () => {
    if(containerButtonContinue){
      const buttonContinue = containerButtonContinue.firstChild;
      // buttonContinue.nextSibling.disabled = true;
      buttonContinue.nextSibling.style.pointerEvents = "visible";
      // buttonContinue.nextSibling.style.background = "rgb(52 120 193)";
      containerButtonContinue.style.background = "rgb(52 120 193)";
    }
  };

  window.recaptchaCallbackChangePassword = recaptchaCallbackChangePassword;

});

document.addEventListener('keydown', (e) => {
  const spanCepError = document.querySelector('.span-error-cep');
  const svgSortUp = document.querySelector('.svg-sort-up-new-user');
  const inputCep = document.getElementById('user_additional_info_user_attributes_cep');
  const containerMainCep = document.querySelector('.container-cep-custom');

  containerMainCep.style.marginBottom = "0px";
  spanCepError.style.display = "none";
  svgSortUp.style.display = "none";
  inputCep.style.border = "1px solid rgb(5 118 202)";
  inputCep.style.borderLeft = "4px solid rgb(5 118 202)";
  

  const insertValueInput = (inputElement) => {
    inputElement.style.cursor = 'auto';
    inputElement.disabled = false;
    inputElement.style.border = "1px solid #bdbdbd";
    inputElement.style.borderLeft = "4px solid #bdbdbd";
  }

  if(e.code == "Backspace"){
    
    const cepValue = inputCep.value;
    const numericCharacters = cepValue.replace(/[^0-9]/g, ''); // Remove todos os caracteres não numéricos

    const inputLogradouro = document.querySelector('.input-logradouro');
    const inputBairro = document.querySelector('.input-bairro');
    const inputEstado = document.querySelector('.input-estado');
    const inputCidade = document.querySelector('.input-cidade');

    if(numericCharacters.length <= 7){
      svgSortUp.style.display = "none";
      spanCepError.style.display = "none";

      insertValueInput(inputLogradouro);
      insertValueInput(inputBairro);
      insertValueInput(inputEstado);
      insertValueInput(inputCidade);
    }

    if(inputCep.value.length == 0){
      inputCep.style.border = "1px solid rgb(5 118 202)";
      inputCep.style.borderLeft = "4px solid rgb(5 118 202)";
      spanCepError.style.display = "none";
      svgSortUp.style.display = "none";
    }
  }
});

