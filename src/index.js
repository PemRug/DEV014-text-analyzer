import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//Convertir string en number del text area

const inputText = document.querySelector('textarea[name="user-input"]');
inputText.addEventListener('input', () => {
    contarPalabras(inputText);
    console.log(inputText);
});

function contarPalabras(inputText){
    let texto = inputText.value;
    let separadorPalabras = texto.trim().split(/\b\w+\b/g);

    let numeros = separadorPalabras.map(texto => Number(texto));
    let contadorPalabras=0;

    for (let texto of separadorPalabras) {
        contadorPalabras++;
    }
    
    const contador1 =document.getElementById('contPalabras')
    contador1.textContent = "Palabras: " + contadorPalabras;

    console.log(contador1.textContent);
}
