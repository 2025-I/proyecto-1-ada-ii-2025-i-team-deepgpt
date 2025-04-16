function greedyPartyInvite(n, problems) {
    const results = [];
  
    for (let idx = 0; idx < n; idx++) {
      const { m, matrix, convivencias } = problems[idx];
  
      const invitados = new Array(m).fill(0);
      const bloqueados = new Array(m).fill(false);
  
      const hijos = Array.from({ length: m }, () => []);
      const padres = Array.from({ length: m }, () => []);
  
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
          if (matrix[i][j] === 1) {
            hijos[i].push(j);
            padres[j].push(i);
          }
        }
      }
  
      const candidatos = convivencias
        .map((calif, i) => ({ i, calif }))
        .sort((a, b) => b.calif - a.calif);

        for (const { i } of candidatos) {
            let conflict = false;
          
            for (const h of hijos[i]) {
              if (invitados[h] === 1) {
                conflict = true;
                break;
              }
            }
          
            if (!conflict) {
              for (const p of padres[i]) {
                if (invitados[p] === 1) {
                  conflict = true;
                  break;
                }
              }
            }
          
            if (!conflict) {
              invitados[i] = 1;
            }
          }
  
      const total = invitados.reduce((sum, val, i) => sum + (val === 1 ? convivencias[i] : 0), 0);
      results.push({ invitados, total });
    }
  
    return results;
  }
module.exports = {
    greedyPartyInvite,
};  