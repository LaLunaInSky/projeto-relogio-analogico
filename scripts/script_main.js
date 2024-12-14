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

function rodarPonteiros() {
    let date= new Date()
    let abbrÚnico = document.querySelector('abbr')

    segundo =  date.getSeconds()
    minuto = date.getMinutes()
    hora = date.getHours()
    
    rotaçãoPonteiroSegundo = (segundo * 360) / 60
    ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;

    rotaçãoPonteiroHora = (hora * 30)
    ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`

    rotaçãoPonteiroMinuto = (minuto * 0.5) + rotaçãoPonteiroHora
    ponteiroMinutos.style.rotate = `${rotaçãoPonteiroMinuto}deg`

    if (segundo < 10) {
        if (minuto < 10) {
            if (hora < 10){
                abbrÚnico.setAttribute('title', `0${hora} : 0${minuto} : 0${segundo}`)
            } else {
                abbrÚnico.setAttribute('title', `${hora} : 0${minuto} : 0${segundo}`)
            }
        } else {
            if (hora < 10) {
                abbrÚnico.setAttribute('title', `0${hora} : ${minuto} : 0${segundo}`)
            } else {
                abbrÚnico.setAttribute('title', `${hora} : ${minuto} : 0${segundo}`)
            }
        }
    } else {
        if (minuto < 10) {
            if (hora < 10) {
                abbrÚnico.setAttribute('title', `0${hora} : 0${minuto} : ${segundo}`)                
            } else {
                abbrÚnico.setAttribute('title', `${hora} : 0${minuto} : ${segundo}`)
            }
        } else {
            if (hora < 10) {
                abbrÚnico.setAttribute('title', `0${hora} : ${minuto} : ${segundo}`)
            } else {
                abbrÚnico.setAttribute('title', `${hora} : ${minuto} : ${segundo}`)
            }
        }
    }

    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
}


setInterval(rodarPonteiros, 1000)