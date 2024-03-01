import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const text = document.querySelector('textarea[name="user-input"]');
text.addEventListener('input', () => {
  // Contador de numeros
  const numeros = analyzer.getNumberCount(text.value);
  const contador4 = document.querySelector('ul li.contadorN');
  if (contador4 !== null) {
    contador4.textContent = `Números: ${numeros}`;
  } else {
    console.error("Error: Elemento 'Numeros' no encontrado");
  }
  // Contador de Palabras
  const contadorPalabras = analyzer.getWordCount(text.value);
  const contador1 = document.querySelector('ul li.contadorP');
  contador1.textContent = `Palabras: ${contadorPalabras}`;
  // Contador de Caracteres
  const contadorCaracteres = analyzer.getCharacterCount(text.value);
  const contador2 = document.querySelector('ul li.contadorC');
  if (contador2 !== null) {
    contador2.textContent = `Caracteres: ${contadorCaracteres}`;
  } else {
    console.error("Error: Elemento con clase 'contadorC' no encontrado");
  }
  // Contador de Caracteres Excluyendo espacios
  const contadorCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(text.value);
  const contador3 = document.querySelector('ul li.contadorCSE');
  if (contador3 !== null) {
    contador3.textContent = `Caracteres sin espacios: ${contadorCaracteresSinEspacio}`;
  } else {
    console.error("Error: Elemento con clase 'contadorCSE' no encontrado");
  }
  // Sumatoria
  const suma = analyzer.getNumberSum(numeros);
  const contador5 = document.querySelector('ul li.contadorS');
  if (contador5 !== null) {
    contador5.textContent = `Sumatoria: ${suma}`;
  } else {
    console.error("Error: Elemento 'sumatoriaNumeros' no encontrado");
  }
  // Contador de numeros Promedio
  const promedioTotal = analyzer.getAverageWordLength(text.value);
  const contador6 = document.querySelector('ul li.contadorPR');
  if (contador6 !== null) {
    contador6.textContent = `Promedio de longitud:: ${promedioTotal}`;
  } else {
    console.error("Error: Elemento 'Promedio de longitud:' no encontrado");
  }
});
// Boton
const boton = document.getElementById("reset-button");
const lisOriginal = '<li class="contadorP">Palabras: </li><li class="contadorC">Caractéres:</li><li class="contadorCSE">Caractéres sin espacios:</li><li class="contadorN">Números:</li><li class="contadorS">Sumatoria:</li><li class="contadorPR">Promedio de longitud:</li>'
boton.addEventListener('click', () => {
  text.value = " ";
  const lis = document.querySelector('ul');
  if (lis) {
    lis.innerHTML = lisOriginal;
  }
});
