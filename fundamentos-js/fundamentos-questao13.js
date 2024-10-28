function somaCubos(lista) {
    return lista.reduce((soma, num) => soma + Math.pow(num, 3), 0);
  }
  
  console.log(somaCubos([1, 2, 3])); // 36
  