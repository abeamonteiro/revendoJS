const readline = require('readline-sync');

let fila = [];
let opcao;

do {

    console.log("\n***********************");
    console.log("1 - Adicionar Cliente");
    console.log("2 - Listar Clientes");
    console.log("3 - Chamar Cliente");
    console.log("0 - Sair");
    console.log("***********************");

    opcao = readline.questionInt("Digite uma opcao: ");

    switch (opcao) {

        case 1:
            let nome = readline.question("Digite o nome do cliente: ");
            fila.push(nome);

            console.log("\nFila:");
            fila.forEach(cliente => console.log(cliente));

            console.log("\nCliente Adicionado!");
            break;

        case 2:
            console.log("\nLista de Clientes na Fila:");

            if (fila.length === 0) {
                console.log("A fila esta vazia!");
            } else {
                fila.forEach(cliente => console.log(cliente));
            }
            break;

        case 3:
            if (fila.length === 0) {
                console.log("\nA Fila esta vazia!");
            } else {
                fila.shift();
                console.log("\nO Cliente foi Chamado!");

                console.log("\nFila:");
                fila.forEach(cliente => console.log(cliente));
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpcao invalida!");
    }

} while (opcao !== 0);