export default class Conta {

    constructor(numero, agencia, tipo, titular, saldo) {
        if (this.constructor === Conta) {
            throw new Error("Esta classe é abstrata e não pode ser instanciada");
        }

        this.numero = numero;
        this.agencia = agencia;
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }

    visualizar() {
        console.log("\n***********************");
        console.log("Dados da Conta:");
        console.log("***********************");
        console.log("Numero da Conta:", this.numero);
        console.log("Agência:", this.agencia);
        console.log("Tipo:", this.tipo);
        console.log("Titular:", this.titular);
        console.log("Saldo:", this.saldo);
    }
}