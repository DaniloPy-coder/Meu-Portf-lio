const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 0) hr = "0" + "hr";
  if (min < 0) hr = "min" + "min";
  if (s < 0) hr = "s" + "s";

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});
