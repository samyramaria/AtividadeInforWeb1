function encontraMaiorMenor(listaNumeros) {
    const maior = Math.max(...listaNumeros);
    const menor = Math.min(...listaNumeros);
    return { maior, menor };
}

const lista = [10, 23, 5, 97, 54, 32, 76, 88, 12, 43];
const { maior, menor } = encontraMaiorMenor(lista);
console.log(`Maior: ${maior}, Menor: ${menor}`);
