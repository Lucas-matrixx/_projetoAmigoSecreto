//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesArmazenados = []

function adicionarNome(){
    let nomesDigitados = document.getElementById('amigo');
    let nomeAmigo = nomesDigitados.value;

    if (nomeAmigo === "" || nomeAmigo === null){
        alert('Digite o nome de um amigo');
    } else { 
        nomesArmazenados.push(nomeAmigo);
        nomesDigitados.value = '';
    }
}

function sortearNome(){
    if(nomesArmazenados.length === 0){
        alert('Não há nenhum amigo adicionado para sortear');
    } else {
        let sortearIndice = Math.floor(Math.random() * nomesArmazenados.length);
        let pegarNomeArmazenado = nomesArmazenados[sortearIndice];
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = pegarNomeArmazenado
    }
}