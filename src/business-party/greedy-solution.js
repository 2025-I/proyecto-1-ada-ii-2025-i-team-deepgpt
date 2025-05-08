function greedySolutionPartyInvite(n, problems) {
  const results = [];

  for (let idx = 0; idx < n; idx++) {
    const { m, matrix, convivencias: coexistence } = problems[idx];
    const guests = new Array(m).fill(0);
    const children = Array.from({ length: m }, () => []);
    const parents = Array.from({ length: m }, () => []);

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 1) {
          children[i].push(j);
          parents[j].push(i);
        }
      }
    }

    const candidates = coexistence
      .map((calif, i) => ({ i, calif }))
      .sort((a, b) => b.calif - a.calif);

    for (const { i } of candidates) {
      const invitedSubordinate = children[i].some((h) => guests[h] === 1);
      const invitedBoss = parents[i].some((p) => guests[p] === 1);

      if (!invitedSubordinate && !invitedBoss) {
        guests[i] = 1;
      }
    }

    const total = guests.reduce(
      (sum, val, i) => sum + (val === 1 ? coexistence[i] : 0),
      0
    );
    results.push({ selected: guests, total });
  }

  return results;
}
module.exports = { greedySolutionPartyInvite };
