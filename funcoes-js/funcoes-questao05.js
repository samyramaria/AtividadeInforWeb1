function maiorPalavra(frase) {
    const palavras = frase.split(" ");
    const maior = palavras.reduce((a, b) => a.length >= b.length ? a : b);
    return maior;
}

const frase = "Quem acredita sempre alcança!";
console.log(maiorPalavra(frase)); 
