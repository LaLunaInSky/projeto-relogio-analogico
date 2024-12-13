"use strict"

let ponteiroHoras = document.querySelector('.ponteiroHoras')
let ponteiroMinutos = document.querySelector('.ponteiroMinutos')
let ponteiroSegundos =  document.querySelector('.ponteiroSegundos')
let segundo = 1000
let minuto = 60000
let hora = 360000
let rotaçãoPonteiroHora = 0
let rotaçãoPonteiroMinuto = 0
let rotaçãoPonteiroSegundo = 0


ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`;
ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;


/* 60 segundos = 1 minutos
3.600 segundos = 1 hora*/

function rodarPonteiroSegundos() {
    if (rotaçãoPonteiroSegundo == 360) {
        rotaçãoPonteiroSegundo = 0
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    } else {
        rotaçãoPonteiroSegundo ++
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    }
}

function rodarPonteiroMinutos() {
    if (rotaçãoPonteiroMinuto == 360) {
        rotaçãoPonteiroMinuto = 0
        ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
    } else {
        rotaçãoPonteiroMinuto += 0.5 // 1 minuto = 0.5deg
        minuto ++
        ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
    }
}

function rodarPonteiroHoras() {
    if (rotaçãoPonteiroHora == 360) {
        rotaçãoPonteiroHora = 0
        ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`;
    } else {
        rotaçãoPonteiroHora += 30 // 1 hora = 30deg 
        ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`;
    }
}


setInterval(rodarPonteiroSegundos, 270)
setInterval(rodarPonteiroMinutos, 60000)
setInterval(rodarPonteiroHoras, 3600000)