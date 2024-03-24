let input = document.getElementById('input_tarefa');
let btn_add = document.getElementById('btn-add');
let main = document.getElementById('area_lista');
let contador = 0;

function addTarefa() {
    let valor_input = input.value;

    if ((valor_input !== "") && (valor_input !== null) && (valor_input !== undefined)) {
        ++contador;

        let novo_item = `<div id="${contador}" class="item">
        <div onclick="marcar_tarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined">radio_button_unchecked</span>
        </div>

        <div onclick="marcar_tarefa(${contador})" class="item-nome">
            ${valor_input}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span id="del" class="material-symbols-outlined">delete</span> Deletar Tarefa</button>
        </div>
    </div>`;
    main.innerHTML += novo_item;
    input.value = ""; //zera o input depois de criar uma Tarefa
    input.focus(); //o usuário volta p/ o input depois de criar uma Tarefa
    }
}
//essa função será aplicada no elemento que tiver o id igual a contador pois o onclick no botão está com a função em x = ${contador}
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcar_tarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe === "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);

        icone.text.remove('radio_button_unchecked');
        icone.text.add('radio_button_checked');
        
        item.parentNode.appendChild(item); //manda o clicado p/ o final da lista
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);

        icone.text.remove('radio_button_checked');
        icone.text.add('radio_button_unchecked');
    }
}

input.addEventListener("keyup", function(event) {
    //enter é a tecla 13
    if(event.keyCode === 13) {
        event.preventDefault(); //cancela o efeito do enter dentro do input
        btn_add.click();
    }
})
