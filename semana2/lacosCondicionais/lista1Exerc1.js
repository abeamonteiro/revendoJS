// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e 
// imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let n1;
let n2;
let n3;

n1 = leia.questionInt("\nDigite o primeiro numero: ");
n2 = leia.questionInt("\nDigite o segundo numero: ");
n3 = leia.questionInt("\nDigite o terceiro numero: ");

let soma = n1 + n2 

if (soma > n3){
    console.log("A soma dos dois primeiros números é maior que o terceiro número digitado!");
}

if (soma < n3){
     console.log("A soma dos dois primeiros números é menor que o terceiro número digitado!");
}

if (soma === n3){
     console.log("A soma dos dois primeiros números é igual que o terceiro número digitado!");
}