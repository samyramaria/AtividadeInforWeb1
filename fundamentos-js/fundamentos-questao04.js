function verificarNumeros(num1, num2) {
    return (
      num1 === 30 ||
      num2 === 30 ||
      num1 + num2 === 30 ||
      (num1 === 12 && num2 === 12)
    );
  }
  
  console.log(verificarNumeros(12, 12)); // true
  console.log(verificarNumeros(10, 20)); // false
  