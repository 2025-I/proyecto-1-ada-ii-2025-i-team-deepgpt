const { ipcRenderer } = require("electron");

document.getElementById("chooseFileBtn").addEventListener("click", async () => {
  const result = await ipcRenderer.invoke("select-file");
  if (result) {
    document.getElementById("filePath").innerText = `Archivo: ${result.path}`;
    // Puedes hacer algo con result.content (contenido del archivo)
    console.log(result.content);
  } else {
    document.getElementById("filePath").innerText = "No se seleccionó archivo.";
  }
});
