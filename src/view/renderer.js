const fs = require('fs');
const { ipcRenderer } = require("electron");

let archivoSeleccionado = null; // Guarda info del archivo seleccionado

// 1. Selección de archivo
document.getElementById("chooseFileBtn").addEventListener("click", async () => {
  const result = await ipcRenderer.invoke("select-file");
  if (result) {
    archivoSeleccionado = result; // Guardar contenido y path
    document.getElementById("filePath").innerText = `Archivo: ${result.path}`;

  } else {
    archivoSeleccionado = null;
    document.getElementById("filePath").innerText = "No se seleccionó archivo.";
  }
});

// 2. Actualizar opciones de solución según problema seleccionado
const problemaSelect = document.getElementById("problema");
const solucionSelect = document.getElementById("solucion");

problemaSelect.addEventListener("change", () => {
  const selectedProblema = problemaSelect.value;
  solucionSelect.innerHTML = "";

  if (selectedProblema === "p1") {
    const solucionesP1 = [
      { value: "sol1", text: "Solución 1 - Enfoque fuerza bruta" },
      { value: "sol2", text: "Solución 2 - Programación dinámica" },
      { value: "sol3", text: "Solución 3 - Programación Voraz" },
    ];
    solucionesP1.forEach(sol => {
      const option = document.createElement("option");
      option.value = sol.value;
      option.textContent = sol.text;
      solucionSelect.appendChild(option);
    });
  } else if (selectedProblema === "p2") {
    const solucionesP2 = [
      { value: "sol21", text: "Solución 1 - Fuerza bruta" },
      { value: "sol22", text: "Solución 2 - Dinámica" },
      { value: "sol23", text: "Solución 3 - Voraz" },
    ];
    solucionesP2.forEach(sol => {
      const option = document.createElement("option");
      option.value = sol.value;
      option.textContent = sol.text;
      solucionSelect.appendChild(option);
    });
  }
});

// 3. Ejecutar algoritmo al seleccionar una solución
solucionSelect.addEventListener("change", async () => {
  if (!archivoSeleccionado) {
    alert("Primero debes seleccionar un archivo.");
    return;
  }

  const problema = problemaSelect.value;
  const solucion = solucionSelect.value;
  let input = archivoSeleccionado.content;

  if (problema === "p2") {
    input = processFileBusinessParty(input);
  }else {
    input = processFilePalindrome(input);
  }

  const result = await ipcRenderer.invoke("ejecutar-solucion", {
    problema,
    solucion,
    input,
  });

  console.log("Resultado del algoritmo:", result);
  alert("Resultado mostrado en consola.");
});

// 4. Función para parsear el archivo de Fiesta de la Empresa

function processFileBusinessParty(content) {
  const lines = content.trim().split('\n').map(l => l.trim());
  let index = 0;

  const n = parseInt(lines[index++], 10); // Cantidad de problemas
  const problems = [];

  for (let p = 0; p < n; p++) {
    const m = parseInt(lines[index++], 10); // Cantidad de empleados
    const matrix = [];

    for (let i = 0; i < m; i++) {
      matrix.push(lines[index++].split(' ').map(Number));
    }

    const convivencias = lines[index++].split(' ').map(Number);

    problems.push({ m, matrix, convivencias });
  }

  return { n, problems };
}

// 5. funcion para parsear el archivo de Palíndromo más largo
function processFilePalindrome(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Dividir el contenido por líneas
        const lines = data.split('\n').map(line => line.trim()).filter(line => line !== '');
        
        const numberOfSentences = parseInt(lines[0], 10);  // Cantidad de frases
        const sentences = lines.slice(1, numberOfSentences + 1);  // Las frases a procesar

        return { sentences };
    });
}