function verificaPalavra(frase, palavra) {
    return frase.includes(palavra);
}

const frase = "A vida é uma maravilha";
const palavra = "maravilha";
console.log(verificaPalavra(frase, palavra)); // Saída: true
