import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const text = document.querySelector('textarea[name="user-input"]');
text.addEventListener('input', () => {
  // Contador de numeros
  const numero = analyzer.getNumberCount(text.value);
  const contador4 = document.querySelector('ul span.contadorN');
  if (contador4 !== null) {
    contador4.textContent = ` ${numero}`;
  } else {
    console.error("Error: Elemento 'Numeros' no encontrado");
  }
  // Contador de Palabras
  const contadorPalabras = analyzer.getWordCount(text.value);
  const contador1 = document.querySelector('ul span.contadorP');
  contador1.textContent = ` ${contadorPalabras}`;
  
  // Contador de Caracteres
  const contadorCaracteres = analyzer.getCharacterCount(text.value);
  const contador2 = document.querySelector('ul span.contadorC');
  if (contador2 !== null) {
    contador2.textContent = ` ${contadorCaracteres}`;
  } else {
    console.error("Error: Elemento con clase 'contadorC' no encontrado");
  }
  // Contador de Caracteres Excluyendo espacios
  const contadorCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(text.value);
  const contador3 = document.querySelector('ul span.contadorCSE');
  if (contador3 !== null) {
    contador3.textContent = ` ${contadorCaracteresSinEspacio}`;
  } else {
    console.error("Error: Elemento con clase 'contadorCSE' no encontrado");
  }
  // Sumatoria
  const suma = analyzer.getNumberSum(text.value);
  const contador5 = document.querySelector('ul span.contadorS');
  if (contador5 !== null) {
    contador5.textContent = ` ${suma}`;
  } else {
    console.error("Error: Elemento 'sumatoriaNumeros' no encontrado");
  }
  // Contador de numeros Promedio
  const promedioTotal = analyzer.getAverageWordLength(text.value);
  const contador6 = document.querySelector('ul span.contadorPR');
  if (contador6 !== null) {
    contador6.textContent = ` ${promedioTotal}`;
  } else {
    console.error("Error: Elemento 'Promedio de longitud:' no encontrado");
  }
});
// Boton
const boton = document.getElementById("reset-button");
boton.addEventListener('click', () => {
  text.value = "";
  const spans = document.querySelectorAll('.contador span');
  spans.forEach(span => {
    span.textContent = " 0";
  });
});
