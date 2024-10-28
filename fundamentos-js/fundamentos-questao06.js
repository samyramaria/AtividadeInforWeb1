function numeroMaisFrequente(arr) {
    const contagem = {};
    arr.forEach((num) => {
      contagem[num] = (contagem[num] || 0) + 1;
    });
  
    let maxNum = null;
    let maxCount = 0;
  
    for (const num in contagem) {
      if (contagem[num] > maxCount) {
        maxCount = contagem[num];
        maxNum = num;
      }
    }
    return maxNum;
  }
  
  console.log(numeroMaisFrequente([1, 2, 3, 2, 1, 2])); // 2
  