const cels = parseFloat(prompt(`Введите температуру в градусах цельсия : `));
function celsToFar(celsGr) {
  return ((9 / 5) * celsGr + 32).toFixed(1);
}
alert(`${cels} градус по Цельию будет : ${celsToFar(cels)} по Фарренгейту`);
