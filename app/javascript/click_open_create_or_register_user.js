const divLoginOrRegister = document.querySelector('.container-login-logout');
const containerRegisterLogin = document.querySelector('.container-choose-register-login');

containerRegisterLogin.style.display = 'none';

const CaptureEventClickLoginOrRegister = () => {
  if(containerRegisterLogin.style.display === 'none') {
    containerRegisterLogin.style.display = 'flex';
  }else{
    containerRegisterLogin.style.display = 'none';
  }

  
}

divLoginOrRegister.addEventListener('click', CaptureEventClickLoginOrRegister);
