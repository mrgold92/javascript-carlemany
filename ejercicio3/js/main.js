let respuesta = confirm("Hola Mundo!");

if (respuesta) {
    console.log("Le has dado OK");
    document.getElementById('mensaje').textContent = "Le has dado OK";
} else {
    console.log("Le has dado Cancelar");
    document.getElementById('mensaje').textContent = "Le has dado a Cancelar";
}