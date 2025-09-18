//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista_participantes = []


function adicionarNome(){
    let nomeDigitado = document.getElementById('participantes');
    let nomeAmigo = nomeDigitado.value;

    let emailDigitado = document.getElementById('participantes-email');
    let emailAmigo = emailDigitado.value;

    if (!nomeAmigo || !emailAmigo){
        alert('Há campos para preencher');
    } else { 
        const verificacao = lista_participantes.some(participante => { 
            return participante.nome === nomeAmigo || participante.email === emailAmigo;
    });
        if (verificacao){
            alert('Esse nome ou email já foi adicionado a lista do jogo')
        } else {
            let novoParticipante = {
                nome: nomeAmigo,
                email: emailAmigo
            };
        lista_participantes.push(novoParticipante);
        console.log(lista_participantes);
        limparCaixaTexto()
        }
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

function limparCaixaTexto(){
    let limpar = document.getElementById('participantes');
    let clear = document.getElementById('participantes-email')
    limpar.value = '';
    clear.value = '';
}