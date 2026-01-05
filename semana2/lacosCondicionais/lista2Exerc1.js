//Com base na tabela abaixo, escreva um algoritmo que leia o código de 
// item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela 
// o valor total da conta e o nome do produto que foi comprado.

const leia = require("readline-sync");

let opcao;
let quantidade;
let p1 = 10; let p2 = 15; let p3 = 18; let p4 = 12; let p5 = 8; let p6 = 13
let menu;

menu = leia.questionInt("Deseja ver o Menu? (1- Sim/2- Nao): ");
    if (menu === 1){
        console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
        console.log("\n************--Opção 1 para Cachorro Quente--***********");
        console.log("\n************--Opção 2 para X-Salada--******************");
        console.log("\n************--Opção 3 para X-Bacon--*******************");
        console.log("\n************--Opção 4 para Bauru--*********************");
        console.log("\n************--Opção 5 para Refrigerante--**************");
        console.log("\n************--Opção 6 para Suco de Laranja--***********");
        
    } if (menu === 2) {
        console.log("\nPrograma Encerrado!")
    }

opcao = leia.questionInt("\nDigite a opçao escolhida: ");
quantidade = leia.questionInt("\nDigite a quantidade desejada: ");


switch (opcao) {
    case 1:
        console.log("Produto: Cachorro Quente; \n Valor Total: " + quantidade*p1 + " reais");
        break;
    case 2:
        console.log("Produto: X-Salada; \n Valor Total: " + quantidade*p2 + " reais");
        break;
    case 3:
        console.log("Produto: X-Bacon; \n Valor Total: " + quantidade*p3 + " reais");
        break;
    case 4:
        console.log("Produto: Bauru; \n Valor Total: " + quantidade*p4 + " reais");
        break;
    case 5:
        console.log("Produto: Refrigerante; \n Valor Total: " + quantidade*p5 + " reais");
        break;
    case 6:
        console.log("Produto: Suco de Laranja; \n Valor Total: " + quantidade*p6 + " reais");
        break;
}