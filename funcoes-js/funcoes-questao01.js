function inverteNumero(numero) {
    const numeroStr = numero.toString();
    const invertido = numeroStr.split('').reverse().join('');
    return parseInt(invertido);
}

console.log(inverteNumero(12356)); 
