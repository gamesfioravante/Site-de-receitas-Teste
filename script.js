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
        `,
        bolo: `
            <h2>Bolo de Chocolate Simples</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>2 xícaras de farinha de trigo</li>
                <li>1 e 1/2 xícara de açúcar</li>
                <li>1 xícara de chocolate em pó</li>
                <li>3 ovos</li>
                <li>1 xícara de leite</li>
                <li>1/2 xícara de óleo</li>
                <li>1 colher (sopa) de fermento em pó</li>
            </ul>
            <p><strong>Modo de preparo:</strong> Misture todos os ingredientes, coloque em uma forma untada e leve ao forno preaquecido a 180°C por cerca de 40 minutos.</p>
        `,
        pudim: `
            <h2>Pudim de Leite Condensado</h2>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                <li>1 lata de leite condensado</li>
                <li>1 lata de leite (use a lata do condensado como medida)</li>
                <li>3 ovos</li>
                <li>1 xícara de açúcar (para a calda)</li>
            </ul>
            <p><strong>Modo de preparo:</strong></p>
            <p>Derreta o açúcar em fogo baixo até virar uma calda dourada e caramelize a forma. No liquidificador, bata os ovos, o leite e o leite condensado. Despeje na forma e leve ao forno em banho-maria por cerca de 1 hora. Deixe esfriar e desenforme.</p>
        `
    };

    if (receitas[tipo]) {
        receitaBox.innerHTML = receitas[tipo];
    } else {
        receitaBox.innerHTML = "<p>Receita não encontrada.</p>";
    }
}
