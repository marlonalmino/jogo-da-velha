let jogador = null
let jogadorSelecionado = document.querySelector('#jogador-selecionado')

mudarJogador('X')

function escolherQuadrado(id) {
  let quadrado = document.getElementById(id)

  quadrado.innerHTML = jogador
  quadrado.style.color = '#000'
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}
