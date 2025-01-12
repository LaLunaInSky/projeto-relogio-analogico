"use strict"

const mostradorRelógio = document.querySelector('.mostradorRelógio')

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

    mostradorRelógio.lastElementChild.before(traçoHorasGerenciador)
}