const para = document.querySelector('p')

para.addEventListener('click', atualizarNome)

function atualizarNome() {
   let nome = prompt("Insira seu nome")
   para.textContent = `Player 1: ${nome}`
}