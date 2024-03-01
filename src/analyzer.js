const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text.trim();
    let contadorPalabras = 0;
    const caracteresInvalidos = ["..", ".", "#", ",", ";", ":", "?", "!", "¡", "¿", "'", "...", "-", "_"];
    const palabrasTipoString = [];
    const numerosTipoString = [];
    const palabras = text.split(" ");

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

    return contadorPalabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.  

    if (typeof text === 'string') {
      const contadorCaracteres = text.length;

      return contadorCaracteres;
    }
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let contadorCaracteresSinEspacio = 0;
    const caracteresInvalidos = ["..", ".", "#", ",", ";", ":", "?", "!", "¡", "¿", "'", "...", "-", "_"];

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) !== " " && !caracteresInvalidos.includes(text.charAt(i))) {
        contadorCaracteresSinEspacio++;
      }
    }
    return contadorCaracteresSinEspacio;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = text.trim();
    const palabras = text.split(" ");
    let largoTotal = 0;

    for (let i = 0; i < palabras.length; i++) {
      largoTotal += palabras[i].length;
    }

    const promedioTotal = parseFloat((largoTotal / palabras.length).toFixed(2));

    return promedioTotal;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = [];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

    for (let i = 0; i < text.length; i++) {
      if (num.includes(text[i])) {
        let numero = "";
        const entreLetrasAntes = i > 0 && isNaN(text[i - 1]);
        const entreLetrasDespues = i + 1 === text.length || isNaN(text[i + 1]);

        if (!entreLetrasAntes && !entreLetrasDespues) {
          do {
            numero += text[i];
            i++;
          } while (num.includes(text[i]) && i < text.length);

          if (numero.endsWith('.')) {
            numero = numero.slice(0, -1);
          }

          if (!isNaN(Number(numero.trim())) && (text[i] === undefined || !isNaN(text[i]))) {
            numeros.push(Number(numero));
          }
          i--;
        }
      }
    }
    const contadorNumeros = numeros.length;

    return contadorNumeros;
  },

  getNumberSum: (numeros) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  },
};

export default analyzer;
