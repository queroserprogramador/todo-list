var tarefas = [];

function getTemplateItem(texto, indice) {
    return `<li>
    <span>
        <span>${texto}</span>
        <button value="${indice}">-</button>
    </span>
</li>`;
}

function adicionarItem(texto) {
    tarefas.push(texto);
    refreshTela();
    
}

function removerItem(indice) {
    tarefas = tarefas.filter(function (tarefa, i) {
        return indice !== i;
    });
    refreshTela();
}

function refreshTela() {
    var itemsHtml = tarefas.map(function (tarefa, indice) {
        return getTemplateItem(tarefa, indice);
    });

    var listaHtml = document.getElementById('tarefas');
    listaHtml.innerHTML = itemsHtml.join('');
    var botoes = listaHtml.getElementsByTagName('button');
    for (const botao of botoes) {
        botao.addEventListener('click', function (e) {
            removerItem(parseInt(e.target.value));
        });    
    }
}

document.addEventListener('DOMContentLoaded' , function () {
    var botaoAddItem = document.getElementById('add_item');
    var input = document.getElementById('#input');
    botaoAddItem.addEventListener('click', function (e) {
        adicionarItem(input.value);
        input.value = "";
    });
});