const readline = require('readline-sync');

let pilha = [];
let opcao;

do {

    console.log("\n***********************");
    console.log("1 - Adicionar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Retirar Livro");
    console.log("0 - Sair");
    console.log("***********************");

    opcao = readline.questionInt("Digite uma opcao: ");

    switch (opcao) {

        case 1:
            let livro = readline.question("Digite o nome do livro: ");
            pilha.push(livro);

            console.log("\nPilha:");
            pilha.forEach(l => console.log(l));

            console.log("\nLivro adicionado!");
            break;

        case 2:
            console.log("\nLista de Livros na Pilha:");

            if (pilha.length === 0) {
                console.log("A pilha esta vazia!");
            } else {
                pilha.forEach(l => console.log(l));
            }
            break;

        case 3:
            if (pilha.length === 0) {
                console.log("\nA Pilha esta vazia!");
            } else {
                pilha.pop();
                console.log("\nUm Livro foi retirado da pilha!");

                console.log("\nPilha:");
                pilha.forEach(l => console.log(l));
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpcao invalida!");
    }

} while (opcao !== 0);