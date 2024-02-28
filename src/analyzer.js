const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let texto = text.value.trim();
  let contadorPalabras = 0;
  const caracteresInvalidos = ["..",".","#",",",";",":","?","!","¡","¿","'","...","-","_"];
  let palabrasTipoString = [];
  let numerosTipoString = [];

  const palabras = texto.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    if (!caracteresInvalidos.includes(palabras[i])) {
      if (!isNaN(palabras[i])) {
        numerosTipoString.push(palabras[i]);
      } else {
        palabrasTipoString.push(palabras[i]);
      }
    }
  }
  contadorPalabras = palabrasTipoString.length;

    const contador1 = document.querySelector('ul li.contadorP');
    contador1.textContent = `Palabras: ${contadorPalabras}`;

    console.log(contador1.textContent);
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let texto = text.value;
    let contadorCaracteres = texto.length;
  
    const contador2 = document.querySelector('ul li.contadorC');
    if (contador2 !== null) {
      contador2.textContent = `Caracteres: ${contadorCaracteres}`;
    } else {
      console.error("Error: Elemento con clase 'contadorC' no encontrado");
    }
    console.log(contador2.textContent);
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let texto = text.value;
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
    return contadorCaracteresSinEspacio;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let texto = text.value.trim();
    let palabras = texto.split(" ");
    let largoTotal = 0;

    for (let i = 0; i < palabras.length; i++) {
      largoTotal += palabras[i].length;
    }

    const promedioTotal = (largoTotal / palabras.length).toFixed(2);

    let contador6 = document.querySelector('ul li.contadorPR');
  if (contador6 !== null) {
    contador6.textContent = `Promedio de longitud:: ${promedioTotal}`;
  } else {
    console.error("Error: Elemento 'Promedio de longitud:' no encontrado");
  }
  console.log(contador6.textContent); 
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let texto = text.value;
    const numeros = [];
  
    for (let i = 0; i < texto.length; i++) {
      if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(texto[i])) {
        let numero = "";
        do {
          numero += texto[i];
          i++;
        } while (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(texto[i]) && i < texto.length);
        if (numero !== "") {
          numeros.push(Number(numero)); 
        }
        i--;
      }
    }
    const contadorNumeros = numeros.length;
  
    let contador4 = document.querySelector('ul li.contadorN');
    if (contador4 !== null) {
      contador4.textContent = `Números: ${contadorNumeros}`;
    } else {
      console.error("Error: Elemento 'Numeros' no encontrado");
    }
    return numeros; 
  },
  getNumberSum: (numeros) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    let contador5 = document.querySelector('ul li.contadorS');
    if (contador5 !== null) {
      contador5.textContent = `Sumatoria: ${suma}`;
    } else {
      console.error("Error: Elemento 'sumatoriaNumeros' no encontrado");
    }
  
    console.log(contador5.textContent); 
  },
};

export default analyzer;
