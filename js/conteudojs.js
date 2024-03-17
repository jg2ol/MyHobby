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

function clique() {
    document.body.style.backgroundColor = "red";
}
function voltaclique() {
    document.body.style.backgroundColor = "";
}
function temaclaro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("claro").style.backgroundColor = "purple";
    document.getElementById("claro").style.color = "red";
    document.getElementById("claro").style.border = "solid 2px blue";
    
}
function temaescuro() {
    document.body.style.backgroundColor = "#252525";
    document.body.style.color = "white";
    document.getElementById("escuro").style.backgroundColor = "blue";
    document.getElementById("escuro").style.color = "yellow";
    document.getElementById("escuro").style.border = "solid 2px red";
}