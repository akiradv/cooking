function mostrarReceita(idIngredientes) {
    const ingredientes = document.getElementById(idIngredientes);
    if (ingredientes.style.display === "none") {
        ingredientes.style.display = "block";
    } else {
        ingredientes.style.display = "none";
    }
}
