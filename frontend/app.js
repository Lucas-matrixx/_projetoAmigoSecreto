let lista_participantes = []


function adicionarNome(){
    let nomeDigitado = document.getElementById('participantes');
    let nomeAmigo = nomeDigitado.value;

    // let emailDigitado = document.getElementById('participantes-email');
    // let emailAmigo = emailDigitado.value;

    if (!nomeAmigo){ //|| !emailAmigo
        alert('Há campos para preencher');
    } else { 
        const verificacao = lista_participantes.some(participante => { 
            return participante.nome === nomeAmigo //|| participante.email === emailAmigo;
    });
        if (verificacao){
            alert('Esse nome já está participando do amigo secreto')
        } else {
            let novoParticipante = {
                nome: nomeAmigo
                //email: emailAmigo
            };
        lista_participantes.push(novoParticipante);
        console.log(lista_participantes);
        limparCaixaTexto()
        mostrarParticipantes()
        }
    }
}

function mostrarParticipantes() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  lista_participantes.forEach(p => {
    let li = document.createElement("li");
    li.textContent = p.nome; //+ " (" + p.email + ")";
    lista.appendChild(li);
  });
}

function sortearNome() {
  if (lista_participantes.length < 2) {
    alert('É necessário ter pelo menos 2 participantes para realizar o sorteio.');
    return;
  }
  
  let resultado_sorteio = {};

  let participantes_disponiveis = [];
  for (let i = 0; i < lista_participantes.length; i++) {
    participantes_disponiveis.push(lista_participantes[i]);
  }
  console.log(participantes_disponiveis)

  let indice = Math.floor(Math.random() * participantes_disponiveis.length);
  let primeiro_sorteado = participantes_disponiveis.splice(indice, 1)[0];
  let atual = primeiro_sorteado;

  while (participantes_disponiveis.length > 0) {
    let possiveis = participantes_disponiveis.filter(p => p !== atual);
    let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
    let chaveAtual = atual.nome ? atual.nome : atual;
    let valorSorteado = sorteado.nome ? sorteado.nome : sorteado;

    resultado_sorteio[chaveAtual] = valorSorteado;

    participantes_disponiveis = participantes_disponiveis.filter(p => p !== sorteado);
    atual = sorteado;
  }

  let chaveUltimo = atual.nome ? atual.nome : atual;
  let valorPrimeiro = primeiro_sorteado.nome ? primeiro_sorteado.nome : primeiro_sorteado;
  resultado_sorteio[chaveUltimo] = valorPrimeiro;

  let listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";
  for (let lista_participantes in resultado_sorteio) {
    let li = document.createElement("li");
    li.textContent = `${lista_participantes} → ${resultado_sorteio[lista_participantes]}`;
    listaResultado.appendChild(li);
  }

  let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

  return resultado_sorteio;
  
}

function limparCaixaTexto(){
    let limpar = document.getElementById('participantes');
    // let clear = document.getElementById('participantes-email')
    limpar.value = '';
    // clear.value = '';
}

