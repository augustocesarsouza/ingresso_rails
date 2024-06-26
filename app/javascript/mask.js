import Inputmask from "inputmask";

const element_phone = document.getElementsByClassName("mask-phone");
const im_phone = new Inputmask("(99) 999999999");
im_phone.mask(element_phone);

const element_cpf = document.getElementsByClassName("mask-cpf");
const im_cpf = new Inputmask("999.999.999-99");
im_cpf.mask(element_cpf);

const element_cep = document.getElementsByClassName("mask-cep");
const im_cep = new Inputmask("99999-999");
im_cep.mask(element_cep);