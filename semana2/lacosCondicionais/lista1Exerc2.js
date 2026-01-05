// Escreva um algoritmo que leia um número inteiro via teclado 
// e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.
// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
// imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let n1;

n1 = leia.questionInt("\nDigite um numero: ");


if (n1 > 0 && n1 % 2 === 0 ){
    console.log("O número digitado é positivo e par");
}

if (n1 > 0 && n1 % 2 != 0 ){
    console.log("O número digitado é positivo e ímpar");
}

if (n1 < 0 && n1 % 2 === 0 ){
    console.log("O número digitado é negativo e par");
}

if (n1 < 0 && n1 % 2 != 0 ){
     console.log("O número digitado é negativo e ímpar");
}
