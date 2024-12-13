"use strict"

let ponteiroHoras = document.querySelector('.ponteiroHoras')
let ponteiroMinutos = document.querySelector('.ponteiroMinutos')
let ponteiroSegundos =  document.querySelector('.ponteiroSegundos')
let segundo = 0
let minuto = 0
let hora = 0
let rotaçãoPonteiroHora = hora
let rotaçãoPonteiroMinuto = minuto
let rotaçãoPonteiroSegundo = segundo

function setarPonteiros() {
    ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`;
    ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
    ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
}

/* 60 segundos = 1 minutos
3.600 segundos = 1 hora */


function começarRológio() {


}

começarRológio()