"use strict"

let ponteiroHoras = document.querySelector('.ponteiroHoras')
let ponteiroMinutos = document.querySelector('.ponteiroMinutos')
let ponteiroSegundos =  document.querySelector('.ponteiroSegundos')
let segundo = 0
let minuto = 0
let hora = 0
let rotaçãoPonteiroHora = 0
let rotaçãoPonteiroMinuto = 0
let rotaçãoPonteiroSegundo = 0


ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`;
ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;


/* 60 segundos = 1 minutos
3.600 segundos = 1 hora
360/60= 6deg por segundo!*/

function rodarPonteiroSegundos() {
    if (rotaçãoPonteiroSegundo == 360) {
        rotaçãoPonteiroSegundo = 0
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    } else {
        rotaçãoPonteiroSegundo ++
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    }
}

setInterval(rodarPonteiroSegundos, 166)