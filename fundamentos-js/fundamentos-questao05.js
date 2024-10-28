function checarNumeros(num1, num2, num3) {
    if ([num1, num2, num3].every((num) => num >= 50 && num <= 99)) {
      console.log("Todos os números estão entre 50 e 99.");
    } else {
      console.log("Erro: Um ou mais números não estão no intervalo.");
    }
  }
  
  checarNumeros(55, 70, 85); // Sucesso
  checarNumeros(40, 70, 85); // Erro
  