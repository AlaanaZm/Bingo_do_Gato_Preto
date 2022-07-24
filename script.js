


var valor = []

var B = []
var I = []
var N = []
var G = []
var O = []



function load() {

    escolher()

}


function guardar() {

    document.getElementById("terminar").disabled = false
    document.getElementById("sortear").disabled = false
    document.getElementById("comecar").disabled = true
    document.getElementById("escolher").disabled = true
}





function sortear() {


    let max = 75

    if (valor.length == max) {

        alert("Fim do jogo!")

    }

    else {


        let numero_aleatorio = Math.ceil(Math.random() * max);


        if (valor.indexOf(numero_aleatorio) == -1) {

            valor.push(numero_aleatorio)

            let resultado_div = document.getElementById("result")
            let num = document.getElementById("num")
            num.innerHTML = numero_aleatorio
            resultado_div.innerHTML += `${numero_aleatorio} `
        }


        else {

            numero_aleatorio = Math.ceil(Math.random() * max);

            while (valor.indexOf(numero_aleatorio) != -1) {

                numero_aleatorio = Math.ceil(Math.random() * max);
            }

            valor.push(numero_aleatorio);

            resultado_div = document.getElementById("result")
            let num = document.getElementById("num")
            num.innerHTML = numero_aleatorio
            resultado_div.innerHTML += `${numero_aleatorio}  `

        }

    }

}


function escolher() {

    while (true) {

        let numero_aleatorio = Math.ceil(Math.random() * 15);

        if (B.indexOf(numero_aleatorio) == -1) {

            B.push(numero_aleatorio)
        }

        if (B.length == 5) {
            break
        }
    }

    let numeroB = document.getElementsByClassName("linhaB")

    for (let i = 0; i < B.length; i++) {

        numeroB[i].innerHTML = B[i]

    }

    B = []

    while (true) {

        let numero_aleatorio = Math.ceil(Math.random() * (30 - 16) + 16);

        if (I.indexOf(numero_aleatorio) == -1) {

            I.push(numero_aleatorio)
        }

        if (I.length == 5) {
            break
        }
    }

    let numeroI = document.getElementsByClassName("linhaI")

    for (let i = 0; i < I.length; i++) {

        numeroI[i].innerHTML = I[i]

    }

    I = []

    while (true) {

        let numero_aleatorio = Math.ceil(Math.random() * (45 - 31) + 31);

        if (N.indexOf(numero_aleatorio) == -1) {

            N.push(numero_aleatorio)
        }

        if (N.length == 4) {
            break
        }
    }


    let numeroN = document.getElementsByClassName("linhaN")

    for (let i = 0; i < 2; i++) {

        numeroN[i].innerHTML = N[i]

    }

    for (let i = 2; i < 4; i++) {

        numeroN[i + 1].innerHTML = N[i]

    }



    N = []

    while (true) {

        let numero_aleatorio = Math.ceil(Math.random() * (60 - 46) + 46);

        if (G.indexOf(numero_aleatorio) == -1) {

            G.push(numero_aleatorio)
        }

        if (G.length == 5) {
            break
        }
    }

    let numeroG = document.getElementsByClassName("linhaG")

    for (let i = 0; i < G.length; i++) {

        numeroG[i].innerHTML = G[i]

    }

    G = []

    while (true) {

        let numero_aleatorio = Math.ceil(Math.random() * (75 - 61) + 61);

        if (O.indexOf(numero_aleatorio) == -1) {

            O.push(numero_aleatorio)
        }

        if (O.length == 5) {
            break
        }
    }

    let numeroO = document.getElementsByClassName("linhaO")

    for (let i = 0; i < O.length; i++) {

        numeroO[i].innerHTML = O[i]

    }

    O = []

}

function limpar() {

    document.getElementById("terminar").disabled = true
    document.getElementById("sortear").disabled = true
    document.getElementById("comecar").disabled = false
    document.getElementById("escolher").disabled = false
    document.getElementById("result").innerHTML = ""
    document.getElementById("num").innerHTML = ""

    let limpar = document.getElementsByTagName("td")

    for (let i = 0; i < limpar.length; i++) {

        limpar[i].style.backgroundColor = "blueviolet"

    }

    valor = []
}



function selecionar(x) {


if (x.style.backgroundColor == "blueviolet" || x.style.backgroundColor == "") {

    x.style.backgroundColor = "#f5b3dc"
}

else {

    x.style.backgroundColor = "blueviolet"
}


}

function onOver(x) {
    x.style.cursor = "pointer"
}

function onOut(x) {
    x.style.cursor = "default"
}