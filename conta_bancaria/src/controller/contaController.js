import ContaRepository from "../repository/ContaRepository.js";

export default class ContaController extends ContaRepository {

    listaContas = [];

    procurarPorNumero(numero) {
        return this.listaContas.find(conta => conta.numero === numero);
    }

    listarTodas() {
        this.listaContas.forEach(conta => conta.visualizar());
    }

    cadastrar(conta) {
        this.listaContas.push(conta);
        console.log("Conta cadastrada com sucesso!");
    }

    atualizar(conta) {
        let index = this.listaContas.findIndex(c => c.numero === conta.numero);

        if (index !== -1) {
            this.listaContas[index] = conta;
            console.log("Conta atualizada!");
        }
    }

    deletar(numero) {
        let index = this.listaContas.findIndex(c => c.numero === numero);

        if (index !== -1) {
            this.listaContas.splice(index, 1);
            console.log("Conta deletada!");
        }
    }

    sacar(numero, valor) {
        let conta = this.procurarPorNumero(numero);

        if (conta && conta.saldo >= valor) {
            conta.saldo -= valor;
            console.log("Saque realizado!");
        }
    }

    depositar(numero, valor) {
        let conta = this.procurarPorNumero(numero);

        if (conta) {
            conta.saldo += valor;
            console.log("Depósito realizado!");
        }
    }

    transferir(numeroOrigem, numeroDestino, valor) {

        let contaOrigem = this.procurarPorNumero(numeroOrigem);
        let contaDestino = this.procurarPorNumero(numeroDestino);

        if (contaOrigem && contaDestino && contaOrigem.saldo >= valor) {

            contaOrigem.saldo -= valor;
            contaDestino.saldo += valor;

            console.log("Transferência realizada!");
        }
    }
}