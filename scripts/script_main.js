"use strict"

const mostradorRelógio = document.querySelector('.mostradorRelógio')
let descriçãoHorasABBR = document.querySelector('abbr')

for (let countHoras = 1; countHoras < 13; countHoras++) {
    const traçoHorasGerenciador = document.createElement("section")
    traçoHorasGerenciador.setAttribute('class', 'traço')    
    if (countHoras < 7) {
        traçoHorasGerenciador.setAttribute('id', `h${countHoras}`)
    } else {
        traçoHorasGerenciador.setAttribute('id', `meiaH${countHoras - 6}`)
    }

    for (let countHoraTraço = 1; countHoraTraço < 3; countHoraTraço++) {
        const traçoHora = document.createElement('div')
        if (countHoras < 7) {
            traçoHora.setAttribute('class', 'traçoHora')
        } else {
            traçoHora.setAttribute('class', 'traçoMeiaHora')
        }
        traçoHorasGerenciador.appendChild(traçoHora)
    }

    mostradorRelógio.firstChild.before(traçoHorasGerenciador)
}

setInterval(()=>{
    let data = new Date()
    let segundo = data.getSeconds()
    let minuto = data.getMinutes()
    let hora = data.getHours()

    let ponteiroSegundo = document.querySelector('#segundos')
    let ponteiroMinutos = document.querySelector("#minutos")  
    let ponteiroHora = document.querySelector("#horas")

    ponteiroSegundo.style.transform = `rotate(${(360*segundo)/60}deg)`
    ponteiroMinutos.style.transform = `rotate(${(360*hora/12) + ((30 * minuto)/60)}deg)`
    ponteiroHora.style.transform = `rotate(${360*hora/12}deg)`

    descriçãoHorasABBR.title = `${hora < 10 ? `0${hora}` : hora} : ${minuto < 10 ? `0${minuto}` : minuto} : ${segundo < 10 ? `0${segundo}` : segundo}`

}, 1000)