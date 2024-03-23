/*Pega os botoes*/
let comecar = document.getElementById("comecar");

/**Pega a main */
let main = document.getElementById("main");

/*Pega o span que altera o placar*/
let contador = document.getElementById("contador");

let quantidadeVitoria = 1;
let quantidadeDerrota = 1;

/**Cria array de imagens */
let arrayImagens = [
  {
    id: "papel",
    src: "papel.png",
  },
  {
    id: "pedra",
    src: "pedra.png",
  },
  {
    id: "tesoura",
    src: "tesoura.png",
  },
];

comecar.addEventListener("click", function () {
  let imagemJogo = document.getElementById("imagemJogo");
  main.removeChild(comecar);
  main.removeChild(imagemJogo);

  criaJogo();
});

function criaJogo() {
  /**cria a section jogo */
  const sectionJogo = document.createElement("section");
  sectionJogo.id = "jogo";

  /**cria o paragrafo escolha */
  const escolha = document.createElement("p");
  escolha.id = "usuario";
  escolha.innerText = "Escolha: ";

  /**Cria a div escolhaUsuario */
  const divEscolhaUsuario = document.createElement("div");
  divEscolhaUsuario.id = "escolhaUsuario";

  /** cria as imgs*/
  const imgPapel = document.createElement("img");
  imgPapel.src = "papel.png";
  imgPapel.id = "papel";
  imgPapel.classList.add("opcao-imagem");

  const imgPedra = document.createElement("img");
  imgPedra.src = "pedra.png";
  imgPedra.id = "pedra";
  imgPedra.classList.add("opcao-imagem");

  const imgTesoura = document.createElement("img");
  imgTesoura.src = "tesoura.png";
  imgTesoura.id = "tesoura";
  imgTesoura.classList.add("opcao-imagem");

  /**Cria a div versus */
  const divVersus = document.createElement("div");
  divVersus.id = "versus";

  /**cria a imagem de versus */
  const imgVersus = document.createElement("img");
  imgVersus.src = "vs.png";
  imgVersus.id = "vs";

  /**Cria div containerAleatorio */
  const divEscolhaAleatorio = document.createElement("div");
  divEscolhaAleatorio.id = "escolhaAleatorio";

  /**Cria botao jogar */
  const buttonJogar = document.createElement("button");
  buttonJogar.id = "jogar";
  buttonJogar.innerText = "Jogar!";

  /**Cria div contador */
  const divContador = document.createElement("div");
  divContador.id = "contador";

  const divVitoria = document.createElement("div")
  divVitoria.id = "vitoria"
  
  const divDerrota = document.createElement("div")
  divDerrota.id = "derrota"

  /**Cria p vitoria e derrota */
  const pVitoria = document.createElement("p");
  pVitoria.id = "vitoria";
  pVitoria.innerText = "Vitórias: ";

  const pDerrota = document.createElement("p");
  pDerrota.id = "derrota";
  pDerrota.innerText = "Derrotas: ";

  /**Cria spans */
  const spanVitoria = document.createElement("span");
  spanVitoria.id = "numeroVitorias";

  const spanDerrota = document.createElement("span");
  spanDerrota.id = "numeroDerrotas";

  divEscolhaUsuario.appendChild(imgPapel);
  divEscolhaUsuario.appendChild(imgPedra);
  divEscolhaUsuario.appendChild(imgTesoura);
  divVersus.appendChild(imgVersus);
  divVitoria.appendChild(pVitoria)
  divVitoria.appendChild(spanVitoria)
  divDerrota.appendChild(pDerrota);
  divDerrota.appendChild(spanDerrota);
  divContador.appendChild(divVitoria)
  divContador.appendChild(divDerrota)
  sectionJogo.appendChild(escolha);
  sectionJogo.appendChild(divEscolhaUsuario);
  sectionJogo.appendChild(divVersus);
  sectionJogo.appendChild(divEscolhaAleatorio);
  sectionJogo.appendChild(buttonJogar);
  sectionJogo.appendChild(divContador);

  main.appendChild(sectionJogo);

  userImg();

  jogar.addEventListener("click", function () {
    apagarFilho();
    gerarAleatorio();
  });
}

function gerarAleatorio() {
  /*Gera um numero entre 0 e 2*/
  const numeroInteiroIncluindo2 = Math.floor(Math.random() * 3);

  /*Cria o elemento img e atribui o valor do src com o index do arrayImagens que foi sorteado com Math.random*/
  const imagemAleatoria = document.createElement("img");
  imagemAleatoria.src = arrayImagens[numeroInteiroIncluindo2].src;
  imagemAleatoria.id = arrayImagens[numeroInteiroIncluindo2].id;

  /*Adiciona a img dentro da div*/
  const escolhaAleatorio = document.getElementById("escolhaAleatorio");
  escolhaAleatorio.appendChild(imagemAleatoria);

  let imgSelecionada = document.querySelector(".selecionado");
  console.log("escolha usuario " + imgSelecionada.id);
  console.log("Escolha maquina " + imagemAleatoria.id);

  let escolhaMaquina = imagemAleatoria.id;
  let escolhaUsuario = imgSelecionada.id;

  
  if(escolhaUsuario === 'papel' && escolhaMaquina === 'pedra'){
    setTimeout(usuarioGanha, 4000);
  } else if (escolhaUsuario === 'papel' && escolhaMaquina === 'papel'){
    setTimeout(usuarioEmpata, 4000);
  } else if (escolhaUsuario === 'papel' && escolhaMaquina === 'tesoura'){
    setTimeout(usuarioPerde, 4000);
  }
  
  if(escolhaUsuario === 'pedra' && escolhaMaquina === 'tesoura'){
    setTimeout(usuarioGanha, 4000);
  } else if(escolhaUsuario === 'pedra' && escolhaMaquina === 'pedra'){
    setTimeout(usuarioEmpata, 4000);
  } else if(escolhaUsuario === 'pedra' && escolhaMaquina === 'papel'){
    setTimeout(usuarioPerde, 4000);
  }

  if(escolhaUsuario === 'tesoura' && escolhaMaquina === 'papel'){
    setTimeout(usuarioGanha, 4000);
  } else if(escolhaUsuario === 'tesoura' && escolhaMaquina === 'tesoura'){
    setTimeout(usuarioEmpata, 4000);
  } else if(escolhaUsuario === 'tesoura' && escolhaMaquina === 'pedra'){
    setTimeout(usuarioPerde, 4000);
  } 

}

function apagarFilho() {
  while (escolhaAleatorio.firstChild) {
    escolhaAleatorio.removeChild(escolhaAleatorio.firstChild);
  }
}

function usuarioPerde(){
  alert("Você perdeu :(");
  const derrotaUsuario = document.getElementById('numeroDerrotas');
  derrotaUsuario.innerText = quantidadeDerrota++;
}

function usuarioGanha(){
  alert("Você ganhou :)");
  const vitoriaUsuario = document.getElementById('numeroVitorias');
  vitoriaUsuario.innerText = quantidadeVitoria++;
}

function usuarioEmpata(){
  alert("Empate, jogue novamente :|");
}

function userImg() {
  let imgUsuario = document.querySelectorAll(".opcao-imagem");

  imgUsuario.forEach(function (imagem) {
    imagem.addEventListener("click", function () {
      imgUsuario.forEach(function (outraImagem) {
        outraImagem.classList.remove("selecionado");
      });
      this.classList.add("selecionado");
    });
  });
}
