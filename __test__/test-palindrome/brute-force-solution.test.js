const {
  isPalindromeBruteForce,
} = require("../../src/palindrome/brute-force-solution.js");

describe("Brute Force Solution - Palíndromos en textos largos", () => {
    test("Palíndromo simple en texto", () => {
        const input = `Aquel anciano nos contó una historia mientras el fuego crepitaba. 
        Decía que una vez, cuando aún era joven, escuchó a una mujer susurrar:
        'Somos o no somos'. Esa frase se le quedó grabada en la memoria para siempre.`;
        const result = isPalindromeBruteForce(input);
        expect(result).toBe("somosonosomos");
    });

    test("Palíndromo con caracteres especiales en texto", () => {
        const input = `En una vieja carta, cuidadosamente doblada y amarillenta por el tiempo, 
        se leía: 'Amo la pacífica paloma'. No había firma, solo esa frase y una flor prensada.`;
        const result = isPalindromeBruteForce(input);
        expect(result).toBe("amolapacificapaloma");
    });

    test("Palíndromo con números en texto", () => {
        const input = `Al revisar las claves antiguas, encontraron una serie numérica grabada en una caja fuerte:
        12321. Nadie supo su origen, pero la combinación seguía funcionando.`;
        const result = isPalindromeBruteForce(input);
        expect(result).toBe("12321");
    });

    test("Palíndromo mixto con tildes en texto", () => {
        const input = `En uno de sus viajes por la selva, el explorador halló un mensaje tallado en un tronco:
        'La ruta nos aportó otro paso natural'. Decidió seguir esa ruta y encontró ruinas desconocidas.`;
        const result = isPalindromeBruteForce(input);
        expect(result).toBe("larutanosaportootropasonatural");
    });

    test("Detecta solo el palíndromo dentro del texto largo", () => {
        const input = `En la cima de aquella montaña, donde el viento soplaba con fuerza y el eco respondía con voces antiguas, alguien escribió un mensaje en la piedra:
        ¿Acaso hubo búhos acá? Nadie supo quién lo hizo, pero desde entonces, los pastores evitaban pasar por ahí al anochecer. Decían que los árboles murmuraban secretos y que los búhos observaban desde las sombras, como si respondieran a una pregunta que el tiempo olvidó.`;
        const result = isPalindromeBruteForce(input);
        expect(result).toBe("acasohubobuhosaca");
    });
});
