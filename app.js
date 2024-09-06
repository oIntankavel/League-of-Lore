function pesquisar() {
    // Obtém a referência à seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
        // Se estiver vazio, exibe uma mensagem de aviso e encerra a função
        section.innerHTML = "<p>Nenhum Resultado, por favor digite seu campeão</p>";
        return;
    }

    // Inicializa variáveis para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre o array 'dados' (definido em dados.js)
    for (let dado of dados) {
        // Converte o título, a descrição e as tags do campeão para minúsculas para comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // Verifica se o termo de pesquisa está presente no título, na descrição ou nas tags do campeão
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se o campeão corresponder à pesquisa, adiciona seu HTML à string 'resultados'
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">historia completa</a>
            </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (!resultados) {
        // Se nenhum resultado for encontrado, exibe uma mensagem informando o usuário
        resultados = "<p>nada foi encontrado, por favor verifique se digitou corretamente.<br> atualmente só temos campeões de ionia ou relacionados!</p>";
    }

    // Atualiza o conteúdo da seção de resultados com os resultados da pesquisa ou a mensagem de "Nada encontrado"
    section.innerHTML = resultados;
}
