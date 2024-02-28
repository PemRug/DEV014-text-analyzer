import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

let text = document.querySelector('textarea[name="user-input"]');
let numeros;
text.addEventListener('input', () => {
  numeros = analyzer.getNumberCount(text);
    analyzer.getWordCount(text);
    analyzer.getCharacterCount(text);
    analyzer.getCharacterCountExcludingSpaces(text);
    analyzer.getNumberSum(numeros);
    analyzer.getAverageWordLength(text); 
});

const boton = document.getElementById("reset-button");
const lisOriginal = '<li class="contadorP">Palabras: </li><li class="contadorC">Caractéres:</li><li class="contadorCSE">Caractéres sin espacios:</li><li class="contadorN">Números:</li><li class="contadorS">Sumatoria:</li><li class="contadorPR">Promedio de longitud:</li>'
boton.addEventListener('click', () => {
    text.value = " ";
    const lis = document.querySelector('ul');
    if (lis) {
      lis.innerHTML = lisOriginal;
    }
});
