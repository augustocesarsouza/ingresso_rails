const divLoginOrRegister = document.querySelector('.container-login-logout');
const containerRegisterLogin = document.querySelector('.container-choose-register-login');

containerRegisterLogin.style.display = 'none';

const CaptureEventClickLoginOrRegister = () => {
  if(containerRegisterLogin.style.display === 'none') {
    containerRegisterLogin.style.display = 'flex';
  }else{
    containerRegisterLogin.style.display = 'none';
  }

  if(divLoginOrRegister){
    divLoginOrRegister.removeEventListener('click', CaptureEventClickLoginOrRegister);
  }
}

if(divLoginOrRegister){
  divLoginOrRegister.addEventListener('click', CaptureEventClickLoginOrRegister);
}

const spanUserLogged = document.querySelector('.span-user-loggedin');

if(spanUserLogged == null) return;

const primeiraStringCompleta = spanUserLogged.textContent;

const indicePrimeiraEspaço = primeiraStringCompleta.indexOf(' ');
const stringSemSobreNome = primeiraStringCompleta.substring(0, indicePrimeiraEspaço + 1);

const indiceDaPrimeiraVirgula = stringSemSobreNome.indexOf(',');

const newTexto = stringSemSobreNome.substring(0, indiceDaPrimeiraVirgula + 1) + ' ' + stringSemSobreNome.substring(indiceDaPrimeiraVirgula + 1);

spanUserLogged.textContent = newTexto

//primeiraStringCompleta = Olá,augusto cesar
//stringSemSobreNome = Olá,augusto

const divUserLoggedin = document.querySelector('.container-user-loggedin');
const containerLoggout = document.querySelector('.container-loggout');

containerLoggout.style.display = 'none';

const CaptureEventClickLogOut = () => {
  if(containerLoggout.style.display === 'none') {
    containerLoggout.style.display = 'flex';
  }else{
    containerLoggout.style.display = 'none';
  }
}

if(divUserLoggedin){
  divUserLoggedin.addEventListener('click', CaptureEventClickLogOut);
}

if(window.location.pathname === "/chose_seats_and_more"){
  if(divUserLoggedin){
    divUserLoggedin.removeEventListener('click', CaptureEventClickLogOut);
  }
}