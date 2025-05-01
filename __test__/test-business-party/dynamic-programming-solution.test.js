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
    expect(result.selected.sort()).toEqual([0]);
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
    expect(result.selected.sort()).toEqual([0, 2]);
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
    expect(result.selected.sort()).toEqual([0, 3, 4, 5, 6]);
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
    expect(result.selected.sort()).toEqual([1, 2, 3, 4]);
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
    expect(result.selected.sort()).toEqual([0]);
  });
});
