const {
  greedySolutionPartyInvite,
} = require("../../src/business-party/greedy-solution.js");

describe("Greedy Programming Solution", () => {
  test("Problema simple de 1 problema con 3 nodos", () => {
    const problems = [
      {
        m: 3,
        matrix: [
          [0, 1, 1],
          [1, 0, 0],
          [1, 0, 0],
        ],
        convivencias: [5, 1, 4],
      },
    ];

    const result = greedySolutionPartyInvite(problems.length, problems);

    expect(result[0].total).toBe(5);
    expect(result[0].invitados).toEqual([1, 0, 0]);
  });

  test("Problema simple de 1 problema con 4 nodos", () => {
    const problems = [
      {
        m: 4,
        matrix: [
          [0, 1, 0, 0],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [0, 0, 1, 0],
        ],
        convivencias: [1, 2, 9, 4],
      },
    ];

    const result = greedySolutionPartyInvite(problems.length, problems);

    expect(result[0].total).toBe(10);
    expect(result[0].invitados).toEqual([1, 0, 1, 0]);
  });

  test("Problema con dos problemas", () => {
    const problems = [
      {
        m: 4,
        matrix: [
          [0, 1, 0, 0],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [0, 0, 1, 0],
        ],
        convivencias: [1, 2, 9, 4],
      },
      {
        m: 3,
        matrix: [
          [0, 1, 1],
          [1, 0, 0],
          [1, 0, 0],
        ],
        convivencias: [5, 1, 4],
      },
    ];

    const result = greedySolutionPartyInvite(problems.length, problems);

    expect(result[0].total).toBe(10);
    expect(result[0].invitados).toEqual([1, 0, 1, 0]);
    expect(result[1].total).toBe(5);
    expect(result[1].invitados).toEqual([1, 0, 0]);
  });

  test("Problema con 4 problemas de diferentes tamaños de matrices", () => {
    const problems = [
      {
        m: 4,
        matrix: [
          [0, 1, 0, 0],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [0, 0, 1, 0],
        ],
        convivencias: [1, 2, 9, 4],
      },
      {
        m: 3,
        matrix: [
          [0, 1, 1],
          [1, 0, 0],
          [1, 0, 0],
        ],
        convivencias: [5, 1, 4],
      },
      {
        m: 7,
        matrix: [
          [0, 1, 1, 1, 1, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ],
        convivencias: [10, 1, 1, 10, 10, 10, 10],
      },
      {
        m: 6,
        matrix: [
          [0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0],
          [0, 1, 0, 0, 0, 0],
          [0, 0, 1, 0, 0, 0],
          [0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 1, 0],
        ],
        convivencias: [15, 20, 7, 30, 12, 18],
      },
    ];

    const result = greedySolutionPartyInvite(problems.length, problems);

    expect(result[0].total).toBe(10);
    expect(result[0].invitados).toEqual([1, 0, 1, 0]);

    expect(result[1].total).toBe(5);
    expect(result[1].invitados).toEqual([1, 0, 0]);

    expect(result[2].total).toBe(30);
    expect(result[2].invitados).toEqual([1, 0, 0, 0, 0, 1, 1]);

    expect(result[3].total).toBe(68);
    expect(result[3].invitados).toEqual([0, 1, 0, 1, 0, 1]);
  });
});
