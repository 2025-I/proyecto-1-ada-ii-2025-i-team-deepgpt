const {
  businessPartyDynamic,
} = require("../../src/business-party/dynamic-programming-soluction.js");

describe("Dynamic Programming Solution", () => {
  test("Árbol simple de 3 nodos", () => {
    const matrix = [
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ];
    const coexistence = [5, 1, 4];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(5);
    expect(result.selected).toEqual([1, 0, 0]);
  });

  test("Árbol tipo línea de 4 nodos", () => {
    const matrix = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ];
    const coexistence = [1, 2, 9, 4];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(10);
    expect(result.selected).toEqual([1, 0, 1, 0]);
  });

  test("Árbol binario completo de 7 nodos", () => {
    const matrix = [
      [0, 1, 1, 0, 0, 0, 0],
      [1, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0],
    ];
    const coexistence = [10, 1, 1, 10, 10, 10, 10];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(50);
    expect(result.selected).toEqual([1, 0, 0, 1, 1, 1, 1]);
  });

  test("Árbol estrella de 5 nodos", () => {
    const matrix = [
      [0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ];
    const coexistence = [5, 3, 3, 3, 3];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(12);
    expect(result.selected).toEqual([0, 1, 1, 1, 1]);
  });

  test("Raíz alta, hijos bajos", () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
    ];
    const coexistence = [20, 1, 1, 1];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(20);
    expect(result.selected).toEqual([1, 0, 0, 0]);
  });

  test("Árbol tipo línea de 10 nodos con raíz al medio", () => {
    const matrix = [
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ];
    const coexistence = [3, 5, 3, 5, 3, 5, 3, 5, 3, 5];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(25);
    expect(result.selected).toEqual([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]);
  });

  test("Árbol binario completo de 7 nodos con nodos permutados", () => {
    const matrix = [
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
    ];
    const coexistence = [10, 1, 10, 1, 10, 1, 10];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.selected).toEqual([1, 0, 0, 0, 1, 0, 0]);
    expect(result.total).toBe(20);
  });

  test("Árbol aleatorio de 12 nodos", () => {
    const matrix = [
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    ];
    const coexistence = [2, 3, 4, 1, 5, 2, 8, 2, 1, 2, 3, 4];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(26);
    expect(result.selected).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1]);
  });

  test("Árbol aleatorio de 20 nodos", () => {
    const matrix = [
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    ];

    const coexistence = [
      4, 2, 5, 1, 8, 3, 7, 6, 4, 2, 9, 1, 3, 7, 5, 2, 6, 1, 4, 3,
    ];

    const result = businessPartyDynamic(matrix, coexistence);

    expect(result.total).toBe(50);
    expect(result.selected).toEqual([
      1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,
    ]);
  });
});
