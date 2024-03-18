// Inicializando variáveis
var position = {
  lat: 0,
  lon: 0,
  confirmed: false,
};
var denuncia = "";
var foto;

// Obtendo referência ao elemento textarea
var denunciaTextArea = document.getElementById("denuncia");

// Obtendo referência ao elemento input file
var fotoImputFile = document.getElementById("foto");

// Obtendo referência ao elemento form
var formDenuncia = document.getElementById("formDenuncia")

// Adicionando ouvinte de evento para atualizar a variável 'denuncia' sempre que o valor do textarea mudar
denunciaTextArea.addEventListener("change", function () {
  denuncia = denunciaTextArea.value;
  console.log(denuncia);
});

// Adicionando ouvinte de evento para abrir o seletor de arquivos quando o botão 'btnfoto' for clicado
document.querySelector(".btnfoto").addEventListener("click", function (e) {
  e.preventDefault();
  fotoImputFile.click();
});

// Adicionando ouvinte de evento para atualizar a variável 'foto' quando um arquivo for selecionado
fotoImputFile.addEventListener("change", async function () {
  console.log(fotoImputFile.value);

  try {
    var fileName = fotoImputFile.files[0].name; // Altere 'document.getElementById("file")' para 'fotoImputFile'
    var info = document.getElementById("nameFoto");
    foto = fileName;
    info.textContent = fileName;
    info.style.display = "block";
    alert("Imagem selecionada com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Ocorreu algum erro ao enviar a Foto");
  }
});

// Inicializando o mapa
var map = L.map("map");

// Função para atualizar a posição no mapa e na variável 'position'
function showPosition(position) {
  map.setView([position.coords.latitude, position.coords.longitude], 13);
  this.position.lat = position.coords.latitude;
  this.position.lon = position.coords.longitude;
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);
  L.marker([position.coords.latitude, position.coords.longitude])
    .addTo(map)
    .bindPopup("Você está aqui.")
    .openPopup();
}

// Obtendo a localização atual do usuário
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocalização não é suportada por este navegador.");
}

// Adicionando ouvinte de evento para confirmar a localização quando o botão 'confirmLocation' for clicado
document
  .querySelector(".confirmLocation")
  .addEventListener("click", function () {
    alert(`A latitude é ${position.lat} e a longitude é ${position.lon}`);
    position.confirmed = true;
    console.log(position);
  });

// Adicionando ouvinte de evento para validar e enviar o formulário quando o botão 'submit' for clicado
formDenuncia.addEventListener("submit", submit);
document.querySelector(".submit").addEventListener("click", submit);

// Função para validar e enviar o formulário
function submit(event) {
  event.preventDefault(); // Impede o envio do formulário
  if (validateForm()) {
    console.log({
      position,
      denuncia,
      foto,
    });

    formDenuncia.reset()

    alert("Denúncia enviada com sucesso!");

    const dominioProd = window.location.hostname
    console.log(dominioProd);
    if (dominioProd != 'seralterego.github.io') {
      window.location.href = '/pages/mural.html';
    } else {
      window.location.href = `/proz-talentocloud-projetointegrador/pages/mural.html`;
    }

  } else {
    alert("O formulário possui alguns erros");
  }
}

// Função para validar o formulário
function validateForm() {
  // Verifique se a denúncia tem entre 10 e 256 caracteres
  if (denuncia.length < 10 || denuncia.length > 256) {
    alert("A denúncia deve ter entre 10 e 256 caracteres.");
    return false;
  }
  // Verifique se as propriedades da posição não são nulas
  if (position.lat === 0 || position.lon === 0 || !position.confirmed) {
    alert("Por favor, confirme a sua localização.");
    return false;
  }
  // Verifique se a foto não é nula
  if (!fotoImputFile.files && !foto) {
    alert("Por favor, envie uma foto.");
    return false;
  }

  // Se todas as verificações passarem, retorne true
  return true;
}
