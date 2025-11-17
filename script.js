function mostrarReceita(tipo) {
    let receitaBox = document.getElementById("receita");

    let receitas = {
        lasanha: `
            <h2>Lasanha à Bolonhesa</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>500g de carne moída</li>
                <li>1 pacote de massa para lasanha</li>
                <li>Molho de tomate</li>
                <li>Queijo e presunto</li>
            </ul>
            <p><strong>Modo de preparo:</strong> Monte camadas de molho, massa e queijo. Asse por 40 minutos.</p>
        `,
        panqueca: `
            <h2>Panquecas Americanas</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>1 xícara de farinha</li>
                <li>1 ovo</li>
                <li>1 colher de açúcar</li>
                <li>1 xícara de leite</li>
            </ul>
            <p><strong>Modo de preparo:</strong> Misture tudo e frite pequenas porções na frigideira.</p>
        `,
        salada: `
            <h2>Salada Tropical</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>Alface</li>
                <li>Manga picada</li>
                <li>Abacaxi picado</li>
                <li>Molho de iogurte</li>
            </ul>
            <p><strong>Modo de preparo:</strong> Misture todos os ingredientes e finalize com o molho.</p>
        `
    };

    receitaBox.innerHTML = receitas[tipo];
}
