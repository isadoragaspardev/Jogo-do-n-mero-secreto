let listaDeNumerosSorteados = []; //criando lista vazia
let numeroLimite =  10; //criando variavel numerolimite
let numeroSecreto = gerarNumeroAleatorio(); //numero do jogo secreto
let tentativas = 1; //criando variavel~


function exibirTextoNaTela(tag, texto) { //chamar função exibirnatela
    let campo = document.querySelector(tag); //selecionar qual função do html
    campo.innerHTML = texto; //selecionando função texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //usando o Voice 
}
function exibirMensagemInicial() { //criando função exibir o texto na tela

    exibirTextoNaTela('h1', 'Jogo do numero secreto'); //exibir
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); //exibir
}

exibirMensagemInicial();

function verificarChute() { //função de ação para o botão
    let chute = document.querySelector('input').value; //variavel chute 

    if (chute == numeroSecreto) { //se chute for igual a numero secreto 
        exibirTextoNaTela('h1', 'Acertou!'); //exiba na tela
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //criando variavel tentativa/tentativas
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; //criando variavel mensagem 
        exibirTextoNaTela('p', mensagemTentativas); //aviso
        document.getElementById('reiniciar').removeAttribute('disabled'); //

    } else {  //caso
        if (chute > numeroSecreto) { //se chute for menor que numerosecreto
            exibirTextoNaTela('p', 'O número secreto é menor'); //avise
        } else { //caso for maior 
            exibirTextoNaTela('p', 'O número secreto é maior'); //avise
        }
        tentativas++; //contando as tentativas
        limparCampo(); //limpar 
    }
}

function gerarNumeroAleatorio() { //criando função gerar numero
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //gerando número aleatorio
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; //

    if (quantidadeDeElementosNaLista ==  numeroLimite) { //
        listaDeNumerosSorteados = [];
}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {  //verificando se já tem o numero na lista
        return gerarNumeroAleatorio(); //retornar caso já esteja na lista

    } else { //caso não esteja na lista
        listaDeNumerosSorteados.push(numeroEscolhido); //inserir na lista o número 
        console.log(listaDeNumerosSorteados) //verificar console
        return numeroEscolhido; //retornar para o númeroescolhido
    }
}
function limparCampo() { //criando função limparcampo
    chute = document.querySelector('input'); //seleciona o campo de entrada
    chute.value = ''; //limpando o campo de entrada 
}
function reiniciarJogo() { //função reiniciarojogo
    numeroSecreto = gerarNumeroAleatorio(); //gerarnumero
    limparCampo(); //limpar o campo pós nova tentativa
    tentativas = 1; 
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true) //habilitar botao de novo jogo
}