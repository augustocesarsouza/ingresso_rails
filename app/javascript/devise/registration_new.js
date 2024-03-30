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

