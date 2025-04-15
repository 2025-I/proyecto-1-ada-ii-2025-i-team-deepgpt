const fs = require('fs');
const path = require('path');
const { isPalindromeBruteForce } = require('./palindrome/brute-force-solution.js');


// Ruta del archivo
const filePath = path.join(__dirname, './data', 'phrases.txt');

// Leer el archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const lines = data.trim().split('\n');
    const total = parseInt(lines[0]);

    if (isNaN(total) || lines.length - 1 < total) {
        console.error('El archivo no tiene el formato correcto.');
        return;
    }

    const frases = lines.slice(1, total + 1);

    frases.forEach((frase, index) => {
        const longest = isPalindromeBruteForce(frase);
        console.log(`Frase ${index + 1}: ${longest}`);
    });
});
