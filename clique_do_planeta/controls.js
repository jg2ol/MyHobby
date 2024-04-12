const planeta_compras = document.getElementById("planeta_compras");
const planeta = document.getElementById("planeta");
const planeta_img = document.getElementById("planeta_img");
const compras = document.getElementById("compras");
const upgrades = document.getElementById("upgrades")

function compras_maquinas() {
    planeta.style.width = "58%";
    planeta.style.transition = "450ms";
    planeta_img.style.marginLeft = "230px";
    compras.style.display = "inline-block";
}

function widsub10() {
    planeta_img.style.width = "340px";
    document.getElementById("renda_player").style.marginTop = "10px";
}
function widadd10() {
    planeta_img.style.width = "350px";
    document.getElementById("renda_player").style.marginTop = "0px";
}

function setaverde() {upgrades.querySelector("img").src = "img_botoes/seta_up.png";}
function setabranca() {upgrades.querySelector("img").src = "img_botoes/seta_up_verde.png";}