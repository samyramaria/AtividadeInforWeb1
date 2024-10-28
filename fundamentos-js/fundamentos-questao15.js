function ordenarNumeros(lista) {
    return lista.sort((a, b) => a - b);
  }
  
  console.log(ordenarNumeros([5, 3, 8, 1])); // [1, 3, 5, 8]
  