function converterTemperatura(temperatura, escala) {
    if (escala === "C") {
      return (temperatura * 9) / 5 + 32; // Celsius para Fahrenheit
    } else if (escala === "F") {
      return ((temperatura - 32) * 5) / 9; // Fahrenheit para Celsius
    }
  }
  
  console.log(converterTemperatura(100, "C")); // 212
  console.log(converterTemperatura(32, "F")); // 0
  