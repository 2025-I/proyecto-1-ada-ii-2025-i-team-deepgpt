const {
    encontrarPalindromoVoraz,
  } = require("../../src/palindrome/greedy-solution.js");
  
  describe('encontrarPalindromoVoraz', () => {
    test('Frase con espacios y mayúsculas', () => {
      const input = "Aman a panama";
      const expected = "amanapanama";
      expect(encontrarPalindromoVoraz(input)).toBe(expected);
    });
    test("Frase con signos", () => {
      const input = `Alli, ves sevilla.`;
      const result = encontrarPalindromoVoraz(input);
      expect(result).toBe("allivessevilla");
    });
    test("palindromo con numeros", () => {
      const input = `123 21`;
      const result = encontrarPalindromoVoraz(input);
      expect(result).toBe("12321");
    });
  
    test("detectar el palindromo", () => {
      const input = `y le dijo: Somos o no somos`;
      const result = encontrarPalindromoVoraz(input);
      expect(result).toBe("somosonosomos");
    });
  
    test("Palíndromo con tildes", () => {
      const input = `Sé verlas al revés`;
      const result = encontrarPalindromoVoraz(input);
      expect(result).toBe("severlasalreves");
    });
      
  });