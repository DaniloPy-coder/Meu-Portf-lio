const key = "7aaf81b1ef3b051b255cbafd6aa2f0d1";

function colocarDadosNaTela(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".txt-prev").innerHTML = dados.weather[0].description;
  document.querySelector(".Umidade").innerHTML =
    "Umidade : " + dados.main.humidity;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
