import { Conta } from "./Conta"

export class ContaCorrente extends Conta {

constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    private limite: number
){
super(numero, agencia, tipo, titular, saldo)
}

public visualizar(): void {

super.visualizar()

console.log("Limite:", this.limite)

}

}