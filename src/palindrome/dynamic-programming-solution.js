function normalizeString(str) {
    return str
      .toLowerCase()
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/[^a-z0-9]/g, '');
  }
  
  function longestPalindromicSubstring(entrada) {
    const normalized = normalizeString(entrada);
    const n = normalized.length;
    if (n === 0) return "";
  
    // Tabla de programación dinámica
    const dp = Array.from({ length: n }, () => Array(n).fill(false));
  
    let maxLength = 1;
    let start = 0;
  
    // Todas las subcadenas de un solo carácter son palíndromos
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }
  
    // Subcadenas de longitud 2
    for (let i = 0; i < n - 1; i++) {
      if (normalized[i] === normalized[i + 1]) {
        dp[i][i + 1] = true;
        start = i;
        maxLength = 2;
      }
    }
  
    // Subcadenas de longitud mayor a 2
    for (let length = 3; length <= n; length++) {
      for (let i = 0; i <= n - length; i++) {
        const j = i + length - 1;
  
        if (normalized[i] === normalized[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          start = i;
          maxLength = length;
        }
      }
    }
  
    return normalized.slice(start, start + maxLength);
  }
  
  module.exports = {
    longestPalindromicSubstring,
  };
  
  

