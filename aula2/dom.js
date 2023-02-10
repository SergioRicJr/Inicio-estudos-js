// document.write(document.characterSet)

var p = document.getElementsByTagName('p')[1]
// document.write(p.innerText)
// document.write(p.innerHTML) 
//innerHTML passa tudo que tem dentro, nao so o texto, por isso ficou em negrito como no outro

var botao = document.querySelector(".botao")

//formas diferentes de 

botao.addEventListener("click", function() {
    botao.classList.toggle('activate');
});

function entrar() {
    botao.style.background = 'red'
}

function sair() {
    botao.style.background = 'antiquewhite'
}

botao.addEventListener("mouseout", sair)




