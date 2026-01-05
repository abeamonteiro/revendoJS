// Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, 
// e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). 
// A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, 
// mostre a mensagem na tela Operação Inválida!

const leia = require("readline-sync");

let numero1;
let numero2;
let opcao;


numero1 = leia.questionInt("\nDigite a o primeiro numero: ");
numero2 = leia.questionInt("\nDigite a o segundo numero: ");

menu = 
        console.log("\n\n                   Qual a operação desejada?              ");
        console.log("\n*********************Opção 1 para Soma**********************");
        console.log("\n*********************Opção 2 para Subtração*****************");
        console.log("\n*********************Opção 3 para Multiplicação*************");
        console.log("\n*********************Opção 4 para Divisão*******************");
    
opcao = leia.questionInt("\n\nDigite a opcao desejada: ");        

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1*numero2
let divisao = numero1/numero2

switch (opcao) {
    case 1:
        console.log(numero1 + " + " + numero2 + " = " + soma);
        break;
    case 2:
        console.log(numero1 + " - " + numero2 + " = " + subtracao);
        break;
    case 3:
        console.log(numero1 + " * " + numero2 + " = " + multiplicacao);
        break;
    case 4:
        console.log(numero1 + " / " + numero2 + " = " + divisao);
        break;
}