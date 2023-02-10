console.log('eae');

n1 = 6;
n2 = 5;
soma= n1*n2;

// soma = 'agr essa é a variavel'


console.log(soma);
console.log(typeof(soma));

// window.alert('vai explodir')
// window.confirm('vai querer entrar?')

var nome = window.prompt("digite seu nome: ")
// var idade = window.prompt("digite sua idade: ")
var mensagem = `Bem vindo ${nome}` //formatacao no js
console.log(mensagem)
window.alert(mensagem)

//necessario definir como tipo number nesse caso
//widow.prompt sempre retorna string
//casting ou parse == transformacao de tipo
//da pra deixar so number e ele se vira
//parseInt para ignorar a virgula, forçar
// var numero1 = Number.parseInt(window.prompt("digite o primeiro numero: "))
// var numero2 = Number.parseInt(window.prompt("Digite o segundo numero: "))
// var soma = numero1 + numero2

var idade = Number.parseInt(window.prompt("Digite a sua idade: "))

var acessoAutorizado = "Seu acesso está liberado"
var acessoNegado =  "Seu acesso está negado"

if (idade >= 18) {
    window.alert("Seu acesso está liberado")
} else {
    var conteudo = document.getElementById('conteudo');
    console.log(conteudo)
    conteudo.textContent = 'O seu acesso está negado, vai procurar outro site';
}




var n = window.prompt("digite um numero")

n%2 != 0?window.alert("impar"):window.alert("par")