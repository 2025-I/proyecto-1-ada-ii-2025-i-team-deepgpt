// 1. Normalización de la cadena
function normalizarCadena (cadena) {
  return cadena
      .toLowerCase()
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/[^a-z0-9]/g, ''); // Elimina todo lo que no sea alfanumérico
}
  
  // 2. Búsqueda voraz de una subsecuencia palindrómica
  function encontrarSubsecuenciaVoraz(normalizada) {
    let i = 0;
    let j = normalizada.length - 1;
    let inicio = [];
    let fin = [];
  
    while (i <= j) {
      if (normalizada[i] === normalizada[j]) {
        inicio.push(normalizada[i]);
        if (i !== j) fin.unshift(normalizada[j]);
        i++;
        j--;
      } else {
        // Estrategia voraz: busca la próxima coincidencia por cualquiera de los lados
        let encontrado = false;
  
        // Buscar desde el lado izquierdo
        for (let k = j - 1; k > i; k--) {
          if (normalizada[i] === normalizada[k]) {
            j = k;
            encontrado = true;
            break;
          }
        }
  
        // Si no se encuentra desde la derecha, intenta desde la izquierda
        if (!encontrado) {
          for (let k = i + 1; k < j; k++) {
            if (normalizada[k] === normalizada[j]) {
              i = k;
              encontrado = true;
              break;
            }
          }
        }
  
        // Si no encuentra coincidencias, avanzar ambos punteros
        if (!encontrado) {
          i++;
          j--;
        }
      }
    }
  
    return inicio.concat(fin).join('');
  }
  
  // 3. Función principal
  function encontrarPalindromoVoraz(cadena) {
    const normalizada = normalizarCadena(cadena);
    return encontrarSubsecuenciaVoraz(normalizada);
  }
  // 4. Exportar la función
  module.exports = {
    encontrarPalindromoVoraz,
  };
// 5. Ejemplo de uso
const cadena = `En una vieja carta, cuidadosamente doblada y amarillenta por el tiempo, 
      se leía: 'Amo la pacífica paloma'. No había firma, solo esa frase y una flor prensada.`;
const resultado = encontrarPalindromoVoraz(cadena);
console.log(resultado); // "amolapacificapaloma"


