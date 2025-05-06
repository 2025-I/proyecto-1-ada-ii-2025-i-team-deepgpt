const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

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

    // IPC para ejecutar la solución seleccionada
    ipcMain.handle(
      "ejecutar-solucion",
      async (event, { problema, solucion, input }) => {
        try {
          let algoritmo;

          if (problema === "p1") {
            // Palíndromo más largo
            switch (solucion) {
              case "sol1":
                algoritmo = require("../src/palindrome/brute-force-solution.js");
                break;
              case "sol2":
                const {
                  isPalindromeBruteForce,
                } = require("../palindrome/brute-force-solution.js");
                algoritmo = isPalindromeBruteForce(input.n);
                break;
              case "sol3":
                algoritmo = require("../src/palindrome/greedy-solution.js");
                break;
              default:
                throw new Error("Solución no válida para problema p1");
            }
          } else if (problema === "p2") {
            // Fiesta de la empresa
            switch (solucion) {
              case "sol21":
                algoritmo = require("../src/business-party/brute-force-solution.js");
                break;
              case "sol22":
                algoritmo = require("../business-party/dynamic-programming-soluction.js");
                break;
              case "sol23":
                
                const {
                  greedySolutionPartyInvite,
                } = require("../business-party/greedy-solution.js");
                const resultados = greedySolutionPartyInvite(
                  input.n,
                  input.problems
                );

                let contenido = "";
                resultados.forEach((res) => {
                  contenido += `${res.invitados.join(" ") + " " +res.total}\n`;
                });

                const outputPath = path.join(
                  app.getPath("desktop"),
                  "resultado_fiesta_greedy.txt"
                );

                fs.writeFileSync(outputPath, contenido, "utf8");

                console.log("Archivo generado en:", outputPath);
                return `Archivo generado exitosamente en: ${outputPath}`;
              default:
                throw new Error("Solución no válida para problema p2");
            }
          } else {
            throw new Error("Problema no reconocido");
          }
          //aqui si está mostrando el resultado
          console.log("Resultados:", algoritmo);
          return algoritmo;
        } catch (error) {
          console.error("Error al ejecutar la solución:", error.message);
          return "Error: " + error.message;
        }
      }
    );
  });
}

module.exports = { renderView };
