const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text.trim();
    let contadorPalabras = 0;
    const caracteresInvalidos = ['.,;:"«»[]{}()¿?¡!-', ',', '.', '"', '«', '»', '[', ']', '{', '}', '(', ')', '¿', '?', '¡', '!', '"       "', "       ", '""', "'", '..', '.', '#', ',', ';', ':', '?', '!', '¡', '¿', '\'', '...', '-', '_'];
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
      let contadorCaracteres = 0;

      for (let i = 0; i < text.length; i++) {
        if (text[i] !== '"' || (i < text.length - 1 && text[i] === '"' && text[i + 1] !== '"')) {
          contadorCaracteres++;
        }
      }
      return contadorCaracteres;
    }
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    let contadorCaracteresSinEspacio = 0;
    const caracteresInvalidos = ['.,;:"«»[]{}()¿?¡!-', ',', '.', '"', '«', '»', '[', ']', '{', '}', '(', ')', '¿', '?', '¡', '!', '"       "', "       ", '""', "'", '..', '.', '#', ',', ';', ':', '?', '!', '¡', '¿', '...', '-', '_'];

    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) !== " " && !caracteresInvalidos.includes(text.charAt(i))) {
        contadorCaracteresSinEspacio++;
      }
    }
    return contadorCaracteresSinEspacio;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numeros = [];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
  
    for (let i = 0; i < text.length; i++) {
      if (num.includes(text[i])) {
        let numero = "";
  
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
    const contadorNumeros = numeros.length;
    console.log(contadorNumeros);
    return contadorNumeros;
  },
  
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    text = text.trim();
    const palabras = text.split(" ");
    let largoTotal = 0;
    const caracteresInvalidos = ['.,;:"«»[]{}()¿?¡!-', ',', '.', '"', '«', '»', '[', ']', '{', '}', '(', ')', '¿', '?', '¡', '!', '"       "', "       ", '""', "'", '..', '.', '#', ',', ';', ':', '?', '!', '¡', '¿', '...', '-', '_'];

    for (let i = 0; i < palabras.length; i++) {
      if (!caracteresInvalidos.includes(text.charAt(i))) {
        largoTotal += palabras[i].length;
      }
    }
    const promedioTotal = parseFloat((largoTotal / palabras.length).toFixed(2));

    return promedioTotal;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = [];
    const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

    for (let i = 0; i < text.length; i++) {
      if (num.includes(text[i])) {
        let numero = "";

        do {
          numero += text[i];
          i++;
        } while (num.includes(text[i]) && i < text.length);

        if (numero.endsWith('.')) {
          numero = numero.slice(0, -1);
        }

        if (!isNaN(Number(numero.trim())) && (text[i] === undefined || !isNaN(text[i]))) {
          numbers.push(Number(numero));
        }
        i--;
      }
    }
    const suma = numbers.reduce((total, valor) => total + valor, 0);
    return suma;
  },
};

export default analyzer;
