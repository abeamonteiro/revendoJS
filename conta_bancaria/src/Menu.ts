import readlineSync from 'readline-sync'
import { Conta } from '../src/model/Conta'

let opcao: number

do {

console.log("*****************************************************")
console.log("                                                     ")
console.log("                BANCO DO BRAZIL COM Z                ")
console.log("                                                     ")
console.log("*****************************************************")
console.log("                                                     ")
console.log("            1 - Criar Conta                          ")
console.log("            2 - Listar todas as Contas               ")
console.log("            3 - Buscar Conta por Número              ")
console.log("            4 - Atualizar Dados da Conta             ")
console.log("            5 - Apagar Conta                         ")
console.log("            6 - Sacar                                ")
console.log("            7 - Depositar                            ")
console.log("            8 - Transferir valores entre Contas      ")
console.log("            9 - Sair                                 ")
console.log("                                                     ")
console.log("*****************************************************")

console.log("Entre com a opção desejada: ")
opcao = readlineSync.questionInt("")

switch(opcao){

case 1:
    console.log("\nCriar Conta\n")
break

case 2:
    console.log("\nListar todas as Contas\n")
break

case 3:
    console.log("\nConsultar Conta por Número\n")
break

case 4:
    console.log("\nAtualizar Dados da Conta\n")
break

case 5:
    console.log("\nApagar Conta\n")
break

case 6:
    console.log("\nSacar\n")
break

case 7:
    console.log("\nDepositar\n")
break

case 8:
    console.log("\nTransferir valores entre Contas\n")
break

case 9:
    console.log("\nBanco do Brazil com Z - O seu futuro começa aqui!")
break

default:
    console.log("\nOpção Inválida!\n")

}

} while(opcao != 9)