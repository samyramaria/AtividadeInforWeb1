function converterTemperatura(temperatura, escala) {
    if (escala === "C") {
      return (temperatura * 9) / 5 + 32; 
    } else if (escala === "F") {
      return ((temperatura - 32) * 5) / 9; 
    }
  }
  
  console.log(converterTemperatura(100, "C")); 
  console.log(converterTemperatura(32, "F")); 
  