const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const {
  businessPartyDynamic,
} = require("../business-party/dynamic-programming-soluction.js");
const {
  businessPartyBruteForce,
} = require("../business-party/brute-force-soluction.js");
const {
  greedySolutionPartyInvite,
} = require("../business-party/greedy-solution.js");
const {
  isPalindromeBruteForce,
} = require("../palindrome/brute-force-solution.js");

function crearVentana() {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
}

function renderView() {
  app.whenReady().then(() => {
    crearVentana();

    // IPC para seleccionar archivo
    ipcMain.handle("select-file", async () => {
      const result = await dialog.showOpenDialog({
        filters: [{ name: "Text Files", extensions: ["txt"] }],
        properties: ["openFile"],
      });

      if (!result.canceled && result.filePaths.length > 0) {
        const content = fs.readFileSync(result.filePaths[0], "utf8");
        return { path: result.filePaths[0], content };
      }
      return null;
    });

    ipcMain.handle(
      "ejecutar-solucion",
      async (event, { problema, solucion, input }) => {
        try {
          const selectedAlgorithm = selectAlgorithm(problema, solucion);
          if (!selectedAlgorithm) {
            throw new Error("Algoritmo no encontrado.");
          }

          if (selectedAlgorithm === businessPartyBruteForce) {
            const result = input.problems.map((problem) => {
              return selectedAlgorithm(problem.matrix, problem.convivencias);
            });
            console.log("Resultado:", result);
            createFileResponse({
              problem: problema,
              content: result,
              filename: "brute-force",
            });
          }

          if (selectedAlgorithm === businessPartyDynamic) {
            const result = input.problems.map((problem) => {
              return selectedAlgorithm(problem.matrix, problem.convivencias);
            });
            console.log("Resultado:", result);
            createFileResponse({
              problem: problema,
              content: result,
              filename: "dynamic-programming",
            });
          }

          if (selectedAlgorithm === greedySolutionPartyInvite) {
            const result = selectedAlgorithm(input.n, input.problems);
            console.log("Resultado:", result);
            createFileResponse({
              problem: problema,
              content: result,
              filename: "greedy-solution",
            });
          }

          if (selectedAlgorithm === isPalindromeBruteForce) {
            const result = input.problems.map((word) => {
              return selectedAlgorithm(word);
            });
            console.log("Resultado:", result);
            createFileResponse({
              problem: problema,
              content: result,
              filename: "brute-force-palindrome",
            });
          }
        } catch (error) {
          console.error("Error al ejecutar la solución:", error.message);
          return "Error: " + error.message;
        }
      }
    );
  });
}

function selectAlgorithm(problem, solution) {
  let soluction = null;

  if (problem === "p2") {
    if (solution === "brute-force") {
      soluction = businessPartyBruteForce;
    } else if (solution === "greedy") {
      soluction = greedySolutionPartyInvite;
    } else if (solution === "dynamic") {
      soluction = businessPartyDynamic;
    }
  } else if (problem === "p1") {
    if (solution === "brute-force") {
      soluction = isPalindromeBruteForce;
    }
  }

  return soluction;
}

function createFileResponse({ problem, content, filename }) {
  if (problem === "p1") {
    const response = content.join("\n");

    const outputPath = path.join(app.getPath("desktop"), filename + ".txt");

    fs.writeFileSync(outputPath, response, "utf8");
    console.log("Archivo generado en:", outputPath);
    return `Archivo generado exitosamente en: ${outputPath}`;
  }

  const response = content
    .map((res) => {
      return `${res.selected.join(" ")} ${res.total}`;
    })
    .join("\n");

  const outputPath = path.join(app.getPath("desktop"), filename + ".txt");

  fs.writeFileSync(outputPath, response, "utf8");

  console.log("Archivo generado en:", outputPath);
  return `Archivo generado exitosamente en: ${outputPath}`;
}

module.exports = { renderView };
