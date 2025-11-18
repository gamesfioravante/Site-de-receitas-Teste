function mostrarReceita(tipo) {
    let receitaBox = document.getElementById("receita");

    // Objeto vazio (antes tinha as receitas)
    let receitas = {};

    if (receitas[tipo]) {
        receitaBox.innerHTML = receitas[tipo];
    } else {
        receitaBox.innerHTML = "<p>Nenhum conteúdo disponível.</p>";
    }
}
