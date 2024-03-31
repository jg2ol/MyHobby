//Comentário por linha: Tudo o que estiver nessa linha será comentário.

/*Comentário por bloco:
Tudo o que estiver aqui dentro será interpretado como comentário.
*/

/*
onclick: Disparado por um clique
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

function cor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //deixa todo o texto em letras minúsculas

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;

        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " + cor;
        }
} /*Parecido com o if porém mais usado quando há mais de uma condição, analisa até o tipo da variável da condição*/

for (let i = 0; i <= 100; i = i + 1) {
    document.getElementById("teste2").innerHTML += i + ", ";
}


//setTimeout(function, milisegundos), ativa a função uma única vez quando der o tempo
function começar1 () {
    document.getElementById('tempo1').innerHTML = "Começou a contagem!";
    tempo = setTimeout(function(){
        document.getElementById('tempo1').innerHTML = "Executou o setTimeout";
    }, 1000);
}
//clearTimeout cancela o setTimeout
function parar1 () {
    clearTimeout(tempo);
    document.getElementById('tempo1').innerHTML = "Parou a contagem!";
}

//setInterval(function, milissegundos), é um loop
function começar2() {
    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo2').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo2').innerHTML = "Acabou o tempo!";
            parar2();
        } else {
            document.getElementById('tempo2').innerHTML = soma;
        }
    }, 1000)
}
//clearTimeout, mesma coisa p/ o setInterval
function parar2() {
    clearTimeout(tempo);
    document.getElementById('tempo2').innerHTML = "Acabou o tempo!";
}


//classes são maquinários p/ construir objetos
class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}
const uno = new Carro("Fiat", "Uno", 2001);

//manipulando a data; ex.: vencimento, diferença de dias
let data = new Date(); //variável que carrega a data atual do computador
let ano = data.getFullYear(); //mostra o ano (com 4 dígitos)
let mes = data.getMonth(); //mostra o mês, 0-11 === janeiro-dezembro
let dia_mes = data.getDate(); //mostra o dia do mês, 1-31
let dia_semana = data.getDay(); //mostra o dia da semana, 0-6 === domingo-sábado
let hora = data.getHours(); //mostra a hora, 0-23
let minutos = data.getMinutes(); //mostra os minutos, 0-59
let segundos = data.getSeconds(); //mostra os segundos, 0-59
let milisegundos = data.getMilliseconds(); //mostra os milissegundos, 0-999
let data_br = data.toLocaleDateString('pt-BR'); //mostra a data de acordo com o costume do país especificado


const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
//transformando um objeto em texto bruto
let texto_carro = JSON.stringify(carro);
document.getElementById('teste3').innerHTML = texto_carro;
//transformando o texto em objeto
let obj_carro = JSON.parse(texto_carro);
console.log(obj_carro);
