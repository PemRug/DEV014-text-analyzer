import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const text = document.querySelector('textarea[name="user-input"]');
text.addEventListener('input', () => {
  // Contador de numeros
  const numero = analyzer.getNumberCount(text.value).toString();
  const contador4 = document.querySelector('li.contador:nth-of-type(4)');
  if (contador4 !== null) {
    contador4.textContent = `Números: ${numero}`;
  } else {
    console.error("Error: Elemento 'Numeros' no encontrado");
  }
  // Contador de Palabras
  const contadorPalabras = analyzer.getWordCount(text.value);
  const contador1 = document.querySelector('li.contador:nth-of-type(1)');
  contador1.textContent = `Palabras: ${contadorPalabras}`;
  
  // Contador de Caracteres
  const contadorCaracteres = analyzer.getCharacterCount(text.value);
  const contador2 = document.querySelector('li.contador:nth-of-type(2)');
  if (contador2 !== null) {
    contador2.textContent = `Caracteres: ${contadorCaracteres}`;
  } else {
    console.error("Error: Elemento con clase 'contadorC' no encontrado");
  }
  // Contador de Caracteres Excluyendo espacios
  const contadorCaracteresSinEspacio = analyzer.getCharacterCountExcludingSpaces(text.value);
  const contador3 = document.querySelector('li.contador:nth-of-type(3)');
  if (contador3 !== null) {
    contador3.textContent = `Caractéres sin espacios: ${contadorCaracteresSinEspacio}`;
  } else {
    console.error("Error: Elemento con clase 'contadorCSE' no encontrado");
  }
  // Sumatoria
  const suma = analyzer.getNumberSum(text.value);
  const contador5 = document.querySelector('li.contador:nth-of-type(5)');
  if (contador5 !== null) {
    contador5.textContent = `Sumatoria: ${suma}`;
  } else {
    console.error("Error: Elemento 'sumatoriaNumeros' no encontrado");
  }
  // Contador de numeros Promedio
  const promedioTotal = analyzer.getAverageWordLength(text.value);
  const contador6 = document.querySelector('li.contador:nth-of-type(6)');
  if (contador6 !== null) {
    contador6.textContent = `Sumatoria: ${promedioTotal}`;
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
    span.textContent = "";
  });
});
