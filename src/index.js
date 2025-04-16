console.log("Hello, world!");

const { greedyPartyInvite } = require("./business-party/greedy-solution");

const problems = [
    {
      m: 5,
      matrix: [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0]
      ],
      convivencias: [10, 30, 15, 5, 8]
    },
    {
      m: 6,
      matrix: [
        [0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0]
      ],
      convivencias: [12, 21, 5, 10, 8, 7]
    }
  ];

  const resultados = greedyPartyInvite(2, problems);

  for (const { invitados, total } of resultados) {
    console.log(invitados.join(" ") + " " + total);
  }