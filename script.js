let jogador = null
let jogadorSelecionado = document.querySelector('#jogador-selecionado')

mudarJogador('X')

function escolherQuadrado(id) {
  let quadrado = document.getElementById(id)

  if (quadrado.innerHTML !== '-') {
    return
  }

  quadrado.innerHTML = jogador
  quadrado.style.color = '#000'

  if (jogador === 'X') {
    jogador = 'O'
  } else {
    jogador = 'X'
  }

  mudarJogador(jogador)
}

function mudarJogador(valor) {
  jogador = valor
  jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
  let quadrado1 = document.querySelector('#1')
  let quadrado2 = document.querySelector('#2')
  let quadrado3 = document.querySelector('#3')
  let quadrado4 = document.querySelector('#4')
  let quadrado5 = document.querySelector('#5')
  let quadrado6 = document.querySelector('#6')
  let quadrado7 = document.querySelector('#7')
  let quadrado8 = document.querySelector('#8')
  let quadrado9 = document.querySelector('#9')
}
