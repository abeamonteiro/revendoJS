//Estudando entrada e saída de dados
const leia = require('readline-sync');
// let mensagem;

// mensagem = leia.question("\nDigite um valor do tipo string: ");
// console.log("O valor string digitado foi: "+mensagem);
let quantidade
let altura
let tipo
let resposta
let palavra

// quantidade = leia.questionInt("\nDigite um valor do tipo inteiro: ", {limitMessage: 'Digite um número inteiro'});
// console.log("O valor inteiro digitado foi: "+quantidade);

// altura = leia.questionFloat("\nDigite sua altura(ex.: 00.00): ")
// console.log("A altura do usuário é: " +altura)

// tipo = leia.keyIn("\nDigite um valor do tipo Char: ")
// console.log("\n O valor char digitado foi: " + tipo)

// resposta = leia.keyInYNStrict("\nDigite um valor do tipo booleano: ")
// console.log("\n A resposta digitada foi: " +resposta)

palavra = leia.question("\nDigite um valor do tipo string: ")
console.log("\n A palavra digitada foi: " +palavra)