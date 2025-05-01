function businessPartyDynamic(matrix, coexistence) {
  const nodos = coexistence.length;
  const list = Array.from({ length: nodos }, () => []);

  for (let i = 0; i < nodos; i++) {
    for (let j = 0; j < nodos; j++) {
      if (matrix[i][j]) {
        list[i].push(j);
      }
    }
  }

  const visited = new Array(nodos).fill(false);
  const dynamicTable = Array.from({ length: nodos }, () => [0, 0]);
  const selected = Array.from({ length: nodos }, () => [[], []]);

  function deepFirstSearch(u, parent = -1) {
    visited[u] = true;

    dynamicTable[u][1] = coexistence[u];
    selected[u][1] = [u];

    for (const v of list[u]) {
      if (v === parent || visited[v]) continue;

      deepFirstSearch(v, u);

      if (dynamicTable[v][0] > dynamicTable[v][1]) {
        dynamicTable[u][0] += dynamicTable[v][0];
        selected[u][0] = selected[u][0].concat(selected[v][0]);
      } else {
        dynamicTable[u][0] += dynamicTable[v][1];
        selected[u][0] = selected[u][0].concat(selected[v][1]);
      }

      dynamicTable[u][1] += dynamicTable[v][0];
      selected[u][1] = selected[u][1].concat(selected[v][0]);
    }
  }

  deepFirstSearch(0);

  if (dynamicTable[0][0] > dynamicTable[0][1]) {
    return {
      total: dynamicTable[0][0],
      selected: selected[0][0].sort((a, b) => a - b),
    };
  } else {
    return {
      total: dynamicTable[0][1],
      selected: selected[0][1].sort((a, b) => a - b),
    };
  }
}

module.exports = { businessPartyDynamic };
