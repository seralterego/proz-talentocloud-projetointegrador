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