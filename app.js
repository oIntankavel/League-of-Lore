function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
    <h2>
    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}
    
    Determinado a limpar seu nome e encontrar o verdadeiro assassino, Yasuo vaga por Ionia, sua espada e sua maestria sobre o vento suas únicas companhias. Ele busca redenção, mas também luta contra seus próprios demônios internos, como a impaciência e a arrogância que o levaram a tomar decisões impulsivas no passado.</p>
    <a href="${dado.link}" target="_blank">historia completa</a>
    </div>
    `
    }
    
    section.innerHTML = resultados
}

