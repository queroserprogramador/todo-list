var tarefas = [];

function getTemplateItem(texto, indice) {
    return `<li>
                <span>${texto}</span>
                <button value="${indice}">-</button>
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
    botoes = document.getElementsByTagName("button");
    folhaEstilo = document.styleSheets[1];
    
    botoes.onclick = function(){
        regrasDiv.style.background = "black";
        regrasDiv.style.color = "green";
        regrasDiv.style.border = "3px solid blue";
    }
}

document.addEventListener('DOMContentLoaded' , function () {
    var botaoAddItem = document.getElementById('add_item');
    var input = document.getElementById('#task');
    botaoAddItem.addEventListener('click', function (e) {
        adicionarItem(input.value);
        input.value = "";
    });
});