let jogadorEscolha = 0;
let jogadorPontos = 0;
let computadorEscolha = 0;
let computadorPontos = 0;
let ganhador = -1;

function jogar(escolha) {
  jogadorEscolha = escolha;

  computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  if (jogadorEscolha == computadorEscolha) {
    ganhador = 0; // Empate
    
  } else if (
    (jogadorEscolha == 1 && computadorEscolha == 3) ||
    (jogadorEscolha == 2 && computadorEscolha == 1) ||
    (jogadorEscolha == 3 && computadorEscolha == 2) 
  ) {
    ganhador = 1; // Jogador vence
  } else {
    ganhador = 2; // Computador vence
  }

  document.getElementById('jogadorEscolha1').classList.remove('selecionado');
  document.getElementById('jogadorEscolha2').classList.remove('selecionado');
  document.getElementById('jogadorEscolha3').classList.remove('selecionado');
  document.getElementById('computadorEscolha1').classList.remove('selecionado');
  document.getElementById('computadorEscolha2').classList.remove('selecionado');
  document.getElementById('computadorEscolha3').classList.remove('selecionado');

  document.getElementById('jogadorEscolha' + jogadorEscolha).classList.add('selecionado');
  document.getElementById('computadorEscolha' + computadorEscolha).classList.add('selecionado');

  if (ganhador == 0) {
    document.getElementById('mensagem').innerHTML = 'EMPATE';
  } else if (ganhador == 1) {
    document.getElementById('mensagem').innerHTML = 'Você Venceu!';
    jogadorPontos++;
  } else if (ganhador == 2) {
    document.getElementById('mensagem').innerHTML = 'Você Perdeu!';
    computadorPontos++;
  }
if (ganhador == 1){
    document.getElementById('mensagemPc').innerHTML = 'NEM FERRANDO?!';
  } else if(ganhador == 2){
    document.getElementById('mensagemPc').innerHTML = 'KKK RUIM';
  }

  if(document.getElementById('mensagem').innerHTML === 'EMPATE'){
    document.getElementById('mensagemPc').innerHTML = 'GG!';
  } 

  document.getElementById('jogadorPontos').innerHTML = jogadorPontos;
  document.getElementById('computadorPontos').innerHTML = computadorPontos;
}
