import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Convertir string en enteros del text area

let inputText = document.querySelector('textarea[name="user-input"]');
inputText.addEventListener('input', () => {
    getWordCount(inputText);
    getCharacterCount(inputText);
    getCharacterCountExcludingSpaces(inputText);
    getNumbersCount(inputText);
    getNumberSum(inputText);
    console.log(inputText);
});

const boton = document.getElementById("reset-button");
boton.addEventListener('click', () => {
    inputText.value = " ";
});

//Función Contador de Palabras

function getWordCount(inputText) {
    let texto = inputText.value;
    texto= texto.trim();
    texto = texto.replace(/\d/g, "");
    let separadorPalabras = texto.split(/\b\w+\b/g);
    let contadorPalabras = -1;
  
    separadorPalabras.forEach(() => {
      contadorPalabras++;
    });
  
    const contador1 = document.querySelector('ul li.contadorP');
    contador1.textContent = `Palabras: ${contadorPalabras}`;

    console.log(contador1.textContent);
}

//Función Contador de Caractéres

function getCharacterCount(inputText) {
    let texto = inputText.value;
    texto= texto.trim();
    let contadorCaracteres = texto.length;
  
    const contador2 = document.querySelector('ul li.contadorC');
    if (contador2 !== null) {
      contador2.textContent = `Caracteres: ${contadorCaracteres}`;
    } else {
      console.error("Error: Elemento con clase 'contadorC' no encontrado");
    }
    console.log(contador2.textContent);
}

//Función Contador de Caractéres Sin Espacios

function getCharacterCountExcludingSpaces(inputText) {
let texto = inputText.value;
texto = texto.replace(/\s/g, "");
let contadorCaracteresSinEspacio = 0;

for (let i=0; i < texto.length; i++) {
  if (texto.charAt(i) !== " ") {
    contadorCaracteresSinEspacio++;
  }
}

const contador3 = document.querySelector('ul li.contadorCSE');
  if (contador3 !== null) { 
  contador3.textContent = `Caracteres sin espacios: ${contadorCaracteresSinEspacio}`;
} else {
  console.error("Error: Elemento con clase 'contadorCSE' no encontrado");
}
console.log(contador3.textContent);
}

//Función Contador de Números

function getNumbersCount(inputText) {
  let texto = inputText.value;
  let contadorNumeros = 0;
  
for (let i=0; i <texto.length; i++) {
  if(!isNaN(Number(texto.charAt(i))) && texto.charAt(i) !== " ") {
    contadorNumeros++;
  }
}
let contador4 = document.querySelector('ul li.contadorN');
if (contador4 !== null) {
  contador4.textContent = `Números: ${contadorNumeros}`;
}  else {
    console.error("Error: Elemento 'Numeros' no econtrado");
  }
  console.log(contador4.textContent);
}

//Función Sumatoria de Número
function getNumberSum(inputText) {
  let texto = inputText.value;
  let sumatoriaNumeros = getNumbersCount(inputText); 
  let suma = 0;

 
  for (let i = 0; i < texto.length; i++) {
    if (!isNaN(Number(texto.charAt(i))) && texto.charAt(i) !== " ") {
      suma += Number(texto.charAt(i));
    }
  }

  let contador5 = document.querySelector('ul li.contadorS');
  if (contador5 !== null) {
    contador5.textContent = `Sumatoria: ${suma}`;
  } else {
    console.error("Error: Elemento 'sumatoriaNumeros' no encontrado");
  }

  console.log(contador5.textContent);
}