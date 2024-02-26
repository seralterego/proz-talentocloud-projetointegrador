var position = {
  lat: 0,
  lon: 0,
  confirmed: false,
};

var denuncia = "";

var foto;

denunciaTextArea = document.getElementById("denuncia");

denunciaTextArea.addEventListener("change", function () {
  denuncia = denunciaTextArea.value;
  console.log(denuncia);
});

document.querySelector(".btnfoto").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#foto").click();
});

document.querySelector(".inputfile").addEventListener("change", function () {
  try {
    var fileName = document.getElementById("file").files[0].name;
    document.querySelector("#label").textContent = fileName;

    alert("Imagem selecionada com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Ocorreu algum erro ao enviar a Foto");
  }
});

var map = L.map("map");

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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocalização não é suportada por este navegador.");
}

document
  .querySelector(".confirmLocation")
  .addEventListener("click", function () {
    alert(`A latitude é ${position.lat} e a longitude é ${position.lon}`);
    position.confirmed = true;
    console.log(position);
  });

document.getElementById("formDenuncia").addEventListener("submit", submit);
document.querySelector(".submit").addEventListener("click", submit);

function submit(event) {
  event.preventDefault(); // Impede o envio do formulário

  if (validateForm()) {
    console.log({
      position,
      denuncia,
      foto,
    });

    alert("Denúncia enviada com sucesso!");
  } else {
    console.log("O formulário possui alguns erros");
  }
}

function validateForm() {
  // Verifique se a denúncia tem entre 10 e 256 caracteres
  if (denuncia.length < 10 || denuncia.length > 256) {
    alert("A denúncia deve ter entre 10 e 256 caracteres.");
    return false;
  }

  // Verifique se as propriedades da posição não são nulas
  if (position.lat !== 0 && position.lon !== 0 && position.confirmed) {
    alert("Por favor, confirme a sua localização.");
    return false;
  }

  // Verifique se a foto não é nula
  if (!document.getElementById("foto").files.length) {
    alert("Por favor, envie uma foto.");
    return false;
  }

  // Se todas as verificações passarem, retorne true
  return true;
}
