//Comentário por linha: Tudo o que estiver nessa linha será comentário.

/*Comentário por bloco:
Tudo o que estiver aqui dentro será interpretado como comentário.
*/

/* onclick: Disparado por um clique
ondblclick: Disparado por um clique duplo
onmouseover: Igual ao hover
onmouseout: Disparado quando o mouse está fora do elemento
onmousemove: Disparado quando o mouse se move p/ o elemento
onmousedown: Disparado ao pressionar o botão do mouse (somente pressionar)
onmouseup: Disparado ao soltar o clique do mouse
onfocus: Disparado quando o elemento recebe o foco, válido p/ input
onchange: Disparado ao mudar o conteúdo
onblur: Disparado quando o elemento perde o foco
onkeydown: Disparado ao pressionar uma tecla
onkeyup: Disparado ao soltar uma tecla
onkeypress: Disparado ao pressionar e soltar uma tecla
onload: Disparado ao carregar a página
onresize: Disparado ao mudar o tamanho da janela na tela
*/

function temaclaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    
}
function temaescuro() {
    document.body.style.backgroundColor = "#252525";
    document.body.style.color = "white";
}

const pessoa = ["João", "Vitor", 17, "Chama", "a", "b"];
pessoa.shift(); //apaga o item de posição 0
delete pessoa[0]; //define como "undefined" o item de posição 0
pessoa.splice(2, 1, "add1", "add2"); //adicionar itens: (posição, quantidade de itens p/ apagar(a frente), valor dos próximos itens)
document.getElementById("texto1").innerHTML = pessoa.join(" - "); //printa a array e adiciona texto entre cada item

const lista1 = [1, 2, 3, 4, 5, 6, 7];
const lista2 = [8, 9, 10, 11, 12];
const lista3 = [lista1.concat(lista2)]; //junção das duas listas
const numeros = [lista1.slice(3, 6).concat(lista2)]; //pega os valores da lista1 da posição 3 até a posição 6-1 e junta com a lista2
document.getElementById("texto2").innerHTML = numeros;

const letras = ["b", "c", "z", "a"];
const letrasOrdem = letras.sort(); //ordem alfabética da array letras
letrasOrdem.reverse(); //ordem contrária da array letrasOrdem
document.getElementById("texto3").innerHTML = letrasOrdem; 

const lista4 = [40, 100, 25, 1, 2];
lista4.sort(function (a,b) {return a - b}); //ordem crescente; se fosse decrescente, seria {return b - a}
document.getElementById("texto4").innerHTML = [lista4.concat(maiorNumero(lista4))];

function maiorNumero(array) {
    return Math.max.apply(null, array);
} //função máxima; o mesmo serve p/ mínimo

const maiorque20 = lista4.filter(ma20); //array que guarda uma filtragem da lista4
function ma20(value, index, array) {
    return value > 20;
} //função maior que
document.getElementById("texto5").innerHTML = maiorque20;
//lista4.length conta quantos itens há na lista4

function verificar() {
    let nome = document.getElementById("nome").value;
    if (nome =="" || nome == null) {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não ser vazio!";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "Tudo certo!";
        p.style.color = "green";
    }
}
