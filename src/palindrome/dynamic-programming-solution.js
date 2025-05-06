function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[^a-z0-9]/g, ''); // Elimina todo lo que no sea alfanumérico
}

function longestPalindromicSubstring(entrada) {
    const normalized = normalizeString(entrada);
    const n = normalized.length;
    if (n === 0) return "";

    let start = 0;
    let maxLength = 1;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    // Caso base: substrings de longitud 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Caso base: substrings de longitud 2
    for (let i = 0; i < n - 1; i++) {
        if (normalized[i] === normalized[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Substrings de longitud > 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            if (normalized[i] === normalized[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }

    return normalized.slice(start, start + maxLength);
}

module.exports = {
    longestPalindromicSubstring,
  };
  
