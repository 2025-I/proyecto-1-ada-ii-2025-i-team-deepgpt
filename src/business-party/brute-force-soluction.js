function businessPartyBruteForce(matrix, coexistence) {
  const nodos = matrix.length;
  const set = Array.from({ length: nodos }, (_, i) => i);
  const combinations = [];

  function generateSets(index, current) {
    if (index === nodos) {
      const isValid = current.every((node) => {
        return current.every((otherNode) => {
          return matrix[node][otherNode] === 0;
        });
      });
      if (isValid) {
        combinations.push([...current]);
      }
      return;
    }

    generateSets(index + 1, current);

    current.push(set[index]);
    generateSets(index + 1, current);
    current.pop();
  }

  generateSets(0, []);

  const valueCombinations = combinations
    .map((combination) => {
      return {
        total: combination.reduce((acc, node) => acc + coexistence[node], 0),
        selected: Array.from({ length: nodos }, (_, i) =>
          combination.includes(i) ? 1 : 0
        ),
      };
    })
    .sort((a, b) => b.total - a.total);

  return valueCombinations[0];
}

module.exports = { businessPartyBruteForce };
