// 1. Normalización de la cadena
function normalizarCadena(cadena) {
    return cadena
      .toLowerCase()
      .split('')
      .filter(c => /[a-z0-9]/.test(c));
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
  
  // 4. Prueba con ejemplo
  const entrada = "Maria dijo Yo dono rosas, oro no doy por ello el la dejo.";
  const resultado = encontrarPalindromoVoraz(entrada);
  
  console.log("Resultado:", resultado);
  