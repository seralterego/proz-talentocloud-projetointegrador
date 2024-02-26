var lista = [
  {
    titulo: "Buraco na Estrada do Sol",
    andamento: "Encerrado",
    data_denuncia: new Date(
      "Mon Jan 29 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "cadê a prefeitura?",
      "caí dentro do buraco",
      "furei meu pneu",
      "quase bati o carro",
      "que vergonha",
    ],
    prioridade: 0,
  },
  {
    titulo: "Buraco na Avenida principal",
    andamento: "Intervalo",
    data_denuncia: new Date(
      "Sat Feb 17 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: ["cadê a prefeitura?"],
    prioridade: 3,
  },
  {
    titulo: "Buraco na Estrada do Sol",
    andamento: "Encerrado",
    data_denuncia: new Date(
      "Sun Feb 11 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: ["furei meu pneu", "caí dentro do buraco"],
    prioridade: 3,
  },
  {
    titulo: "Buraco na Estrada do Sol",
    andamento: "Intervalo",
    data_denuncia: new Date(
      "Wed Feb 14 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "cadê a prefeitura?",
      "quase bati o carro",
      "que vergonha",
      "furei meu pneu",
      "caí dentro do buraco",
    ],
    prioridade: 4,
  },
  {
    titulo: "Buraco na Alameda dos Anjos",
    andamento: "Em Andamento",
    data_denuncia: new Date(
      "Wed Feb 21 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "furei meu pneu",
      "caí dentro do buraco",
      "cadê a prefeitura?",
      "quase bati o carro",
    ],
    prioridade: 4,
  },
  {
    titulo: "Buraco na Estrada do Sol",
    andamento: "Em Andamento",
    data_denuncia: new Date(
      "Tue Feb 13 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "que vergonha",
      "cadê a prefeitura?",
      "quase bati o carro",
      "caí dentro do buraco",
    ],
    prioridade: 1,
  },
  {
    titulo: "Buraco na Boulevard da Liberdade",
    andamento: "Em Andamento",
    data_denuncia: new Date(
      "Sun Feb 25 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "caí dentro do buraco",
      "furei meu pneu",
      "quase bati o carro",
      "que vergonha",
    ],
    prioridade: 2,
  },
  {
    titulo: "Buraco na Alameda dos Anjos",
    andamento: "Retomado",
    data_denuncia: new Date(
      "Sat Feb 17 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: ["caí dentro do buraco", "que vergonha", "quase bati o carro"],
    prioridade: 0,
  },
  {
    titulo: "Buraco na Rua das Flores",
    andamento: "Em Andamento",
    data_denuncia: new Date(
      "Sat Feb 03 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: [
      "caí dentro do buraco",
      "cadê a prefeitura?",
      "quase bati o carro",
      "furei meu pneu",
    ],
    prioridade: 0,
  },
  {
    titulo: "Buraco na Avenida principal",
    andamento: "Intervalo",
    data_denuncia: new Date(
      "Sun Feb 04 2024 18:02:17 GMT-0300 (Horário Padrão de Brasília)"
    ),
    comentarios: ["que vergonha", "furei meu pneu"],
    prioridade: 3,
  },
];

function compararPorPrioridade(a, b) {
    return a.prioridade - b.prioridade; // Retorna a diferença invertida entre as prioridades dos objetos
  }
  
  lista.sort(compararPorPrioridade); // Ordena a lista em ordem decrescente de prioridade

const mural = document.getElementById("mural-scroll");

for (let i = 0; i < lista.length; i++) {
  const titulo = lista[i].titulo;
  const andamento = lista[i].andamento;
  let dias = Math.floor(
    (new Date().getTime() - new Date(lista[i].data_denuncia).getTime()) /
      (1000 * 3600 * 24)
  );
  let comentarios = `${lista[i].comentarios.join("<br> 👤")}`;
  const n_comentarios = lista[i].comentarios.length
  const prioridade = lista[i].prioridade;

  console.log(comentarios);

  const teste = document.createElement("div");
  teste.innerHTML = `
    <div class="mural-content">
    <!-- Item de conteúdo do mural -->
    <div class="mural-content-item">
      <!-- Imagem do item de mural -->
      <div class="mural-img">
        <img src="../img/img-mural-placeholder.png" alt="">
      </div>
      <!-- Conteúdo do item de mural -->
      <div class="mural-txt-content">
        <div class="mural-txt-title">
          <h3>${titulo}</h3>
        </div>
        <div class="mural-txt-icons">
          <div class="mural-icon-status">
            <img src="../img/icon-status-on-going.png" alt="Ícone de status da denúncia">
            <p class="mural-item-description">${andamento}</p>
          </div>
          <div class="mural-icon-date">
            <img src="../img/icon-calendar.png" alt="Ícone de data do tempo de abertura da denúncia">
            <p class="mural-item-description">${dias} Dias</p>
          </div>
        </div>
        </div>
        </div>
        <div class="mural-content-reactions">
        <div class="mural-react-commentary">
        <img src="../img/icon-comment.png" alt="Ícone de comentários na denúncia">
        <p class="commentary-count">${n_comentarios}</p>
        <div class="mural-txt-description-mod">
          <p>👤 ${comentarios}</p>
        </div>
        </div>
      <div class="mural-react-vote-up">
        <img src="../img/icon-up.png" alt="Ícone de votos positivos">
        <p class="commentary-count">${prioridade}</p>
      </div>
    </div>
  </div>
`;
  mural.appendChild(teste);
}

// for (var i = 0; i < lista.length; i++) { // Loop para cada objeto da lista
//     var item = lista[i]; // Pegando o objeto atual
//     var muralItem = document.createElement("div"); // Criando um elemento div para o item do mural

//     muralItem.className = "mural-content-item"; // Adicionando a classe ao elemento

//     // Criando os elementos filhos do item do mural
//     var muralImg = document.createElement("div");
//     muralImg.className = "mural-img";

//     var img = document.createElement("img");
//     img.src = "../img/img-mural-placeholder.png";
//     img.alt = "";
//     muralImg.appendChild(img); // Adicionando a imagem ao elemento mural-img

//     var muralTxtContent = document.createElement("div");
//     muralTxtContent.className = "mural-txt-content";

//     var muralTxtTitle = document.createElement("div");
//     muralTxtTitle.className = "mural-txt-title";

//     var h3 = document.createElement("h3");
//     h3.textContent = item.titulo; // Usando o título do objeto
//     muralTxtTitle.appendChild(h3); // Adicionando o título ao elemento mural-txt-title

//     var muralTxtIcons = document.createElement("div");
//     muralTxtIcons.className = "mural-txt-icons";

//     var muralIconStatus = document.createElement("div");
//     muralIconStatus.className = "mural-icon-status";

//     var iconStatus = document.createElement("img");
//     iconStatus.src = "../img/icon-status-" + item.andamento.toLowerCase() + ".png"; // Usando o andamento do objeto para definir a imagem do status
//     iconStatus.alt = "Ícone de status da denúncia";

//     var pStatus = document.createElement("p");
//     pStatus.className = "mural-item-description";
//     pStatus.textContent = item.andamento; // Usando o andamento do objeto
//     muralIconStatus.appendChild(iconStatus); // Adicionando o ícone ao elemento mural-icon-status
//     muralIconStatus.appendChild(pStatus); // Adicionando o texto ao elemento mural-icon-status

//     var muralIconDate = document.createElement("div");
//     muralIconDate.className = "mural-icon-date";

//     var iconDate = document.createElement("img");
//     iconDate.src = "../img/icon-calendar.png";
//     iconDate.alt = "Ícone de data do tempo de abertura da denúncia";

//     var pDate = document.createElement("p");
//     pDate.className = "mural-item-description";

//     var hoje = new Date(); // Pegando a data atual

//     var dias = Math.floor((hoje - item.data_denuncia) / (1000 * 60 * 60 * 24)); // Calculando a diferença em dias entre a data atual e a data da denúncia
//     pDate.textContent = dias + " Dias"; // Usando a diferença em dias
//     muralIconDate.appendChild(iconDate); // Adicionando o ícone ao elemento mural-icon-date
//     muralIconDate.appendChild(pDate); // Adicionando o texto ao elemento mural-icon-date
//     muralTxtIcons.appendChild(muralIconStatus); // Adicionando o elemento mural-icon-status ao elemento mural-txt-icons
//     muralTxtIcons.appendChild(muralIconDate); // Adicionando o elemento mural-icon-date ao elemento mural-txt-icons

//     var muralTxtDescription = document.createElement("div");
//     muralTxtDescription.className = "mural-txt-description";

//     var pDescription = document.createElement("p");
//     pDescription.textContent = item.comentarios.join(". ") + "."; // Usando os comentários do objeto e juntando-os em um parágrafo
//     muralTxtDescription.appendChild(pDescription); // Adicionando o texto ao elemento mural-txt-description
//     muralTxtContent.appendChild(muralTxtTitle); // Adicionando o elemento mural-txt-title ao elemento mural-txt-content
//     muralTxtContent.appendChild(muralTxtIcons); // Adicionando o elemento mural-txt-icons ao elemento mural-txt-content
//     muralTxtContent.appendChild(muralTxtDescription); // Adicionando o elemento mural-txt-description ao elemento mural-txt-content

//     var muralContentReactions = document.createElement("div");
//     muralContentReactions.className = "mural-content-reactions";

//     var muralReactCommentary = document.createElement("div");
//     muralReactCommentary.className = "mural-react-commentary";

//     var iconComment = document.createElement("img");
//     iconComment.src = "../img/icon-comment.png";
//     iconComment.alt = "Ícone de comentários na denúncia";

//     var pComment = document.createElement("p");
//     pComment.className = "commentary-count";
//     pComment.textContent = item.comentarios.length; // Usando o número de comentários do objeto
//     muralReactCommentary.appendChild(iconComment); // Adicionando o ícone ao elemento mural-react-commentary
//     muralReactCommentary.appendChild(pComment); // Adicionando o texto ao elemento mural-react-commentary

//     var muralReactVoteUp = document.createElement("div");
//     muralReactVoteUp.className = "mural-react-vote-up";

//     var iconUp = document.createElement("img");
//     iconUp.src = "../img/icon-up.png";
//     iconUp.alt = "Ícone de votos positivos";

//     var pUp = document.createElement("p");
//     pUp.className = "commentary-count";
//     pUp.textContent = Math.floor(Math.random() * 100) + 1; // Gerando um número aleatório entre 1 e 100 para os votos positivos
//     muralReactVoteUp.appendChild(iconUp); // Adicionando o ícone ao elemento mural-react-vote-up
//     muralReactVoteUp.appendChild(pUp); // Adicionando o texto ao elemento mural-react-vote-up

//     var muralReactVoteDown = document.createElement("div");
//     muralReactVoteDown.className = "mural-react-vote-down";

//     var iconDown = document.createElement("img");
//     iconDown.src = "../img/icon-down.png";
//     iconDown.alt = "Ícone de votos negativos";

//     var pDown = document.createElement("p");
//     pDown.className = "commentary-count";
//     pDown.textContent = Math.floor(Math.random() * 100) + 1; // Gerando um número aleatório entre 1 e 100 para os votos negativos
//     muralReactVoteDown.appendChild(iconDown); // Adicionando o ícone ao elemento mural-react-vote-down
//     muralReactVoteDown.appendChild(pDown); // Adicionando o texto ao elemento mural-react-vote-down
//     muralContentReactions.appendChild(muralReactCommentary); // Adicionando o elemento mural-react-commentary ao elemento mural-content-reactions
//     muralContentReactions.appendChild(muralReactVoteUp); // Adicionando o elemento mural-react-vote-up ao elemento mural-content-reactions
//     muralContentReactions.appendChild(muralReactVoteDown); // Adicionando o elemento mural-react-vote-down ao elemento mural-content-reactions
//     muralItem.appendChild(muralImg); // Adicionando o elemento mural-img ao elemento mural-content-item
//     muralItem.appendChild(muralTxtContent); // Adicionando o elemento mural-txt-content ao elemento mural-content-item
//     muralItem.appendChild(muralContentReactions); // Adicionando o elemento mural-content-reactions ao elemento mural-content-item
//     mural.appendChild(muralItem); // Adicionando o elemento mural-content-item ao elemento mural-content
//   }
