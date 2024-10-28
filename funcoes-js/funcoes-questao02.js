function contaVogaisConsoantes(frase) {
    const vogais = "aeiouAEIOU";
    let qtdVogais = 0;
    let qtdConsoantes = 0;

    for (let char of frase) {
        if (/[a-zA-Z]/.test(char)) {
            if (vogais.includes(char)) {
                qtdVogais += 1;
            } else {
                qtdConsoantes += 1;
            }
        }
    }

    return { qtdVogais, qtdConsoantes };
}

const frase = "Vivendo o momento, sem medo do futuro.";
const { qtdVogais, qtdConsoantes } = contaVogaisConsoantes(frase);
console.log(`Vogais: ${qtdVogais}, Consoantes: ${qtdConsoantes}`);
