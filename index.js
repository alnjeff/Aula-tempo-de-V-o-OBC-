let dataPartidaEntrada = prompt("Digite a data de partida (DD/MM/YYYY)")

let dataPartida = moment(dataPartidaEntrada, "DD/MM/YYYY")

let dataHoje = moment()

let diferencaData = dataHoje - dataPartida

let opcaoEscolha = prompt("Escolha como gostaria de exibir o tempo de partida \n 1 - Segundos \n 2 - minutos \n 3 - Horas \n 4 - Dia")

if(opcaoEscolha == "1" ){
    let segundosPartida =  Math.round(diferencaData / 1000 )
    alert("Tempo de vôo: " + segundosPartida + " segundos")
} else if(opcaoEscolha == "2"){
    let minutosPartida = Math.round( diferencaData / 1000 / 60)
    alert("Tempo de vôo :" + minutosPartida + "minutos" )
} else if(opcaoEscolha == "3" ){
    let horasPartida =  Math.round(diferencaData / 1000 / 3600 )
    alert("Tempo de vôo: " + horasPartida + " horas")
} else if(opcaoEscolha == "4"){
    let diasPartida = Math.round( diferencaData / 1000 / 3600 / 24)
    alert("Tempo de vôo :" + diasPartida + "dias" )
} else {
    alert("Opção invalida")
}