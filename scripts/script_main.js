"use strict"

const mostradorRelógio = document.querySelector('.mostradorRelógio')

for (let countHoras = 1; countHoras < 7; countHoras++) {
    const traçoHorasGerenciador = document.createElement("section")
    traçoHorasGerenciador.setAttribute('class', 'traço')
    traçoHorasGerenciador.setAttribute('id', `h${countHoras}`)

    for (let countHoraTraço = 1; countHoraTraço < 3; countHoraTraço++) {
        const traçoHora = document.createElement('div')
        traçoHora.setAttribute('class', 'traçoHora')
        traçoHorasGerenciador.appendChild(traçoHora)
    }

    mostradorRelógio.lastElementChild.before(traçoHorasGerenciador)
}