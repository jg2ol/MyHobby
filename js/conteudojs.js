// Comentário por linha

// tipagem de variáveis
// const --> variáveis imutáveis, tentar mudar seu valor resulta em erro
const nome1 = "joao";
const nome2 = "gabriel"; // tipo "string"
const nome3 = nome1 + nome2;
// as expressões são conformes já se saiba
console.log(nome3); // imprime no terminal (powershell)
// obs.: p/ criar expressões dentro de strings se usa `${variavel}`
const nome4 = `${nome1} ${nome2}`; // "template string"
console.log(nome4);
console.log(typeof nome3);
console.log(typeof nome4);

const nota1 = 9.8;
const nota2 = 5;
const media = (nota1+nota2)/2;
if (media >= 7) {console.log(`GG, sua média foi ${media}.`)}
else {console.log(`Notas como essas representam sua falta de esforço. Média: ${media}.`)}

// Objetos - é como se fossem dicionários do python
// Declaração: objeto {p1: content1, p2: content2} const var = objeto.p1;
const joao = {
    idade: 18,
    ira: 9.4952,
    período: 2
}
console.log(`O ira de ${nome1} é ${joao.ira}.`);
console.log(typeof joao);
console.log(joao);

// let --> variáveis mutáveis
// ex.: estruturas de repetição de código
for (let i = 0; i < 10; i++) {console.log(i);}
