"use strict"

function rodarPonteiros() {
    let ponteiroHoras = document.querySelector('.ponteiroHoras')
    let ponteiroMinutos = document.querySelector('.ponteiroMinutos')
    let ponteiroSegundos =  document.querySelector('.ponteiroSegundos')
    
    let date= new Date()
    let abbrÚnico = document.querySelector('abbr')

    let segundo =  date.getSeconds()
    let minuto = date.getMinutes()
    let hora = date.getHours()
    
    let rotaçãoPonteiroSegundo = (segundo * 360) / 60
    ponteiroSegundos.style.rotate = `${rotaçãoPonteiroSegundo}deg`;

    let rotaçãoPonteiroHora = (hora * 30)
    ponteiroHoras.style.rotate = `${rotaçãoPonteiroHora}deg`

    let rotaçãoPonteiroMinuto = (minuto * 0.5) + rotaçãoPonteiroHora
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
}

setInterval(rodarPonteiros, 1000)