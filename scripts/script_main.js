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
3.600 segundos = 1 hora*/

function rodarPonteiroSegundos() {
    let abbrÚnico = document.querySelector('abbr')
    if (rotaçãoPonteiroSegundo == 360) {
        rotaçãoPonteiroSegundo = 0
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    } else {
        rotaçãoPonteiroSegundo += 6
        segundo++
        ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;
    }

    if (segundo == 60) {
        segundo=0
        rodarPonteiroMinutos()        
    }
    
    if (segundo < 10) {
        if (minuto < 10) {
            abbrÚnico.setAttribute('title', `0${minuto} : 0${segundo}`)
        } else {
            abbrÚnico.setAttribute('title', `${minuto} : 0${segundo}`)
        }
    } else {
        if (minuto < 10) {
            abbrÚnico.setAttribute('title', `0${minuto} : ${segundo}`)
        } else {
            abbrÚnico.setAttribute('title', `${minuto} : ${segundo}`)
        }
    }
}

function rodarPonteiroMinutos() {
    if (rotaçãoPonteiroMinuto == 360) {
        rotaçãoPonteiroMinuto = 0
        ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
    } else {
        rotaçãoPonteiroMinuto += 0.5 // 1 minuto = 0.5deg
        minuto++
        ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`;
    }

    if (minuto == 60) {
        minuto=0
        hora++
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


setInterval(rodarPonteiroSegundos, 1000)