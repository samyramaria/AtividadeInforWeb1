function compararNumeros(num1, num2) {
    if (num1 % 2 !== 0) {
      console.log(`${num1} é ímpar e considerado maior.`);
    } else if (num2 % 2 !== 0) {
      console.log(`${num2} é ímpar e considerado maior.`);
    } else if (num1 > num2) {
      console.log(`${num1} é o maior.`);
    } else if (num2 > num1) {
      console.log(`${num2} é o maior.`);
    } else {
      console.log(`Os números são iguais.`);
    }
  }
  
  compararNumeros(4, 3);
  compararNumeros(5, 2);
  