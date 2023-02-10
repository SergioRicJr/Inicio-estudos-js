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

// 0-domingo, 1-segunda, 2-terça...



