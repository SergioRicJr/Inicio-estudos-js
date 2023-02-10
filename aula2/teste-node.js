const nota1 = 7
const nota2 = 5
const nota3 = 4

const media = (nota1+nota2+nota3) / 3

if (media >= 5) {
    console.log(`O aluno foi aprovado, suas notas foram ${[nota1, nota2, nota3]} e sua média foi ${media.toFixed(2)}`)
} else if (media == 3){
    console.log("O aluno está de recuperação")
} else {
    console.log('o aluno foi reprovado')
}


var n = 2

switch (n) {
    case 1: 
        console.log("O valor é 1")
        break
    case 2:
        console.log("O valor é 2")
        break
    default:
        console.log("vc ta doido")
}


var data = new Date()
var hora = data.getHours()
var dia = data.getDay()

console.log(data)
console.log(hora)

var diasDaSemana = ['dom','seg', 'ter', 'qua', 'qui', 'sex', 'sab']
console.log(diasDaSemana[dia])

//outra forma de fazer

switch (dia){
    case 0: 
        console.log("domingo")
        break
    case 1:
        console.log("segunda")
        break
    case 2:
        console.log("terça")
        break
    case 3:
        console.log("quarta")
        break
    case 4:
        console.log("quinta")
        break
    case 5:
        console.log("sexta")
        break
    case 6:
        console.log("sabado")
        break
    default:
        console.log("NÃO É DIA NENHUM")
}

// 0-domingo, 1-segunda, 2-terça...

var dataManual = new Date() //Dá pra passar parametros e definir data, dia, hora...
console.log(dataManual)
console.log(dataManual.getUTCDate()) //DIA DO MES
console.log(dataManual.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_paulo'}))
var hora = dataManual.toLocaleTimeString('pt-BR', {timeZone: 'America/Sao_paulo'})
switch (hora) {
    case hora >=5 && hora <=12:
        console.log("bom dia")
        break
    case hora >18 && hora <5:
        console.log("boa noite")
}