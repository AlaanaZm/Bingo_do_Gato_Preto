var valor = []

var B = []
var I = []
var N = []
var G = []
var O = []
var comecar = false




function load() {
    escolher()
}


function guardar() {
    
    comecar = true
    document.getElementById("terminar").style.display = "block"
    document.getElementById("numsorteado").style.display = "block"
    document.getElementById("comecar").style.display = "none"
    document.getElementById("escolher").style.display = "none"
    document.getElementById("escolhacartela").style.display = "none"
    document.getElementById("sortear").style.display = "block"
    
    document.getElementById('player').play()
  

}





function sortear() {

    let max = 75



    
    if (valor.length == max) {

        alert("Fim do jogo!")
        limpar()
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
    valor = []
    comecar = false
    document.getElementById("terminar").style.display = "none"
    document.getElementById("numsorteado").style.display = "none"
    document.getElementById("comecar").style.display = "block"
    document.getElementById("escolher").style.display = "block"
    document.getElementById("escolhacartela").style.display = "block"
    document.getElementById("sortear").style.display = "none"
    document.getElementById("result").innerHTML = ""
    document.getElementById("num").innerHTML = ""

    let limpar = document.getElementsByTagName("td")

    for (let i = 0; i < limpar.length; i++) {

        limpar[i].style.backgroundColor = "blueviolet"

    }

}



function selecionar(x) {

    if (comecar == true) {

        if (x.style.backgroundColor == "black" || x.style.backgroundColor == "") {

            x.style.backgroundColor = "blueviolet"
        }

        else {

            x.style.backgroundColor = "black"
        }
    }

}

function onOver(x) {
    if (comecar == true) {
        x.style.cursor = "pointer"
        if (x.style.backgroundColor != "black") {
            x.style.backgroundColor = "#D3A3E0"
        }
    }
}

function onOut(x) {
    if (comecar == true) {
        x.style.cursor = "default"
        if (x.style.backgroundColor != "black") {
            x.style.backgroundColor = "blueviolet"
        }
    }
}

