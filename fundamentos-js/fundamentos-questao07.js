function modificarFrase(frase) {
    return frase
      .split(" ")
      .map((palavra) => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
      })
      .join(" ");
  }
  
  console.log(modificarFrase("Olá Mundo JavaScript")); // OLÁ mundo javascript
  