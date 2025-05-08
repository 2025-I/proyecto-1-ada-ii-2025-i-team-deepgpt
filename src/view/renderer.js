const { ipcRenderer } = require("electron");

let archivoSeleccionado = null; 


document.getElementById("chooseFileBtn").addEventListener("click", async () => {
  const result = await ipcRenderer.invoke("select-file");
  if (result) {
    archivoSeleccionado = result; 
    document.getElementById("filePath").innerText = `Archivo: ${result.path}`;
  } else {
    archivoSeleccionado = null;
    document.getElementById("filePath").innerText = "No se seleccionó archivo.";
  }
});

const button = document.getElementById("solveBtn");
button.addEventListener("click", async () => {
  if (!archivoSeleccionado) {
    alert("Primero debes seleccionar un archivo.");
    return;
  }

  const problema = document.getElementById("problema").value;
  const solucion = document.getElementById("solucion").value;
  let input = archivoSeleccionado.content;
  alert(`Problema: ${problema}, Solución: ${solucion}`);
  if (problema === "p2") {
    input = processFileBusinessParty(input);
  } else {
    input = processFilePalindrome(input);
  }

  const result = await ipcRenderer.invoke("ejecutar-solucion", {
    problema,
    solucion,
    input,
  });
});

function processFileBusinessParty(content) {
  const lines = content
    .trim()
    .split("\n")
    .map((l) => l.trim());
  let index = 0;

  const n = parseInt(lines[index++], 10);
  const problems = [];

  for (let p = 0; p < n; p++) {
    const m = parseInt(lines[index++], 10); 
    const matrix = [];

    for (let i = 0; i < m; i++) {
      matrix.push(lines[index++].split(" ").map(Number));
    }

    const convivencias = lines[index++].split(" ").map(Number);

    problems.push({ m, matrix, convivencias });
  }

  return { n, problems };
}

function processFilePalindrome(content) {
  const lines = content
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");
  const n = parseInt(lines[0], 10);
  const problems = lines.slice(1, n + 1);
  return { n, problems };
}
